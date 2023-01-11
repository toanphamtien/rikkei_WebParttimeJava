function upArrowPressed(){
    let imgObj = document.getElementById("coffin-dance");
    imgObj.style.top = parseInt(imgObj.style.top) - 5 + "px";
}

function downArrowPressed(){
    let imgObj = document.getElementById("coffin-dance");
    imgObj.style.top = parseInt(imgObj.style.top) + 5 + "px";
}

function leftArrowPressed(){
    let imgObj = document.getElementById("coffin-dance");
    imgObj.style.left = parseInt(imgObj.style.left) - 5 + "px";
}

function rightArrowPressed(){
    let imgObj = document.getElementById("coffin-dance");
    imgObj.style.left = parseInt(imgObj.style.left) + 5 + "px";
}

function move(evt){
    switch (evt.keyCode){
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}

function doReady(){
    window.addEventListener("keydown", move);
}