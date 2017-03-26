function confirm_password(){
    var inputPassword = document.getElementById("createPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (inputPassword == confirmPassword) {
      document.getElementById("account_creation_submit").style.display = "block";
      document.getElementById("password_error").innerHTML = "";
    } else {
      document.getElementById("password_error").innerHTML = "Passwords don't match";
      document.getElementById("account_creation_submit").style.display = "none";
    }
  }