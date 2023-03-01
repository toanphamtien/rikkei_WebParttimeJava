function switchCase() {
    let browser = prompt("What browser are you using?", '');
    switch (browser) {
        case 'Edge':
            alert("You've got the Edge!");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Okay we support these browsers too');
            break;
        default:
            alert('We hope that this page looks ok!');
    }

    let a = prompt('a?', '');
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;
        default:
            alert("any");
            break;
    }

    let value1 = parseInt(prompt('Type a number', 0));
    if (value1 > 0) {
        alert(1);
    } else if (value1 < 0) {
        alert(-1);
    } else {
        alert(0);
    }

    let value2 = parseInt(prompt('Type a number', 0));
    switch (value2) {
        case -5:
        case -4:
        case -3:
        case -2:
        case -1:
            alert(-1);
            break;
        case 0:
            alert(0);
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            alert(1);
            break;
        default:
            alert("any");
            break;
    }
}