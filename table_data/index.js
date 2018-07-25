function sortTable() {
  var rows = $("#myTable tr");
  for (var i = 1; i < rows.length - 1; i++) {
    for (var j = 1; j <= 4; j++) {
      var x = rows[i].getElementsByTagName("td")[j];
      var y = rows[i + 1].getElementsByTagName("td")[j];
      var lowerCaseX = x.innerHTML.toLowerCase();
      var lowerCaseY = y.innerHTML.toLowerCase();
      if (lowerCaseX.localeCompare(lowerCaseY) > 0) {
          rows[i].parentNode.insertBefore(rows[i+1],rows[i]);  
      }
      console.log(typeof(x.innerHTML.toLowerCase()));
    }
  }
}
