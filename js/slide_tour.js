var TourSlide = document.querySelectorAll(".col__4");
SlideTour(0);
function SlideTour(n){
    for( var i  = 0; i < TourSlide.length ;i++){
        TourSlide[i++].style.display="none";
    }
    TourSlide[n].style.display="block"
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#Btn_Prev").onclick = prev;
    document.querySelector("#Btn_Next").onclick = next;
});
let numberTour = 0;
 function prev(){
     numberTour--;
     if (numberTour <0 ){
         numberTour = 4;
     }
     console.log(numberTour);
     SlideTour(numberTour);
 }
 function next(){
    numberTour++;
    if (numberTour > 4 ){
        numberTour = 0;
    }
    console.log(numberTour);
    SlideTour(numberTour);
}