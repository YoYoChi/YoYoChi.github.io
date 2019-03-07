
    var i = 0;
    var num = 3; 
    var time_id = null;
    var width = $(window).width(); 
    var stop = false;


function go_on_animate(bar_ul_li) {
        i++;
        bar_ul_li.css("width", '0px');

        if (i == num) {
            $('.bar ul li:first-child').find('p').css("width", '50px');
            clearInterval(time_id);
        }

        $(".img .banner_all a").each(function() {
            var $this = $(this);
            $this.find(".banner_img").animate({
                left: ($this.index() - i) * width,
            }, 1000, function() {
                if (i == num) {
                    $(".img .banner_all a").each(function() {
                        var $this = $(this);
                        $this.find(".banner_img").css('left', $this.index() * width + 'px');

                    });
                }
            });

        })
    }
    /* 20171106 修改 go_on_animate function end */

    function auto() {

        $(".bar ul li").eq(i).find("p").animate({
            "width": "50px"
        }, 3900, function() {

            if (time_id) {
                go_on_animate($(this));
            }

        });
    }

$(document).ready(function(){



    $(".img .banner_all a").each(function() {
        console.log($(this).index());
        $(this).find(".banner_img").css('left', $(this).index() * width + 'px');
    })

    

    setTimeout('auto()', 50);
    time_id = setInterval("auto()", 5000);

    $(".bar ul li").click(function() {

        $(this).siblings().find("p").stop().css("width", "0px");
        $(this).find("p").css("width", "50px");

        i = $(this).index();
        $(".img .banner_all a").each(function() {
            var $this = $(this);
            $this.find(".banner_img").animate({
                left: ($this.index() - i) * width
            }, 1000);
        })
        clearInterval(time_id);
        stop = true;
    })



    /* 20171116 手機直轉橫破圖 */

    if (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0)) {

        var windowHeight = $(window).height(),
            $body = $(".img");
        $body.css("height", windowHeight);
        var startX, startY, moveEndX, moveEndY, X, Y, oldstartX;
        $("body").on("touchstart", function(e) {

            startX = e.originalEvent.changedTouches[0].pageX,
                startY = e.originalEvent.changedTouches[0].pageY;

        });
        $(".img").on("touchmove", function(e) {

            if (oldstartX == startX) {

            } else {
                moveEndX = e.originalEvent.changedTouches[0].pageX,
                    moveEndY = e.originalEvent.changedTouches[0].pageY,
                    X = moveEndX - startX,
                    Y = moveEndY - startY;

                if (Math.abs(X) > Math.abs(Y) && X > 0) {
                    //alert("left 2 right");
                    i--;
                    if (i < 0) {
                        i = 0;
                    }

                    if (!stop) {
                        clearInterval(time_id);
                        $(".bar ul li").find("p").stop().css("width", "0px");
                    }
                    $(".img .banner_all a").each(function() {
                        var $this = $(this);
                        $this.find(".banner_img").animate({
                            left: ($this.index() - i) * width
                        }, 100, function() {
                            $(".bar ul li").eq(i).find("p").css("width", "50px");

                        });
                    });
                } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
                    //alert("right 2 left");
                    i++;
                    if (i > num - 1) {
                        i = num - 1;
                    }

                    if (!stop) {
                        clearInterval(time_id);
                        $(".bar ul li").find("p").stop().css("width", "0px");
                    }
                    $(".img .banner_all a").each(function() {
                        var $this = $(this);
                        $this.find(".banner_img").animate({
                            left: ($this.index() - i) * width
                        }, 100, function() {
                            $(".bar ul li").eq(i).find("p").css("width", "50px");

                        });
                    });
                } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {

                    if (!stop) {
                        clearInterval(time_id);
                        $(".bar ul li").find("p").stop().css("width", "0px");
                    }
                    $(".img .banner_all a").each(function() {
                        var $this = $(this);
                        $this.find(".banner_img").animate({
                            left: ($this.index() - i) * width
                        }, 100, function() {
                            $(".bar ul li").eq(i).find("p").css("width", "50px");

                        });
                    });
                } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {

                    if (!stop) {
                        clearInterval(time_id);
                        $(".bar ul li").find("p").stop().css("width", "0px");
                    }
                    $(".img .banner_all a").each(function() {
                        var $this = $(this);
                        $this.find(".banner_img").animate({
                            left: ($this.index() - i) * width
                        }, 100, function() {
                            $(".bar ul li").eq(i).find("p").css("width", "50px");

                        });
                    });
                } else {
                    //alert("just touch");
                }
            }
            oldstartX = startX;



        });
    } 

    $(window).resize(function() {

        width = $(window).width(); 
        clearInterval(time_id);
        i = 0;
        $(".img .banner_all a").find(".banner_img").stop();

        $(".img .banner_all a").each(function() {
            $(this).find(".banner_img").css('left', $(this).index() * width + 'px');
        })
        $(".bar ul li").find("p").stop().css("width", "0px");
        setTimeout('auto()', 50);
        time_id = setInterval("auto()", 5000);
        if (width < 768) {
            media_report_center = 0; //媒體報導中心的位置
        } else {
            media_report_center = 1; //媒體報導中心的位置
        }

    });
});