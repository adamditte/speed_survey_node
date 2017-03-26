function hideState() {
    var hidden_state_val = $('#hidden_state').val() || '0';
         console.log("state",hidden_state_val);
    if (hidden_state_val == "0") {

        // $('#create_account,#create_account_form,#about_you,#about_you_form,#about_you_thanks,#take_our_survey,#survey_form,#survey_thanks,#speed_test,#speed_thanks,#logoutLink').hide();
        // $('#contact').show();
    }
    else if (hidden_state_val == "1") {

        // var hideIds = ['#create_account',
        //     '#create_account_form',
        //     '#about_you_thanks',
        //     '#take_our_survey',
        //     '#survey_form',
        //     '#survey_thanks',
        //     '#speed_test',
        //     '#speed_thanks',
        //     '#login-dp'];
        // $(ids.join()).hide();

        // var showIds = ['#about_you',
        //     '#about_you_form',
        //     '#contact',
        //     '#logoutLink'];
        // $(showIds).show();
    }
    else if (hidden_state_val == "2") {
   
        document.getElementById("create_account").style.display = "none";
        document.getElementById("create_account_form").style.display = "none";
        document.getElementById("about_you").style.display = "block";
        document.getElementById("about_you_form").style.display = "none";
        document.getElementById("about_you_thanks").style.display = "block";
        document.getElementById("take_our_survey").style.display = "block";
        document.getElementById("survey_form").style.display = "block";
        document.getElementById("survey_thanks").style.display = "none";
        document.getElementById("speed_test").style.display = "none";
        document.getElementById("speed_thanks").style.display = "none";
        document.getElementById("contact").style.display = "block";
        document.getElementById("logoutLink").style.display = "block";
        document.getElementById("login-dp").style.display = "none";
    }
    else if (hidden_state_val == "3") {
  
        document.getElementById("create_account").style.display = "none";
        document.getElementById("create_account_form").style.display = "none";
        document.getElementById("about_you").style.display = "block";
        document.getElementById("about_you_form").style.display = "none";
        document.getElementById("about_you_thanks").style.display = "block";
        document.getElementById("take_our_survey").style.display = "block";
        document.getElementById("survey_form").style.display = "none";
        document.getElementById("survey_thanks").style.display = "block";
        document.getElementById("speed_test").style.display = "block";
        document.getElementById("speed_thanks").style.display = "none";
        document.getElementById("contact").style.display = "block";
        document.getElementById("logoutLink").style.display = "block";
        document.getElementById("login-dp").style.display = "none";

    }
    else if (hidden_state_val == "4") {
  
        document.getElementById("create_account").style.display = "none";
        document.getElementById("create_account_form").style.display = "none";
        document.getElementById("about_you").style.display = "block";
        document.getElementById("about_you_form").style.display = "none";
        document.getElementById("about_you_thanks").style.display = "block";
        document.getElementById("take_our_survey").style.display = "block";
        document.getElementById("survey_form").style.display = "none";
        document.getElementById("survey_thanks").style.display = "block";
        document.getElementById("speed_test").style.display = "none";
        document.getElementById("speed_thanks").style.display = "block";
        document.getElementById("contact").style.display = "block";
        document.getElementById("logoutLink").style.display = "block";
        document.getElementById("login-dp").style.display = "none";
    }
    else if (hidden_state_val == "5") {

        document.getElementById("create_account").style.display = "block";
        document.getElementById("create_account_form").style.display = "block";
        document.getElementById("about_you").style.display = "none";
        document.getElementById("about_you_form").style.display = "none";
        document.getElementById("about_you_thanks").style.display = "none";
        document.getElementById("take_our_survey").style.display = "none";
        document.getElementById("survey_form").style.display = "none";
        document.getElementById("survey_thanks").style.display = "none";
        document.getElementById("speed_test").style.display = "none";
        document.getElementById("speed_thanks").style.display = "none";
        document.getElementById("contact").style.display = "block";
        document.getElementById("logoutLink").style.display = "block";
        document.getElementById("login-dp").style.display = "none";
    }

}