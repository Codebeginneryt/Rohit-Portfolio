var open = document.getElementById('open-menu');
var menu = document.getElementById('menu-open');
var close = document.getElementById('close-menu');

open.addEventListener("click", function() {
  menu.style.display = "block";
  menu.style.width = "100%";
});
close.addEventListener("click", function() {
  menu.style.display = "none";
});