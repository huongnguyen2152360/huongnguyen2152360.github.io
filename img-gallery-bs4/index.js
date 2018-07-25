$(".menu-title-icon").click(function() {
  $(".menu-lv1").toggle();
  if ($(".menu-lv1").style('display','none')){
    $(".menu-title-icon-icon").css("display", "none");
    $(".menu-title-icon").html(`<span class="menu-title-icon-x">X</span>`);
  }
});
$(".menu-lv1-item-icon-div").click(function() {
  $(".menu-lv2").toggle();
});
