const range = document.querySelector(".range") ; 
let rangeValue = 40; 
range.value = rangeValue ; 
range.addEventListener("input" , (e) => {
     rangeValue =  e.target.value ; 
     document.documentElement.style.setProperty("--r", `rgba(0, 0, 0, 0) linear-gradient(to right,#0D2238 0%, #0D2238 calc(${rangeValue}%), rgb(236, 236, 236) calc(${rangeValue}%), rgb(236, 236, 236) 100%) repeat scroll 0% 0%`);
})