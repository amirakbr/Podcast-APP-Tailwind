const range = document.querySelector(".range") ; 
let rangeValue = 40; 
range.value = rangeValue ; 
range.addEventListener("input" , (e) => {
     rangeValue =  e.target.value ; 
     document.documentElement.style.setProperty("--r", `rgba(0, 0, 0, 0) linear-gradient(to right,#0D2238 0%, #0D2238 calc(${rangeValue}%), rgb(236, 236, 236) calc(${rangeValue}%), rgb(236, 236, 236) 100%) repeat scroll 0% 0%`);
})
const swiper = new Swiper(".swiper", {
     direction: "horizontal",
     slidesPerView: 1,
     pagination: {
        el: ".swiper-pagination",
     },
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },
     breakpoints: {
        1100: {
           slidesPerView: 2,
           spaceBetween: 20,
        },
        1900: {
           slidesPerView: 3,
           spaceBetween: 30,
        },
     },
  });


  const swiperpopularpodcast = new Swiper(".swiperpopularpodcast", {
   direction: "horizontal",
   slidesPerView: 1,
   navigation: {
      nextEl: ".swiper-button-nex",
      prevEl: ".swiper-button-pre",
   },
   breakpoints: {
      1100: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1900: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});
  /*
  
   */