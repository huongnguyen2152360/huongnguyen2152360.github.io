
function logOut(e) {
    // e.preventDefault()
//   console.log("hello");
  const url = `${location.protocol}//${document.domain}:${location.port}/admin/logout`;
  
  //   $(".btn-logoutjs").submit(function(event) {
  // Stop the browser from submitting the form.
  // event.preventDefault();
  $.ajax({
    url: url,
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    type: "GET",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Access-Control-Allow-Origin": "*"
    //   },
    async: true,
    // data: { username: username, password: password },
    //   data: $("form").serialize(),
    dataType: "json",
    success: function(result) {
     window.location.href = `${location.protocol}//${document.domain}:${location.port}/login`
    }
  });
  //   });
}
