function hide_about_you(e, btn){
  e.preventDefault();
  var form = $(btn).parents('form');
  $.ajax({
    type: "POST",
    url: $(form).attr('action'),
    data: $(form).serialize(),
    success: function(response){
        document.getElementById("hidden_state").value="2";
        document.getElementById("status").value="2";
        hideState();
    }
  });
}

function hide_create_account(e, btn){
  e.preventDefault();
  var form = $(btn).parents('form');
  $.ajax({
    type: "POST",
    url: $(form).attr('action'),
    data: $(form).serialize(),
    success: function(response){
        document.getElementById("hidden_state").value="2";
        var title=document.getElementById("welcome");
        var fiName=document.getElementById("fiName").value;
        title.innerHTML = '<b>Welcome '+fiName+'</b><span class="caret"></span>';
        hideState();
    }
  });
}

function hideSurvey(e, btn){
  e.preventDefault();
  var form = $(btn).parents('form');
  $.ajax({
    type: "POST",
    url: $(form).attr('action'),
    data: $(form).serialize(),
    success: function(response){
        document.getElementById("hidden_state").value="3";
        document.getElementById("status").value="3";
        hideState();
    }
  });
}
function submit_speed(e, btn){
  e.preventDefault();
  var form = $(btn).parents('form');
  $.ajax({
    type: "POST",
    url: $(form).attr('action'),
    data: $(form).serialize(),
    success: function(response){
        document.getElementById("hidden_state").value="4";
        document.getElementById("status").value="4";
        hideState();
    }
  });
}
// Sets state to 5 when Join Us link is clicked in the login dropdown
function create(){
    document.getElementById("hidden_state").value="5";
        hideState();
}