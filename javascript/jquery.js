$(document).ready(function () {

    $(".nav__link").click(function () {
        $(".webpage").fadeOut('fast');
        var target_page = $(this).data("webpage");
        $("#" + target_page).fadeIn('fast');
    })
  
    $('.nav a').click(function () {
        $('a').removeClass("active");
        $(this).addClass("active");
    });
  
    var target = window.location.hash;
  
    if (target == "#") {
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
  