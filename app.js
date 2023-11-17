const menu =document.querySelector('.menu');
const navList =document.querySelector('.navitem');

menu.addEventListener("click", () =>{
    menu.classList.toggle('active');
    navList.classList.toggle('active');
});

// show login form

const login = document.querySelector('.login');
const loginForm = document.querySelector('.login_form');
const close = document.querySelector('.close');

login.addEventListener('click',() =>{
loginForm.style.display='block';
});
close.addEventListener('click',() =>{
loginForm.style.display='none';
});
// show video

const play = document.querySelector('.play');
const videoWrapper = document.querySelector('.video_wrapper');
const closeVideo = document.querySelector('.close_video');

play.addEventListener('click',() =>{
videoWrapper.style.display='block';
});
closeVideo.addEventListener('click',() =>{
videoWrapper.style.display='none';
});

// sticky nav bar
let nav = document.querySelector("nav");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
nav.classList.add("sticky");
}else {
nav.classList.remove("sticky");
}
};

// slider
var swiper = new Swiper(".slider_wrapper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
     
      },
      768: {
        slidesPerView: 2,
      
      },
      991: {
        slidesPerView: 4,
     
      },
    },
  });


  // Onmouse hover
  function showImage(imageId) {
    var imageA = document.getElementById('imageA');
    var imageB = document.getElementById('imageB');

    if (imageId === 'imageB') {
      imageA.style.display = 'none';
      imageB.style.display = 'inline';
    } else {
      imageA.style.display = 'inline';
      imageB.style.display = 'none';
    }
  }
 
  // filter
  function filterListByCategory(selectedCategory) {
    var listItems = document.querySelectorAll('.filter_card .card_wrapper');

    listItems.forEach(function(item) {
      var itemCategory = item.getAttribute('data-category');

      if (selectedCategory === 'all' || selectedCategory === itemCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // testimonials
  var swiper = new Swiper(".testimonial__wrapper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
     
      },
      768: {
        slidesPerView: 2,
      
      },
      991: {
        slidesPerView: 3,
     
      },
    },
  });