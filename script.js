const iconToggle = document.querySelector('.toggle_icon');
const navbarmenu = document.querySelector('.menu');
const menulinks = document.querySelectorAll('.menu_link');
const iconclose = document.querySelector('.close_icon');

iconToggle.addEventListener('click',() => {
    navbarmenu.classList.toggle('active');
});

iconclose.addEventListener('click',() => {
    navbarmenu.classList.remove('active');
});

menulinks.foreach((menulinks) => {
    menulinks.addEventListener('click',() => {
        navbarmenu.classList.remove('active');
    })
});