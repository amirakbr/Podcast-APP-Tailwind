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
     spaceBetween: 10,
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
   spaceBetween: 10,
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
// hamburger menu functionall
let hamburgrMenu = document.querySelector(".hamburgrmenu") ; 
let leftTab = document.querySelector(".lefttabb") ; 
hamburgrMenu.addEventListener("click" , (e) => {
   hamburgrMenu.classList.toggle("activehamburgrmenu") ; 
   leftTab.classList.toggle("translate-x-[-100%]")
   for (let i = 0; i < hamburgrMenu.children[0].children.length ; i++) {
      if(i === 1) {
         hamburgrMenu.children[0].children[1].classList.toggle("opacity-0") ; 
      }else{
         hamburgrMenu.children[0].children[i].classList.toggle("top-0") ; 
         hamburgrMenu.children[0].children[i].classList.toggle("top-halfhamburger") ; 
         hamburgrMenu.children[0].children[i].classList.toggle("translate-y-[-50%]") ; 
         hamburgrMenu.children[0].children[i].classList.toggle("rotate-[-135deg]") ; 
      }
   }
   hamburgrMenu.children[0].children[2].classList.toggle("rotate-[135deg]") ; 
})
let catbutton = document.querySelectorAll(".catbut") ; 
console.log(catbutton);
catbutton.forEach((e) => {
   e.addEventListener("click" , (eve) => {
      catbutton.forEach((e) => {
         e.classList.toggle("text-white") ;
         e.classList.toggle("text-gray-500") ;
         e.classList.toggle("bg-bgNav") ;
      })
   })
})