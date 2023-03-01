function ternaryOpe1() {
    let a = parseInt(prompt("Nhap a"));
    let b = parseInt(prompt("Nhap b"));

    let result = (a + b >= 4) ? "Over" : "Below";
    alert(result);  
}

function ternaryOpe2(){
    let login = prompt("Nhap username");

    let msg = (login == "Employee") ? "Hello" :
                (login == "Director") ? "Greetings" :
                (login == "") ? "No login" : "";
    alert(msg);
}