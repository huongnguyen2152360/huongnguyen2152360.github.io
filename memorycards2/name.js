const imgs = [
  "front1.jpg",
  "front2.jpg",
  "front3.jpg",
  "front4.jpg",
  "front5.jpg",
  "front6.jpg",
  "front7.jpg",
  "front8.jpg",
  "front9.jpg",
  "front10.jpg",
  "front11.jpg",
  "front12.jpg",
  "front1.jpg",
  "front2.jpg",
  "front3.jpg",
  "front4.jpg",
  "front5.jpg",
  "front6.jpg",
  "front7.jpg",
  "front8.jpg",
  "front9.jpg",
  "front10.jpg",
  "front11.jpg",
  "front12.jpg"
];
function loadCard() {
for (let i = 0; i < imgs.length; i++) {
  $(".cards-container-row").append(
    ` <div class="card">
          <div class="front">
          <img src="${imgs[i]}">
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
function clickCard() {
    $(".card").click(function() {
        console.log($(this));
        $(this)[0].children[0].style.transform = "rotateY(0deg)"
        $(this)[0].children[1].style.transform = "rotateY(180deg)"
    }
)
}
$(function() {
shuffle(imgs);
loadCard();
clickCard();
})
