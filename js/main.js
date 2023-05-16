// menu
const menu = document.querySelector(".navbar__links")
const menubutton = document.querySelector(".navbar__icons")
menubutton.addEventListener('click', () => {
    menu.classList.toggle("navbar__open");
    menubutton.classList.toggle("open");

})