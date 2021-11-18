const openMenu = document.querySelector('#open-hamburger');
const closeMenu = document.querySelector('#close-hamburger');
const navLinks = document.querySelector('.nav-links');

function open() {
  navLinks.style.display = 'block';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
}
function close() {
  navLinks.style.display = 'none';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}

export default function addHamburgerMenu() {
  openMenu.addEventListener('click', open);
  closeMenu.addEventListener('click', close);
}