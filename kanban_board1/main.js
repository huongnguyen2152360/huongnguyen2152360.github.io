$(function() {
  sortList();
});


function sortList() {
  $(".sorted-list")
    .sortable({
      connectWith: ".sorted-list"
    });
}
