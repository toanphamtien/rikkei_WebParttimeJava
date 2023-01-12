var cal = '';
var result = '';

function clickEvent(val) {
    switch (val) {
        case '=':
            if (cal == '') result = '0';
            else result = eval(cal);
            cal = '';
            break;
        case 'C':
            cal = '';
            result = '0';
            break;
        default:
            cal = cal + val;
            result = cal;
            break;
    }

    document.getElementById("result").innerHTML = result;
}