// hamburger nav
const hamburger = document.querySelector( '#hamburger' );

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
});

// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednavbar = header.offsetTop;

    if(window.pageYOffset > fixednavbar){
        header.classList.add('navbar-fixed');
        } else{
            header.classList.remove('navbar-fixed');}
};

// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });