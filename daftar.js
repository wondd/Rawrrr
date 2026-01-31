<!DOCTYPE html>
<html>
<head>
  <title>Daftar - Rawrr Comunitas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>📝 Daftar</h2>

<input id="nama" placeholder="Username">
<input id="email" placeholder="Email">

<div class="eye">
  <input id="password" type="password" placeholder="Password">
  <span onclick="lihat()">👁</span>
</div>

<button onclick="daftar()">Daftar</button>

<!-- Tombol verifikasi WA -->
<button onclick="window.open('https://wa.me/6283159427191?text=Halo,%20saya%20ingin%20verifikasi%20di%20Rawrr%20Comunitas','_blank')" style="background:#25D366;">
  📲 Verifikasi via WhatsApp
</button>

<button onclick="location.href='home.html'">Home</button>

<div id="notif"></div>

<script src="auth.js"></script>

</body>
</html>