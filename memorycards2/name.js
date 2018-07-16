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
          <img src="${imgs[i]}.jpg">
          </div>
          <div class="back">
          <img src="back2.jpg">
          </div>
          </div>`
  )
}
};
function shuffle(array) {
  return array.sort(() => {
    return 0.5 - Math.random();
  });
}
var current = null;
function clickCard() {
    $(".card").click(function() {
        // console.log($(this));
        $(this)[0].children[0].style.transform = "rotateY(0deg)"
        $(this)[0].children[1].style.transform = "rotateY(180deg)"
        if (!current) { //check if current = null // !null == true
          current = $(this);
        }
        else {
          if (current.attr('data-name') != $(this).attr('data-name')) {
            $(this)[0].children[0].style.transform = "rotateY(180deg)"
            $(this)[0].children[1].style.transform = "rotateY(0deg)"
            console.log('Different!');
          }
          else {
            $(this)[0].css('display','none');
            console.log('The same~')
          }
        }
    }
)
}
$(function() {
shuffle(imgs);
loadCard();
clickCard();
})
