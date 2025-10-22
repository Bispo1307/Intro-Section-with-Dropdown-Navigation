// MENU MOBILE
const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});

// DROPDOWN DESKTOP
const dropdownsDesktop = document.querySelectorAll(".dropdown-desktop");

dropdownsDesktop.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
});

// DROPDOWN MOBILE
const dropdownsMobile = document.querySelectorAll(".dropdown-mobile");

dropdownsMobile.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
});
