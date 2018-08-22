new WOW().init();

// NAVBAR
// $(".nav-item").mouseover(function() {
//   $(".nav-item").removeClass("active-item");
//   $(this).addClass("active-item");
// });
// $(".nav-item").mouseleave(function() {
//   $(".nav-item").removeClass("active-item");
// });

//ON SCROLL
$(document).scroll(function() {
  $(".fw").addClass("full-width-navbar");
  if ($(document).scrollTop() == 0) {
    $(".fw").removeClass("full-width-navbar");
  }
  if ($(document).scrollTop() >= 400) {
    $(".backtotop").css("visibility", "visible");
    $(".backtotop").css("opacity", "1");
  } else {
    $(".backtotop").css("visibility", "hidden");
    $(".backtotop").css("opacity", "0");
  }
});

// GALLERY


// BACKTOTOPn
function backToTop(params) {
  $(".backtotop").click(function() {
    $("html,body").animate({ scrollTop: $(".banner").offset().top }, "1000");
    return false;
  });
}
function gallery(params) {
  var selectedClass = "";
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("animation");
    setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("animation");
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
}
function overhidden(params) {
  $($(".wow").parent()).addClass("overhidden--modify")
}
$(function() {
  overhidden()
  gallery()
  backToTop()
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
  return isValid;
});
