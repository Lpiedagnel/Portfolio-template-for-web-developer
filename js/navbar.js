/* Toggle Navbar Hamburger */

const navbarList = document.getElementById("navbar__list")
const navbarHamburger = document.getElementById("navbar__hamburger")

function toggleNavbar() {
  console.log("click")
  if (navbarList === "navbar__list") {
    navbarList.className += "--responsive"
  } else {
    navbarList.className = "navbar__list"
  }
}

navbarHamburger.addEventListener("click", toggleNavbar)
