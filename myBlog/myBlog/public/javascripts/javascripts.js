// LOG OUT ADMIN
function logOut(e) {
  // e.preventDefault()
  // console.log("logout");
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

//LOG OUT INDEX
function logOutIndex(e) {
  // e.preventDefault()
  const url = `${location.protocol}//${document.domain}:${
    location.port
  }/admin/logout`; // api trong admin

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
      $("#nav-dropdown")
        .html(`<ul id="logged-out-menu" class="nav navbar-nav navbar-right">

      <li>
        <a href="/login">
          <i class="fas fa-sign-in visible-xs-inline"></i>
          <span>Login</span>
        </a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li data-original-title="" title="">
        <form id="search-form" class="navbar-form navbar-right hidden-xs" role="search" method="GET" action="">
          <button id="search-button" type="button" class="btn btn-link"><i class="fas fa-search fa-fw" title="Search"></i></button>
          <div class="hidden" id="search-fields">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" name="query" value="">
              <a href="#"><i class="fas fa-gears fa-fw advanced-search-link"></i></a>
            </div>
            <button type="submit" class="btn btn-default hide">Search</button>
          </div>
        </form>
      </li>
      <li class="visible-xs" id="search-menu">
        <a href="/search">
          <i class="fas fa-search fa-fw"></i> Search
        </a>
      </li>
    </ul>

    <ul class="nav navbar-nav navbar-right hidden-xs">
      <li>
        <a href="#" id="reconnect" class="hide" title="" data-original-title="Connection to Blog has been lost, attempting to reconnect..."><i
            class="fas fa-check"></i></a>
      </li>
    </ul>

    <ul class="nav navbar-nav navbar-right pagination-block visible-lg visible-md">
      <li class="dropdown">
        <i class="fas fa-angle-double-up pointer fa-fw pagetop"></i>
        <i class="fas fa-angle-up pointer fa-fw pageup"></i>

        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
          <span class="pagination-text"></span>
        </a>

        <i class="fas fa-angle-down pointer fa-fw pagedown"></i>
        <i class="fas fa-angle-double-down pointer fa-fw pagebottom"></i>

        <div class="progress-container">
          <div class="progress-bar"></div>
        </div>

        <ul class="dropdown-menu" role="menu">
          <input type="text" class="form-control" id="indexInput" placeholder="Enter index">
        </ul>
      </li>
    </ul>

    <ul id="main-nav" class="nav navbar-nav">
      <li class="">
        <a href="/categories" title="" data-original-title="Categories">
          <i class="fas fa-fw fa-list"></i>

          <span class="visible-xs-inline">Categories</span>
        </a>
      </li>
      <li class="">
        <a href="/recent" title="" data-original-title="Recent">
          <i class="fas fa-fw fa-clock-o"></i>

          <span class="visible-xs-inline">Recent</span>
        </a>
      </li>

      <li class="">
        <a href="/tags" title="" data-original-title="Tags">
          <i class="fas fa-fw fa-tags"></i>

          <span class="visible-xs-inline">Tags</span>
        </a>
      </li>
      <li class="">
        <a href="/popular" title="" data-original-title="Popular">
          <i class="fas fa-fw fa-fire"></i>

          <span class="visible-xs-inline">Popular</span>
        </a>
      </li>
      <li class="">
        <a href="/users" title="" data-original-title="Users">
          <i class="fas fa-fw fa-user"></i>

          <span class="visible-xs-inline">Users</span>
        </a>
      </li>
      <li class="">
        <a href="/groups" title="" data-original-title="Groups">
          <i class="fas fa-fw fa-group"></i>

          <span class="visible-xs-inline">Groups</span>
        </a>
      </li>

      <li class="">
        <a href="/search" title="" data-original-title="Search">
          <i class="fas fa-fw fa-search"></i>

          <span class="visible-xs-inline">Search</span>
        </a>
      </li>
    </ul>`);
    $('.pull-right').html(`<a href="/login"><button class="btn btn-primary">Login to post</button></a>`)
    }
  });
}

