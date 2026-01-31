function login(){
  const telp = document.getElementById('telpLogin').value.trim();
  const pass = document.getElementById('passLogin').value.trim();

  if(telp.length<10 || isNaN(telp)){alert("Nomor minimal 10 digit & angka");return;}
  if(pass.length<5){alert("Password minimal 5 karakter");return;}

  const result = loginUser(telp,pass);
  if(result==="admin"){
    localStorage.setItem("adminLogin",telp);
    window.location.href="admin-dashboard.html";
  } else if(result==="user"){
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u=>u.telp===telp);
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href="home.html";
  }
}