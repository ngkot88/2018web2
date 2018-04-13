$(document).ready(function () {
   $(".main_img").click(function () {
      $(".dog").css("display", "block");
   });
   $(".dog").click(function () {
       $(".dog").css("display", "none");
   });
});