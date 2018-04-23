$(document).ready(function () {

   var num=1;

   function slide_right(){
      $(".box > img").eq(num).animate({left : -1000},0);
      $(".box > img").eq(num-1).animate({left : 1000 ,opacity : 0});
      $(".box > img").eq(num).animate({left : 0 ,opacity : 1});

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

   $(".sub_img_box").click(function () {
       $(".sub_pup_box").css("display","block");
   });
   $(".sub_pup_box  button").click(function () {
      $(".sub_pup_box").css("display", "none");
   });

    $(".school_food").click(function () {
        $(".food_pup_box").css("display","block");
    });
    $(".food_pup_box button").click(function () {
        $(".food_pup_box").css("display", "none");
    });
});