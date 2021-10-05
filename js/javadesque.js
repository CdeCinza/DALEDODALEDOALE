const USER_DB= "grongos";
const PASS_DB= "xesquedele";

var user = document.getElementById("login")
var pass = document.getElementById("senha")

var button = document.getElementById("btn_entrar")

button.addEventListener("click", function(){

    if(user.value == USER_DB && pass.value == PASS_DB) {

        window.location.href = "home.html";
    }

})