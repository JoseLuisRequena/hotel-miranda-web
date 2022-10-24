const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu-div");
const textMenu = document.querySelector("#menu").innerHTML;
const search = document.querySelector(".navbar__icons-search");

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

search.addEventListener("click", () => {

  search.classList.toggle("navbar__icons-search-active");
  
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

const facilitiesSwiper = function () {
  const swiper2 = new Swiper(".facilities__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

const foodsSwiper = function () {
  const swiper3 = new Swiper(".foods__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

const matchMedia600 = window.matchMedia("(max-width: 599px)");
if (innerWidth < 600) {
  facilitiesSwiper();
}
matchMedia600.onchange = (e) => {
  if (e.matches) {
    facilitiesSwiper();
    
  } else {
    location.reload();
  }
};

const foodsPagination = function () {
  const pagination = new Swiper(".foods__pagination", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
const matchMedia900 = window.matchMedia("(max-width: 899px)");
if (innerWidth < 900) {
  foodsPagination();
  foodsSwiper();
}
matchMedia900.onchange = (e) => {
  if (e.matches) {
    foodsPagination();
    foodsSwiper();
  } else {
    location.reload();
  }
};