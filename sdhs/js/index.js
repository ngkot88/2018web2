$(document).ready(function () {

   var num=1;

   function slide_right(){
      $(".box > img").eq(num).animate({left : -1000},0);
      $(".box > img").eq(num-1).animate({left : 1000 ,opacity : 0},500);
      $(".box > img").eq(num).animate({left : 0 ,opacity : 1},500);

      num++;
      if(num>=3){
         num=0;
      }
   }
   setInterval(slide_right,2000);

   $(".slider").click(function () {
      $(".dog").css("display", "block");
   });
   $(".dog").click(function () {
       $(".dog").css("display", "none");
   });
});