var ImgSlide = document.querySelectorAll(".slide");
SlideShow(0);

function SlideShow(n){
    for(var i = 0 ; i< ImgSlide.length ;i++){
        ImgSlide[i].style.display="none";
    }
    ImgSlide[n].style.display="block";
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#Btn_prev").onclick = Btn_prev;
    document.querySelector("#Btn_next").onclick = Btn_next;
});
 let index= 0;
 function Btn_prev(){
     index--;
     if(index < 0){
         index = 2;
     }
    //  console.log(index);
     SlideShow(index);
 }
 function Btn_next(){
     index++;
     if(index > 2){
         index = 1;
     }
    //  console.log(index);
     SlideShow(index);
 }
 setInterval( () => {
      Btn_next()
},2*1000);