//LOG OUT DETAILS
function logOutDetails(e) {
  // e.preventDefault()
  const url = `${location.protocol}//${document.domain}:${
    location.port
  }/admin/logout`; // api trong admin

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
      $("#nav-dropdown")
        .html(`<ul id="logged-out-menu" class="nav navbar-nav navbar-right">

      <li>
        <a href="/login">
          <i class="fas fa-sign-in visible-xs-inline"></i>
          <span>Login</span>
        </a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li data-original-title="" title="">
        <form id="search-form" class="navbar-form navbar-right hidden-xs" role="search" method="GET" action="">
          <button id="search-button" type="button" class="btn btn-link"><i class="fas fa-search fa-fw" title="Search"></i></button>
          <div class="hidden" id="search-fields">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" name="query" value="">
              <a href="#"><i class="fas fa-gears fa-fw advanced-search-link"></i></a>
            </div>
            <button type="submit" class="btn btn-default hide">Search</button>
          </div>
        </form>
      </li>
      <li class="visible-xs" id="search-menu">
        <a href="/search">
          <i class="fas fa-search fa-fw"></i> Search
        </a>
      </li>
    </ul>

    <ul class="nav navbar-nav navbar-right hidden-xs">
      <li>
        <a href="#" id="reconnect" class="hide" title="" data-original-title="Connection to Blog has been lost, attempting to reconnect..."><i
            class="fas fa-check"></i></a>
      </li>
    </ul>

    <ul class="nav navbar-nav navbar-right pagination-block visible-lg visible-md">
      <li class="dropdown">
        <i class="fas fa-angle-double-up pointer fa-fw pagetop"></i>
        <i class="fas fa-angle-up pointer fa-fw pageup"></i>

        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
          <span class="pagination-text"></span>
        </a>

        <i class="fas fa-angle-down pointer fa-fw pagedown"></i>
        <i class="fas fa-angle-double-down pointer fa-fw pagebottom"></i>

        <div class="progress-container">
          <div class="progress-bar"></div>
        </div>

        <ul class="dropdown-menu" role="menu">
          <input type="text" class="form-control" id="indexInput" placeholder="Enter index">
        </ul>
      </li>
    </ul>

    <ul id="main-nav" class="nav navbar-nav">
      <li class="">
        <a href="/categories" title="" data-original-title="Categories">
          <i class="fas fa-fw fa-list"></i>

          <span class="visible-xs-inline">Categories</span>
        </a>
      </li>
      <li class="">
        <a href="/recent" title="" data-original-title="Recent">
          <i class="fas fa-fw fa-clock-o"></i>

          <span class="visible-xs-inline">Recent</span>
        </a>
      </li>

      <li class="">
        <a href="/tags" title="" data-original-title="Tags">
          <i class="fas fa-fw fa-tags"></i>

          <span class="visible-xs-inline">Tags</span>
        </a>
      </li>
      <li class="">
        <a href="/popular" title="" data-original-title="Popular">
          <i class="fas fa-fw fa-fire"></i>

          <span class="visible-xs-inline">Popular</span>
        </a>
      </li>
      <li class="">
        <a href="/users" title="" data-original-title="Users">
          <i class="fas fa-fw fa-user"></i>

          <span class="visible-xs-inline">Users</span>
        </a>
      </li>
      <li class="">
        <a href="/groups" title="" data-original-title="Groups">
          <i class="fas fa-fw fa-group"></i>

          <span class="visible-xs-inline">Groups</span>
        </a>
      </li>

      <li class="">
        <a href="/search" title="" data-original-title="Search">
          <i class="fas fa-fw fa-search"></i>

          <span class="visible-xs-inline">Search</span>
        </a>
      </li>
    </ul>`);
    }
  });
}

// SAVE BTN TO UPDATE PROFILE
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
  const usernameFrForm = $("#usernameNeeded")
    .text()
    .trim(); // loai bo khoang trang
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

// SEND BTN TO CREATE NEW POST
$("#form-edit-text").submit(function(e) {
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

// CLICK AVATAR, GET DROPDOWN MENU
$("#user_label").click(e => {
  $("#user_label").toggleClass("open");
});
