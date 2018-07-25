$(".menu-title-icon").click(function() {
  $(".menu-lv1").toggle();
  if ($(".menu-lv1").css("display") == "block") {
    $(".menu-title-icon-icon").css("display", "none");
    $(".menu-title-icon").html(`<span class="menu-title-icon-x"><i class="fas fa-times"></i></span>`);
  } else {
    $(".menu-title-icon-x").css("display", "none");
    $(".menu-title-icon").html(`<span class="menu-title-icon-icon"></span>
    <span class="menu-title-icon-icon"></span>
    <span class="menu-title-icon-icon"></span>`);
  }
});
$('.menu-lv1-item-icon-div').click(function(){
    $(".menu-lv2").toggle();
    if ($(".menu-lv2").css("display") == "block") {
        $(".menu-lv1-item-icon").css("display", "none");
        $('.menu-lv1-item-icon-div').html(`<span class="menu-lv1-item-icon-minus">-</span>`);
    }
    else {
        $('.menu-lv1-item-icon-minus').css("display", "none");
        $('.menu-lv1-item-icon-div').html(`<span class="menu-lv1-item-icon">+</span>`)
    }
})
