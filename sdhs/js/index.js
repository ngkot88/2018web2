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

   $(".sub_img_box").click(function () {
       $(".sub_pup_box").css({"display" : "block"});
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

    var dt = new Date();
    var day = dt.getDate();
    var year = dt.getFullYear();
    var month = dt.getMonth();

    $(".now_year").text(year+"년");
    $(".now_month").text(month+1+"월");
    $(".now_date").text(day+"일");

    $(".notice_name").click(function () {
        $(".notice_name").css({"color" : "#4171ff"});
        $(".home_page").css({"color" : "#000000"});
        $(".notice_table").css({"display" : "block"});
        $(".home_table").css({"display" : "none"});

    });
    $(".home_page").click(function () {
        $(".home_page").css({"color" : "#4171ff"});
        $(".notice_name").css({"color" : "#000000"});
        $(".notice_table").css({"display" : "none"});
        $(".home_table").css({"display" : "block"});
    });
});