function logOut(e) {
  // e.preventDefault()
    console.log("logout");
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
  const usernameFrForm = $("#usernameNeeded").text().trim(); // loai bo khoang trang
  $.ajax({
    url: url,
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    type: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*"
    },
    async: true,
    data: {
      username: usernameFrForm,
      image: updatedImage,
      password: updatedPass,
      repassword: updatedRepass
    },
    // data: updatedInfo,
    dataType: "json",
    success: function(notice) {
      // console.log(result);
      if (notice.result === "success") {
        toastr.options = {
          closeButton: true,
          debug: false,
          newestOnTop: true,
          progressBar: true,
          positionClass: "toast-top-right",
          preventDuplicates: false,
          showDuration: 300,
          hideDuration: 1000,
          timeOut: 3000,
          extendedTimeOut: 1000,
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
        toastr["success"](`${notice.message}`, "Notification");
        $("#user-avatar11").html(`
            <img src="${updatedImage}" alt="Avatar">`);
        $("#avatar-in-form").html(`
            <img src="${updatedImage}" alt="Avatar">`);
      } else if (notice.result == "failed") {
        toastr.options = {
          closeButton: true,
          debug: false,
          newestOnTop: true,
          progressBar: true,
          positionClass: "toast-top-right",
          preventDuplicates: false,
          showDuration: 300,
          hideDuration: 1000,
          timeOut: 3000,
          extendedTimeOut: 1000,
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
        toastr["error"](`${notice.message}`, "Notification");
      }
      //  window.location.href = `${location.protocol}//${document.domain}:${location.port}/login`
    }
  });
  //   });
});

$("#form-edit-text").submit(function (e) {
  e.preventDefault(); // loai bo trang thai mac dinh (submit k reload nua)
  //   console.log("hello");
  const url = `${location.protocol}//${document.domain}:${
    location.port
  }/admin/newpost`;
  const updatedInput = $(this).serialize(); //serialize() lay data tu input
  // console.log(updatedInput)
  $.ajax({
    url: url,
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true,
    type: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*"
    },
    async: true,
    data: updatedInput,
    // data: updatedInfo,
    dataType: "json",
    success: function(notice) {
      // console.log(result);
      if (notice.result === "success") {
        toastr.options = {
          closeButton: true,
          debug: false,
          newestOnTop: true,
          progressBar: true,
          positionClass: "toast-top-right",
          preventDuplicates: false,
          showDuration: 300,
          hideDuration: 1000,
          timeOut: 3000,
          extendedTimeOut: 1000,
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
        toastr["success"](`${notice.message}`, "Notification");
      } else if (notice.result == "failed") {
        toastr.options = {
          closeButton: true,
          debug: false,
          newestOnTop: true,
          progressBar: true,
          positionClass: "toast-top-right",
          preventDuplicates: false,
          showDuration: 300,
          hideDuration: 1000,
          timeOut: 3000,
          extendedTimeOut: 1000,
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
        toastr["error"](`${notice.message}`, "Notification");
      }
      //  window.location.href = `${location.protocol}//${document.domain}:${location.port}/login`
    }
  });
  //   });
});
