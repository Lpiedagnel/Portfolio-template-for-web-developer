/* Toggle Navbar Hamburger */
const navbarList = document.getElementById("navbar__list")
const navbarHamburger = document.getElementById("navbar__hamburger")

function toggleNavbar() {
  navbarList.className === "navbar__list"
    ? (navbarList.className += "--responsive")
    : (navbarList.className = "navbar__list")
}

navbarHamburger.addEventListener('click', toggleNavbar)