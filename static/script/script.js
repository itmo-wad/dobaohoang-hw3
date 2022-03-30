// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

console.log(header)
window.onscroll = function() {
    const topIndex = window.scrollY;
    if(topIndex >= 100) {
        header.classList.add('navbarLight');
        disableButton(btn);
        console.log('disabled');
    }
    else {
        header.classList.remove('navbarLight');
        activateButton(btn);
        console.log('active');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const btn = document.querySelector('.navbar-toggler')

function clickHandler() {
    header.classList.toggle('navbarLight');
}
function activateButton(button) {
    button.addEventListener('click', clickHandler);
}
function disableButton(button) { 
    button.removeEventListener('click', clickHandler);
}

activateButton(btn);

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})