$(function() {
    var aniT = 1000;
    var intT = 4000;
    var strT = 3000;
    var rTimer;
    var imgLen = $("#topImg #topImgTmb li").length;

    $("#topImg #topImgTmb li a").on("click", function() {
        var setIndex = $("#topImg #topImgTmb li.set").index() + 1;
        var thisIndex = $("#topImg #topImgTmb li").index($(this).closest('li'));
        if (thisIndex !== setIndex - 1) {
            stopTimer();
            $("#topImg .flgS li").stop().css("opacity", 0);
            $("#topImg .flgP li").stop().css("opacity", 0);
            $("#topImg .flgS li").eq(setIndex - 1).css("opacity", 1);
            $("#topImg .flgP li").eq(setIndex - 1).css("opacity", 1);
            if (thisIndex > setIndex - 1) {
                $("#topImg #topImgTmb li.set").removeClass("set");
                $("#topImg #topImgTmb li").eq(thisIndex).addClass("set");
                $("#topImg .flgS li").eq(thisIndex).stop().animate({
                    opacity: 1
                }, aniT, "linear");
                $("#topImg .flgP li").eq(thisIndex).stop().animate({
                    opacity: 1
                }, aniT, "linear", function() {
                    $("#topImg .flgS li").eq(setIndex - 1).stop().css("opacity", 0);
                    $("#topImg .flgP li").eq(setIndex - 1).stop().css("opacity", 0);
                });
            } else {
                $("#topImg #topImgTmb li.set").removeClass("set");
                $("#topImg #topImgTmb li").eq(thisIndex).addClass("set");
                $("#topImg .flgS li").eq(thisIndex).css("opacity", 1);
                $("#topImg .flgP li").eq(thisIndex).css("opacity", 1);
                $("#topImg .flgS li").eq(setIndex - 1).stop().animate({
                    opacity: 0
                }, aniT, "linear");
                $("#topImg .flgP li").eq(setIndex - 1).stop().animate({
                    opacity: 0
                }, aniT, "linear", function() {});
            }
            startTimer();
        }
        return false;
    });

    function chgImg() {
        var setIndex = $("#topImg #topImgTmb li.set").index() + 1;
        $("#topImg .flgS li").stop().css("opacity", 0);
        $("#topImg .flgP li").stop().css("opacity", 0);
        $("#topImg .flgS li").eq(setIndex - 1).css("opacity", 1);
        $("#topImg .flgP li").eq(setIndex - 1).css("opacity", 1);
        if (setIndex !== imgLen) {
            $("#topImg #topImgTmb li.set").removeClass("set");
            $("#topImg #topImgTmb li").eq(setIndex).addClass("set");
            $("#topImg .flgS li").eq(setIndex).stop().animate({
                opacity: 1
            }, aniT, "linear");
            $("#topImg .flgP li").eq(setIndex).stop().animate({
                opacity: 1
            }, aniT, "linear", function() {
                $("#topImg .flgS li").eq(setIndex - 1).stop().css("opacity", 0);
                $("#topImg .flgP li").eq(setIndex - 1).stop().css("opacity", 0);
            });
        } else {
            $("#topImg #topImgTmb li.set").removeClass("set");
            $("#topImg #topImgTmb li:first-of-type").addClass("set");
            $("#topImg .flgS li:first-of-type").css("opacity", 1);
            $("#topImg .flgP li:first-of-type").css("opacity", 1);
            $("#topImg .flgS li:last-of-type").stop().animate({
                opacity: 0
            }, aniT, "linear");
            $("#topImg .flgP li:last-of-type").stop().animate({
                opacity: 0
            }, aniT, "linear", function() {});
        }
    }

    function chgRvImg() {
        var setIndex = $("#topImg #topImgTmb li.set").index();
        $("#topImg .flgS li").stop().css("opacity", 0);
        $("#topImg .flgP li").stop().css("opacity", 0);
        $("#topImg .flgS li").eq(setIndex).css("opacity", 1);
        $("#topImg .flgP li").eq(setIndex).css("opacity", 1);
        if (setIndex !== 0) {
            $("#topImg .flgS li").eq(setIndex - 1).stop().css("opacity", 1);
            $("#topImg .flgP li").eq(setIndex - 1).stop().css("opacity", 1);
            $("#topImg #topImgTmb li.set").removeClass("set");
            $("#topImg #topImgTmb li").eq(setIndex - 1).addClass("set");
            $("#topImg .flgS li").eq(setIndex).stop().animate({
                opacity: 0
            }, aniT, "linear");
            $("#topImg .flgP li").eq(setIndex).stop().animate({
                opacity: 0
            }, aniT, "linear", function() {});
        } else {
            $("#topImg #topImgTmb li.set").removeClass("set");
            $("#topImg #topImgTmb li:last-of-type").addClass("set");
            $("#topImg .flgS li:first-of-type").css("opacity", 1);
            $("#topImg .flgP li:first-of-type").css("opacity", 1);
            $("#topImg .flgS li:last-of-type").stop().animate({
                opacity: 1
            }, aniT, "linear");
            $("#topImg .flgP li:last-of-type").stop().animate({
                opacity: 1
            }, aniT, "linear", function() {});
        }
    }

    $("#topImg .flgS").bind({
        "touchstart": function() {
            this.touchX = event.changedTouches[0].pageX;
        },
        "touchmove": function(e) {
            e.preventDefault();
            this.accel = event.changedTouches[0].pageX - this.touchX;
            this.touchX = event.changedTouches[0].pageX;
        },
        "touchend": function() {
            stopTimer();
            if (this.accel > 0) {
                chgRvImg();
            } else if (this.accel < 0) {
                chgImg();
            }
            startTimer();
        }
    });

    function startTimer() {
        rTimer = setInterval(function() {
            chgImg();
        }, intT);
    }

    function stopTimer() {
        clearInterval(rTimer);
    }

    setTimeout(function() {
        startTimer();
    }, strT);

    $("#topImg #topImgTmb li:first-of-type").addClass("set");
    $("#topImg .topImgList li").each(function() {
        var src = $(this).find("img").attr('src');
        $(this).css("background-image", "url(" + src + ")");
    });
});
