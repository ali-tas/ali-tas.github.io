var password1 = "code1";
var password2 = "code2";

function passcheck1() {

if(document.getElementById("pass1").value != password1) {
alert("Falsch!");
return false;
}

if(document.getElementById("pass1").value == password1) {
return true;
}
}

function passcheck2() {

if(document.getElementById("pass2").value != password2) {
alert("Falsch!");
return false;
}

if(document.getElementById("pass2").value == password2) {
return true;
}
}
