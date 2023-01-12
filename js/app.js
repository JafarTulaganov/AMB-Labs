const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active__tab");
    });
    target.classList.add("active__tab");
    tabs.forEach((tab) => {
      tab.classList.remove("active__tab");
    });
    tab.classList.add("active__tab");
  });
});

let regBtn = document.getElementById("reg-button");
regModal = document.getElementById("reg-modal");
regX = document.getElementById("x-reg");
mainLayout = document.getElementById("main");
regForget = document.getElementById("reg-modal-forget");
regForgetX = document.getElementById("x-reg-forget");
forgetBnt = document.getElementById("forget-btn");
returnBtn = document.getElementById("return");
orderBtn = document.getElementById("order-btn");
orderModal = document.getElementById("order-modal");
orderX = document.getElementById("x-order");
exitBtn = document.getElementById("exit-btn");
exitModal = document.getElementById("exit-modal");
exitX = document.getElementById("exit__x");
mobileRegBtn = document.getElementById("mobile-reg-btn");

if (regBtn) {
  regBtn.addEventListener("click", () => {
    regModal.classList.add("show-modal");
  });
}

if (regX) {
  regX.addEventListener("click", () => {
    regModal.classList.remove("show-modal");
  });
}

if (forgetBnt) {
  forgetBnt.addEventListener("click", () => {
    regForget.classList.add("show-modal");
    regModal.classList.remove("show-modal");
  });
}

if (regForgetX) {
  regForgetX.addEventListener("click", () => {
    regForget.classList.remove("show-modal");
  });
}

if (returnBtn) {
  returnBtn.addEventListener("click", () => {
    regForget.classList.remove("show-modal");
    regModal.classList.add("show-modal");
  });
}

if (orderBtn) {
  orderBtn.addEventListener("click", () => {
    orderModal.classList.add("show-modal");
  });
}

if (orderX) {
  orderX.addEventListener("click", () => {
    orderModal.classList.remove("show-modal");
  });
}

if (exitBtn) {
  exitBtn.addEventListener("click", () => {
    exitModal.classList.add("show-modal");
  });
}

if (exitX) {
  exitX.addEventListener("click", () => {
    exitModal.classList.remove("show-modal");
  });
}

if (mobileRegBtn) {
  mobileRegBtn.addEventListener("click", () => {
    regModal.classList.add("show-modal");
  });
}

TweenMax.to(".home__title", 2, {
  delay: 0.1,
  ease: Circ.easeOut,
  opacity: 1,
  x: 0,
});

TweenMax.to(".btn__colored", 2, {
  delay: 0.1,
  ease: Power2.easeOut,
  opacity: 1,
  x: 0,
});

TweenMax.to(".btn__transparend", 2, {
  delay: 0.1,
  ease: Power2.easeOut,
  opacity: 1,
  y: 0,
});

let openBtn = document.getElementById("opener");
closeBtn = document.getElementById("closer");
activeUl = document.getElementById("active-ul");
hiddenUl = document.getElementById("hidden-ul");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    activeUl.classList.add("hide-ul");
    hiddenUl.classList.add("show-ul");

    activeUl.classList.remove("show-ul");
    hiddenUl.classList.remove("hide-ul");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    activeUl.classList.remove("hide-ul");
    hiddenUl.classList.remove("show-ul");

    activeUl.classList.add("show-ul");
    hiddenUl.classList.add("hide-ul");
  });
}

let searchBtn = document.getElementById("searcher");
let searchBody = document.getElementById("search-body");
let closeSearch = document.getElementById("x-search");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchBody.classList.add("show-search");
  });
}

if (closeSearch) {
  closeSearch.addEventListener("click", () => {
    searchBody.classList.remove("show-search");
  });
}

function scrollHeader() {
  let navbar = document.getElementById("navbar");
  let mobile = document.getElementById("mobile");
  if (this.scrollY >= 50)
    navbar.classList.add("scroll-header"),
      mobile.classList.add("scroll-header");
  else
    navbar.classList.remove("scroll-header"),
      mobile.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

let navToggle = document.getElementById("burger");
navClose = document.getElementById("x-japan");
navCollapse = document.getElementById("bottom");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navCollapse.classList.toggle("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navCollapse.classList.remove("show-menu");
  });
}

if (mainLayout) {
  mainLayout.addEventListener("click", () => {
    navCollapse.classList.remove("show-menu");
  });
}

new Swiper(".partnersSwiper", {
  slidesPerView: 6.5,
  loop: true,
  autoplay: {
    delay: 1,
  },
  speed: 20000,
  freeMode: true,
});
var swiper = new Swiper(".innerThumbs", {
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    767: {
      slidesPerView: 4,
    },
  },
});
var swiper2 = new Swiper(".innerSwiper", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
let listBtn = document.getElementById("list");
let gridBtn = document.getElementById("grid");
let items = document.getElementById("items");

listBtn.addEventListener("click", () => {
  items.classList.add("type__list");
  items.classList.remove("type__grid");
  gridBtn.classList.remove("active__btn");
  listBtn.classList.add("active__btn");
});

gridBtn.addEventListener("click", () => {
  items.classList.add("type__grid");
  items.classList.remove("type__list");
  listBtn.classList.remove("active__btn");
  gridBtn.classList.add("active__btn");
});
