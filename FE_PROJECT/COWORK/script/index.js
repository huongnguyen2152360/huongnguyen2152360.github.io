new WOW().init();
// Instantiate the Bootstrap carousel
$("#carouselExample").on("slide.bs.carousel", function(e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item")
          .eq(i)
          .appendTo(".carousel-inner");
      } else {
        $(".carousel-item")
          .eq(0)
          .appendTo(".carousel-inner");
      }
    }
  }
});

//ON SCROLL
$(document).scroll(function() {
  // $('.fw').css({'background-color':'#000000c4','position':'fixed','z-index':'10'})
  $(".fw").addClass("full-width-navbar");
  if ($(document).scrollTop() == 0) {
    $(".fw").removeClass("full-width-navbar");
  }
  if ($(document).scrollTop() >= 500) {
    $(".backtotop").css("visibility", "visible");
    $(".backtotop").css("opacity", "1");
  } else {
    $(".backtotop").css("visibility", "hidden");
    $(".backtotop").css("opacity", "0");
  }
});
$(function() {
  $(".backtotop").click(function() {
    $("html,body").animate({ scrollTop: $(".banner").offset().top }, "1000");
    return false;
  });
});
