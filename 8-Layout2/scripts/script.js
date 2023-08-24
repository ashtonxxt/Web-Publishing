const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
/*const = var , document = whole html file*/
const navbar = document.querySelector(".navbar");
const herobanner = document.querySelector(".hero-banner");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    navbar.classList.toggle("active");
    herobanner.style.zIndex = -1;
})