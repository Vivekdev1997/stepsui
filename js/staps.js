// ==================timeine====================
$(document).ready(function() {
    // ------------------------Modal 
    $(".Search-Icon").click(function() {
        $("#Report-Modal").modal('show');
    });

    // active class
    // $('.menu-line').click(function() {
    //     $('.menu-line').removeClass("active_line");
    //     $(this).addClass("active_line");
    // });

    $('#progress-bar-container li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(".step").click(function() {
        $(this).addClass("active").addClass("active");
        // $(this).nextAll().removeClass("active");
    });

    $(".step01").click(function() {
        $("#line-progress").css("width", "100%");
        $(".step1").addClass("active").siblings().removeClass("active");
    });

    $(".step02").click(function() {
        $("#line-progress").css("width", "100%");
        $(".step2").addClass("active").siblings().removeClass("active");
    });

    $(".step03").click(function() {
        $("#line-progress").css("width", "100%");
        $(".step3").addClass("active").siblings().removeClass("active");
    });
    $(".step04").click(function() {
        $("#line-progress").css("width", "100%");
        $(".step4").addClass("active").siblings().removeClass("active");
    });
    $(".step05").click(function() {
        $("#line-progress").css("width", "100%");
        $(".step5").addClass("active").siblings().removeClass("active");
    });
})

// ==================timeine end====================




