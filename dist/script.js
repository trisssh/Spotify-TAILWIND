// const toggle = document.querySelector(".toggle_menu");
// const header = document.querySelector(".header_menu");

// toggle.addEventLsitener("click", () => {
//     headNav.classList.toggle('')
// })


const toggle = document.querySelector('.toggle-menu');
const menu = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
})