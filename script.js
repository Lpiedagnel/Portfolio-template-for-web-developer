/* Toggle Navbar Hamburger */
const navbarList = document.getElementById("navbar__list")
const navbarHamburger = document.getElementById("navbar__hamburger")

function toggleNavbar() {
  navbarList.className === "navbar__list"
    ? (navbarList.className += "--responsive")
    : (navbarList.className = "navbar__list")
}

navbarHamburger.addEventListener("click", toggleNavbar)

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show")
  })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))
