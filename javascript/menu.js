var open = document.getElementById('open-menu');
var menu = document.getElementById('menu-open');
var close = document.getElementById('close-menu');
var dark = document.getElementById('dark');
var theme = document.getElementById('theme');
var nav_item = document.getElementById('nav_item');
var mobilenav = document.getElementById('mobile_nav');

open.addEventListener("click", function() {
  menu.style.display = "block";
  menu.style.width = "100%";
});
close.addEventListener("click", function() {
  menu.style.display = "none";
});
dark.addEventListener("click", function(){
  if(theme.style.background === "white" || theme.style.color === "black" || mobilenav.style.background === "white" || menu.style.background === "white") {
  	theme.style.background = "#121614";
  	theme.style.color = "white";
  	mobile_nav.style.background = "#121614";
  	menu.style.background = "#121614";
  }
   else{
  	theme.style.background = "white";
  	theme.style.color = "black";
  	mobile_nav.style.background = "white";
     menu.style.background = "white";
  }
});