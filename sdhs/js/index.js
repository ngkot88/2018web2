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

    $(".sub_img_box").click(function () {
        $(".sub_pup_box").css({"display" : "block"});
        $(".pupup_box").css({"display" : "block"});
    });
    $(".sub_pup_box  button").click(function () {
        $(".sub_pup_box").css("display", "none");
        $(".pupup_box").css({"display" : "none"});
   });

    $(".school_food").click(function () {
        $(".food_pup_box").css("display","block");
        $(".pupup_box").css({"display" : "block"});
    });
    $(".food_pup_box button").click(function () {
        $(".food_pup_box").css("display", "none");
        $(".pupup_box").css({"display" : "none"});
    });

    var dt = new Date();
    var day = dt.getDate();
    var year = dt.getFullYear();
    var month = dt.getMonth()+1;
    var week = dt.getDay();
    var array =  new Array('일','월','화','수','목','금','토');
    var today = array[week];
    var max_day = new Date(year,month,0).getDate();
    //y=년도
    //m=월
    //월의 길이가 나옴



    $(".now_year").text(year+"년");
    $(".now_month").text(month+"월");
    $(".now_date").text(day+"일");
    $(".now_week").text(today+"요일");

    $(".right_btn").click(function () {
        max_day = new Date(year,month,0).getDate();
        day++;
        $(".now_date").text(day+"일");
        week++;
        today = array[week];
        if(week > 6){
            week = 0;
            today = array[week];
        }
        $(".now_week").text(today+"요일");
        if(day > max_day){
            month++;
            if(month > 12){
                month = 1;
            }
            $(".now_month").text(month+"월");
            day = 1;
            $(".now_date").text(day+"일");
        }
    });
    $(".left_btn").click(function () {
        max_day = new Date(year,month,0).getDate();
        day--;
        $(".now_date").text(day+"일");
        week--;
        today = array[week];
        if(week < 0){
            week = 6;
            today = array[week];
        }
        $(".now_week").text(today+"요일");
        if(day < 1){
            month--;
            if(month < 1){
                month = 12;
            }
            $(".now_month").text(month+"월");
            day = max_day = new Date(year,month,0).getDate();
            $(".now_date").text(day+"일");
        }
    });

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