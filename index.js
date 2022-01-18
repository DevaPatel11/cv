const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




var lastScrollTop;
var navbar = document.querySelector('header');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-80px';
navbar.style.backgroundColor = "#E4F9F5";
}
else{
navbar.style.top='0';

}
lastScrollTop = scrollTop;
});
// var lastScrollTop = 0;
// var navbar = document.querySelector("nav");
// var head = document.querySelector("header");
// window.addEventListener("scroll", function(){
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop){
//     navbar.style.top = "-50px";
//     navbar.style.backgroundColor = "#E4F9F5";
//     head.style.top = '0px';
//   }else {
//     lastScrollTop = scrollTop;
//   }
// })
