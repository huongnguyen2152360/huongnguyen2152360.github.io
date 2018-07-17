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
    console.log(remainingTime);
    if (remainingTime == 0) {
      clearInterval(run);
      console.log("You lost");
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
function clickCard() {
  $(".card").click(function() {
    // console.log($(this));
    $(this)
      .find(".front")
      .addClass("flip-front");
    $(this)
      .find(".back")
      .addClass("flip-back");
    $(this).css("pointer-events", "none");
    if (!current) {
      //check if current = null // !null == true
      current = $(this);
    } else {
      if (current.attr("data-name") != $(this).attr("data-name")) {
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
        }, 400);
      } else {
        setTimeout(() => {
          current.css("opacity", "0");
          $(this).css("opacity", "0");
        }, 300);
        document.getElementById("correct-sound").play();
        count++;
      }
    }
  });
}

$(function() {
  shuffle(imgs);
  loadCard();
  clickCard();
});
