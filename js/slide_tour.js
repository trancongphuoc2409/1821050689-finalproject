//Khởi tạo biến ImgSlide truy cập vào thẻ có class là .col__4
var TourSlide = document.querySelectorAll(".col__4");
SlideTour(0);
//Truyền tham số n 
//Tạo 1 hàm là SlideShow có 1 vòng for để chạy ảnh.
function SlideTour(n){
    for( var i  = 0; i < TourSlide.length ;i++){
         //Biến này truy cập vào hình ảnh thứ i với kiểu hiển thị là không để ẩn ảnh đi
        TourSlide[i++].style.display="none";
    }
     //Sau đó truyền tham số n với thộc tính block để hiển thị ảnh
    TourSlide[n].style.display="block"
}
//tiếp theo dùng tạo 2 sự kiện onlick cho nút tiến và lùi
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#Btn_Prev").onclick = prev;
    document.querySelector("#Btn_Next").onclick = next;
});
//Khởi tạo biến có giá trị bằng 0
let numberTour = 0;
 function prev(){
    //numberTour-- chính là khi mình ấn vào thì ảnh sẽ lùi lại 1 ảnh
     numberTour--;
      //câu lệnh if nếu mà khi hết ảnh để lùi thì gắn biến index bằng ảnh cuối cùng
     if (numberTour <0 ){
         numberTour = 4;
     }
     console.log(numberTour);
     SlideTour(numberTour);
 }
 //Khởi tạo hàm tiến
 function next(){
     //numberTour++ chính là khi mình ấn vào thì ảnh sẽ tiến thêm 1 ảnh
    numberTour++;
     //câu lệnh if nếu mà khi hết ảnh để tiến thì gắn biến index bằng ảnh đầu tiên
    if (numberTour > 4 ){
        numberTour = 0;
    }
    console.log(numberTour);
    SlideTour(numberTour);
}