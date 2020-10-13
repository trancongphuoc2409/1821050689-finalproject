//Khởi tạo biến ImgSlide truy cập vào thẻ có class là .slide
var ImgSlide = document.querySelectorAll(".slide");
//
SlideShow(0);
//Truyền tham số n 
//Tạo 1 hàm là SlideShow có 1 vòng for để chạy ảnh.
function SlideShow(n){
    for(var i = 0 ; i< ImgSlide.length ;i++){
        //Biến này truy cập vào hình ảnh thứ i với kiểu hiển thị là không để ẩn ảnh đi
        ImgSlide[i].style.display="none";
    }
    //Sau đó truyền tham số n với thộc tính block để hiển thị ảnh
    ImgSlide[n].style.display="block";
}
//tiếp theo dùng tạo 2 sự kiện onlick cho nút tiến và lùi
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#Btn_prev").onclick = Btn_prev;
    document.querySelector("#Btn_next").onclick = Btn_next;
});
//Khởi tạo biến có giá trị bằng 0
 let index= 0;
 //Khởi tạo hàm lùi 
 function Btn_prev(){
     //indexx-- chính là khi mình ấn vào thì ảnh sẽ lùi lại 1 ảnh
     index--;
     //câu lệnh if nếu mà khi hết ảnh để lùi thì gắn biến index bằng ảnh cuối cùng
     if(index < 0){
         index = 2;
     }
    //  console.log(index);
     SlideShow(index);
 }
 //Khởi tạo hàm tiến
 function Btn_next(){
       //indexx++ chính là khi mình ấn vào thì ảnh sẽ tiến thêm 1 ảnh
     index++;
     //câu lệnh if nếu mà khi hết ảnh để tiến thì gắn biến index bằng ảnh đầu tiên
     if(index > 2){
         index = 1;
     }
    //  console.log(index);
     SlideShow(index);
 }
 //Đây là 1 hàm để tự động chạy
 setInterval( () => {
      Btn_next()
//với 2 giây sẽ chuyển ảnh
},2*1000);