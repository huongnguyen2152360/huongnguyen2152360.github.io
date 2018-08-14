new WOW().init();
// Instantiate the Bootstrap carousel
// $("#carouselExample").on("slide.bs.carousel", function(e) {
//   var $e = $(e.relatedTarget);
//   var idx = $e.index();
//   var itemsPerSlide = 3;
//   var totalItems = $(".carousel-item").length;

//   if (idx >= totalItems - (itemsPerSlide - 1)) {
//     var it = itemsPerSlide - (totalItems - idx);
//     for (var i = 0; i < it; i++) {
//       // append slides to end
//       if (e.direction == "left") {
//         $(".carousel-item")
//           .eq(i)
//           .appendTo(".carousel-inner");
//       } else {
//         $(".carousel-item")
//           .eq(0)
//           .appendTo(".carousel-inner");
//       }
//     }
//   }
// });

// $('.carousel-control-prev').click(function(){
//   $('.carousel').carousel('prev');
//   return false;
// })
// $('.carousel-control-next').click(function(){
//   $('.carousel').carousel('next');
//   return false;
// })

//ON SCROLL
$(document).scroll(function() {
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

// BOOKING SUBMIT
$("#signUpForm").on("submit", function() {
  var isValid = true;
  if (
    $("#validationServerUsername")
      .val()
      .trim() == ""
  ) {
    $(".yourname input").addClass("is-invalid");
    isValid = false;
    console.log(isValid);
  } else {
    $(".yourname input").removeClass("is-invalid");
    isValid = true;
  }
  if (
    $("#validationServerEmail")
      .val()
      .trim() == ""
  ) {
    if ($(".youremail")[0].lastChild.className == "invalid-feedback") {
      $(".youremail")[0].lastChild.remove();
    }
    $(".youremail input").addClass("is-invalid");
    $(".youremail").append(
      "<div class='invalid-feedback'>Please type your email.</div>"
    );
    isValid = false;
  }
  if (
    $("#validationServerEmail")
      .val()
      .trim() != ""
  ) {
    $(".youremail input").removeClass("is-invalid");
    $(".youremail").removeClass("invalid-feedback");
    isValid = true;
  }
});

