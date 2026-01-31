// ===================== USER DATABASE =====================
let users = JSON.parse(localStorage.getItem("users") || "[]");

// ===================== HELPER =====================
function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

function getUser(usernameOrPhone) {
    return users.find(
        u => u.username === usernameOrPhone || u.phone === usernameOrPhone
    );
}

// ===================== POPUP NEON =====================
function showPopup(message, duration = 2000){
    let popup = document.createElement("div");
    popup.className = "popup";
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.padding = "14px 24px";
    popup.style.background = "#0b0b0b";
    popup.style.color = "#22ff6e";
    popup.style.fontWeight = "bold";
    popup.style.border = "2px solid #22ff6e";
    popup.style.borderRadius = "12px";
    popup.style.zIndex = "9999";
    popup.style.boxShadow = "0 0 25px #22ff6e";
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(()=>{ popup.remove(); }, duration);
}

// ===================== REGISTER =====================
function register() {
    const input = document.querySelectorAll(".input-field");
    const username = input[0].value.trim();
    const phone = input[1].value.trim();
    const password = input[2].value;

    if(!username || !phone || !password){
        showPopup("Semua kolom harus diisi!");
        return;
    }

    if(getUser(username) || getUser(phone)){
        showPopup("Username atau nomor HP sudah digunakan!");
        return;
    }

    users.push({
        username,
        phone,
        password,
        role: "Member",
        popupShown: false
    });

    saveUsers();

    showPopup("Daftar berhasil!",1500);
    setTimeout(()=>{ location.href="login.html"; },1500);
}

// ===================== LOGIN =====================
function login() {
    const input = document.querySelectorAll(".input-field");
    const userInput = input[0].value.trim();
    const password = input[1].value;

    const user = getUser(userInput);
    if(!user || user.password !== password){
        showPopup("Username / Nomor HP atau password salah!");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    if(!user.popupShown){
        showPopup(`Selamat datang, ${user.username}!`,2000);
        user.popupShown = true;
        saveUsers();
    }

    setTimeout(()=>{ location.href="home.html"; },2000);
}

// ===================== LOAD HOME =====================
function loadHome() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if(!currentUser.username){
        location.href = "login.html";
        return;
    }

    const nameEl = document.getElementById("userName");
    const roleEl = document.getElementById("userRole");

    if(nameEl) nameEl.textContent = currentUser.username;
    if(roleEl) roleEl.textContent = currentUser.role;
}

// ===================== LOGOUT =====================
function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    location.href = "index.html";
}

// ===================== SETTINGS =====================
function changePassword() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const newPass = prompt("Masukkan password baru:");
    if(newPass){
        const user = getUser(currentUser.username);
        user.password = newPass;
        saveUsers();
        localStorage.setItem("currentUser", JSON.stringify(user));
        showPopup("Password berhasil diubah!");
    }
}

function changeName() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const newName = prompt("Masukkan username baru:");
    if(newName && !getUser(newName)){
        const user = getUser(currentUser.username);
        user.username = newName;
        saveUsers();
        localStorage.setItem("currentUser", JSON.stringify(user));
        const nameEl = document.getElementById("userName");
        if(nameEl) nameEl.textContent = newName;
        showPopup("Username berhasil diubah!");
    } else {
        showPopup("Username sudah digunakan!");
    }
}

// ===================== TOGGLE PASSWORD =====================
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-pass").forEach(btn => {
        btn.addEventListener("click", () => {
            const input = btn.parentElement.querySelector(".input-field");
            if(input){
                input.type = input.type === "password" ? "text" : "password";
            }
        });
    });

    // efek neon menu
    document.querySelectorAll(".menu-card").forEach(card=>{
        card.addEventListener("mouseenter",()=>{
            card.style.transform="scale(1.08)";
            card.style.boxShadow="0 0 25px #22ff6e";
        });
        card.addEventListener("mouseleave",()=>{
            card.style.transform="scale(1)";
            card.style.boxShadow="0 0 12px rgba(34,255,110,0.2)";
        });
    });
});