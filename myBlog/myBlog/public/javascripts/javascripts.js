function logOut(e) {
  // e.preventDefault()
  //   console.log("hello");
  const url = `${location.protocol}//${document.domain}:${
    location.port
  }/admin/logout`;

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
      window.location.href = `${location.protocol}//${document.domain}:${
        location.port
      }/login`;
    }
  });
  //   });
}

$("#save-form").submit(function saveBtn(e) {
  e.preventDefault(); // loai bo trang thai mac dinh (submit k reload nua)
  //   console.log("hello");
  const url = `${location.protocol}//${document.domain}:${
    location.port
  }/admin/editprofile`;
  // const updatedInput = $("#save-form").serialize(); //serialize() lay data tu input
  const updatedImage = $("#exampleInputEmail1").val();
  const updatedPass = $("#exampleInputPassword1").val();
  const updatedRepass = $("#exampleInputPassword2").val();
  const usernameFrForm = $("#usernameNeeded").text();
  //   $(".btn-logoutjs").submit(function(event) {
  // Stop the browser from submitting the form.
  // event.preventDefault();
  $.ajax({
    url: url,
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    type: "PUT",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Access-Control-Allow-Origin": "*"
    //   },
    async: true,
    data: { username: usernameFrForm, image: updatedImage, password: updatedPass, repassword: updatedRepass },
    // data: updatedInfo,
    dataType: "json",
    success: function(result) {
      //  window.location.href = `${location.protocol}//${document.domain}:${location.port}/login`
      $('#user-avatar11').html(`
            <img src="${updatedImage}" alt="Avatar">`)
      $('#avatar-in-form').html(`
            <img src="${updatedImage}" alt="Avatar">`)
      $('.errorMess').html(`
      <p>Update successfully!</p>
      `)
    }
  });
  //   });
});
