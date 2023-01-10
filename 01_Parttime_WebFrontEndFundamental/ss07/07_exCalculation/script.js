function add() {
    let a, b;

    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);

    document.getElementById("result").innerHTML = "Result Addition: " + (a+b);
}

function sub() {
    let a, b;

    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);

    document.getElementById("result").innerHTML = "Result Subtration: " + (a-b);
}

function mul() {
    let a, b;

    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);

    document.getElementById("result").innerHTML = "Result Multiplication: " + (a*b);
}

function div() {
    let a, b;

    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    
    if (b == 0) document.getElementById("result").innerHTML = "Result Division: cannot be divided by 0"
    else document.getElementById("result").innerHTML = "Result Division: " + (a/b);
}
