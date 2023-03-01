
let imgObj = null;
window.onload = init;

function init(){
    imgObj = document.getElementById("myImg");
    imgObj.style.position ="relative";
    imgObj.style.left = "0px";
}

function move(){
    imgObj.style.left = parseInt(imgObj.style.left) + 50 + "px";
}