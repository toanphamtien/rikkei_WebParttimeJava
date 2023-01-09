function test(){
    let inputW, inputH;

    inputW = prompt('Enter the width:')
    document.write('Enter Width: <br>' + inputW + '<br>');
    inputH = prompt('Enter the height:')
    document.write('Enter Height: <br>' + inputW +'<br>');

    let w = parseInt(inputW);
    let h = parseInt(inputH);
    let area = w * h;

    document.write('The area is: ' + area);
}