const imgs = [
  "front1",
  "front2",
  "front3",
  "front4",
  "front5",
  "front6",
  "front7",
  "front8",
  "front9",
  "front10",
  "front11",
  "front12",
  "front1",
  "front2",
  "front3",
  "front4",
  "front5",
  "front6",
  "front7",
  "front8",
  "front9",
  "front10",
  "front11",
  "front12"
];
function loadCard() {
  for (let i = 0; i < imgs.length; i++) {
    $(".cards-container-row").append(
      ` <div class="card" data-name="${imgs[i]}">
          <div class="front">
          <img src="img/${imgs[i]}.jpg">
          </div>
          <div class="back">
          <img src="img/back2.jpg">
          </div>
          </div>`
    );
  }
  var remainingTime = 60;
  var run = setInterval(function() {
    remainingTime--;
    $("progress")[0].value = remainingTime;
    if (remainingTime == 0) {
      clearInterval(run);
    }
  }, 1000);
}
function shuffle(array) {
  return array.sort(() => {
    return 0.5 - Math.random();
  });
}
var current = null;
var count = 0;
var countFlip = 0;
function clickCard() {
  $(".card").click(function() {
    $(this)
      .find(".front")
      .addClass("flip-front");
    $(this)
      .find(".back")
      .addClass("flip-back");
    countFlip++;
    $(this).css("pointer-events", "none");
    // console.log(countFlip);
    // console.log("object");
    if (countFlip == 2) {
      $(".card").css("pointer-events", "none");
      countFlip = 0;
    }
    if (!current) {
      //check if current = null // !null == true
      current = $(this);
    } else {
      if (current.attr("data-name") != $(this).attr("data-name")) {
        // console.log("object2");
        setTimeout(() => {
          current.find(".front").toggleClass("flip-front");
          current.find(".back").toggleClass("flip-back");
          $(this)
            .find(".front")
            .toggleClass("flip-front");
          $(this)
            .find(".back")
            .toggleClass("flip-back");
          $(".card").css("pointer-events", "auto");
          document.getElementById("wrong-sound").play();
          current = null;
        }, 500);
      } else {
        // console.log("object3");
        setTimeout(() => {
          current.css("opacity", "0");
          $(this).css("opacity", "0");
          current = null;
        }, 200);
        $(".card").css("pointer-events", "auto");
        document.getElementById("correct-sound").play();
        count++;
        if (count == 12) {
          $(".progress-bar").addClass("vanish");
          $(".content").addClass("vanish");
          $(".win-content").addClass("appear");
          $(".playagainBtn").addClass("appear");
        }
      }
    }
  });
}
$(".playagainBtn").click(function() {
  location.reload();
});
function hack() {
  $(".card")
    .find(".front")
    .addClass("flip-front");
  $(".card")
    .find(".back")
    .addClass("flip-back");
}
$(function() {
  shuffle(imgs);
  loadCard();
  clickCard();
});
