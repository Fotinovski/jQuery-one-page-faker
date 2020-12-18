$(document).ready(function () {

    $(".nav__link").click(function () {
        $(".webpage").hide();
        var target_page = $(this).data("webpage");
        $("#" + target_page).show();
    })
  
    $('.nav a').click(function () {
        $('a').removeClass("nav__link--active");
        $(this).addClass("nav__link--active");
    });
  
    var target = window.location.hash;
  
    if (target == "#" || "/#") {
        $("#pageOne").trigger("click");
    }
    if (target == "#about") {
        $("#pageTwo").trigger("click");
    }
    if (target == "#shop") {
        $("#pageThree").trigger("click");
    }
  
    if (target == "#contact") {
        $("#pageFour").trigger("click");
    }
  
  });
  
  //***********************
  
  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 10) {
            $(".header").addClass("active-nav");
        } else {
           $(".header").removeClass("active-nav");
        }
    });
});