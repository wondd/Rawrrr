// Ambil data login dari localStorage
let user = JSON.parse(localStorage.getItem("login"));

window.addEventListener("load",()=>{
    if(user){
        // Tampilkan intro
        let intro = document.getElementById("intro");
        let nameSpan = document.getElementById("username-intro");
        nameSpan.innerText = user.nama;
        intro.classList.add("show");

        // Sembunyikan intro setelah 3 detik
        setTimeout(()=>{ intro.classList.remove("show"); },3000);
    }
});