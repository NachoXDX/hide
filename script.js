var settingsImg = document.getElementById("settings-img");
var moveImg = document.getElementById("move-img");

var settings = document.getElementById("settings");
var move = document.getElementById("move");

settingsImg.addEventListener("click", showSettings);
moveImg.addEventListener("click", showMove);

function showSettings(){
    move.style.display = "none";
    settings.style.display = "block";
}

function showMove(){
    move.style.display = "block";
    settings.style.display = "none";
}
