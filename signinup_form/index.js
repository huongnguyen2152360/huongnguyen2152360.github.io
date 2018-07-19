
$(".form-name p:last-child").css({'opacity':'0.3','border':'none'})
$(".form-name p").click(function() {
    $(".form").html(`
    <div class="username">
    <label for="username">
    <p>Username</p>
    </label>
    <input type="text" id="username" name="username" placeholder="Username">
    </div>
    <div class="password">
    <label for="password">
    <p>Password</p>
    </label>
    <input type="password" id="password" name="password" placeholder="Password">
    </div>
    <div class="checkbox">
    <input type="checkbox" id="checkbox">
    <label for="checkbox">
    <p>Keep me signed in</p>
    </label>
    </div>
    <div class="submitBtn">
    <input type="submit" value="sign in">
    </div>
    <div class="line-break"></div>
    <div class="forgotpass">
    <a href="#">Forgot Password?</a>
    </div>`);
    $(".form-name p:last-child").css({'opacity':'0.3','border':'none'})
    $(".form-name p:first-child").css({'opacity':'1','border-bottom':'1px solid rgb(107,144,114)'})
    
});
$(".form-name p:last-child").click(() => {
    // $(".form-name p:last-child").removeAttr('style')
    $(".form-name p:last-child").css({'opacity':'1','border-bottom':'1px solid rgb(107,144,114)'})
    $(".form-name p:first-child").css({'opacity':'.3','border':'none'})
    $(".form").html(`
    <div class="username2">
    <label for="username2">
    <p>Username</p>
    </label>
    <input type="text" id="username2" name="username2" placeholder="Username">
    </div>
    <div class="password2">
    <label for="password2">
    <p>Password</p>
    </label>
    <input type="password" id="password2" name="password2" placeholder="Password">
    </div>
    <div class="repeatpass">
    <label for="repeatpass">
    <p>Repeat password</p>
    </label>
    <input type="password" id="repeatpass" name="repeatpass" placeholder="Repeat password">
    </div>
    <div class="email">
    <label for="email">
    <p>Email address</p>
    </label>
    <input type="email" id="email" name="email" placeholder="Email address">
    </div>
    <div class="submitBtn2">
    <input type="submit" value="sign up">
    </div>
    <div class="line-break2"></div>
    <div class="member">
    <a href="#">Already Member?</a>
    </div>
    `)
    memberFn()
});
function memberFn(){
    
    $(".member").click(() => {
        
        console.log("hello");
        $(".form").html(`<div class="username">
        <label for="username">
        <p>Username</p>
        </label>
        <input type="text" id="username" name="username" placeholder="Username">
    </div>
    <div class="password">
        <label for="password">
            <p>Password</p>
        </label>
        <input type="password" id="password" name="password" placeholder="Password">
    </div>
    <div class="checkbox">
        <input type="checkbox" id="checkbox">
        <label for="checkbox">
            <p>Keep me signed in</p>
        </label>
    </div>
    <div class="submitBtn">
        <input type="submit" value="sign in">
    </div>
    <div class="line-break"></div>
    <div class="forgotpass">
        <a href="#">Forgot Password?</a>
    </div>`);
    });
}
