let collapsed = true;

function toggleMobileMenu() {
  document.getElementById("nav").classList.toggle("sm:hidden");
  img = document.querySelector('#hamburger img');
  collapsed = !collapsed;
  if (collapsed) {
    img.setAttribute('src', '../assets/images/icon-hamburger.svg');
  } else {
    img.setAttribute('src', '../assets/images/icon-close.svg');
  }
}

function listenKeyboard(event) {
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
    toggleMobileMenu();
  }
}

document.getElementById('hamburger').onclick = toggleMobileMenu;
document.getElementById('hamburger').onkeyup = listenKeyboard;

function dummyHandler() {
  alert("This is a dummy handler!");
}
