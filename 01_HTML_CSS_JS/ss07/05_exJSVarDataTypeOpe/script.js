function bai1() {
    var physical, chemistry, biology;

    physical = prompt("Nhap diem mon Vat Ly:");
    physical = parseFloat(physical);

    chemistry = prompt("Nhap diem mon Hoa Hoc:");
    chemistry = parseFloat(chemistry);

    biology = prompt("Nhap diem mon Sinh Hoc:");
    biology = parseFloat(biology);

    let sum = physical + chemistry + biology;

    alert("Diem Vat Ly = " + physical +
            "\nDiem Hoa Hoc = " + chemistry +
            "\nDiem Sinh Hoc = " + biology +
            "\n----------------------" +
            "\nTong 3 mon = " + sum.toFixed(2) +
            "\nTB 3 mon = " + (sum/3).toFixed(2));
}

function bai2(){
    var tempC;

    tempC = prompt("Nhap nhiet do: ");
    tempC = parseFloat(tempC);

    let tempF = (tempC/5*9 + 32).toFixed(2);
    alert("Do F =" + tempF);
}

function bai3(){
    const pi = 3.14;
    var r;

    console.log(typeof r);
    r = prompt("Nhap ban kinh: ")
    console.log(typeof r);
    r = parseFloat(r);
    console.log(typeof r);

    alert("Dien tich hinh tron = " + (pi*r*r).toFixed(2) + 
            "\nChu vi hinh tron = " + (2*pi*r).toFixed(2));
}