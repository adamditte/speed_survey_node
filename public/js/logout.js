function signOut() {
    document.getElementById("hidden_state").value="0";
    googleLogoutUser();
    fbLogoutUser();
    // state0();
}

function fbLogoutUser() {
    FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
            FB.logout(function(response) {
                console.log('User signed out of google.');
                document.location.reload();
            });
        }
    });
}

function googleLogoutUser(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out of google.');
        document.location.reload();
    });                                            
}

// function state0(){
//     document.getElementById("hidden_state").value="0";
//     hideState();
// }
                                         