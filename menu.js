function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}
<link rel="manifest" href="manifest.json">
<script>
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js");
}
</script>