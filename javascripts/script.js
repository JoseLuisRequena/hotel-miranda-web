const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu-div");
const textMenu = document.getElementById("menu").innerHTML;
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu-div-active");
  if (menu.classList.contains("menu-div-active")) {
    menuIcon.setAttribute("src", "./img/iconos_svg/x.svg");
    menu.innerHTML = textMenu;
  } else {
    menuIcon.setAttribute("src", "./img/iconos_svg/menu.svg");
    menu.innerHTML = "";
  }
});

const swiper = new Swiper(".rooms__slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});