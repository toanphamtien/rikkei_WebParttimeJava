function convert(){
    const usd2vnd = 23400;
    const jpy2vnd = 180;
    const usd2jpy = 130;
    const currency = ["vnd", "usd", "jpy"];
    const rate = [
    //to  vnd,        usd,            jpy
            [1,         1/usd2vnd,    1/jpy2vnd],    // from vnd
            [usd2vnd,   1,            usd2jpy],      // from usd
            [jpy2vnd,   1/usd2jpy,    1]             // from jpy
    ];
 
    var fromCurrency, toCurrency, amount, result;
    var i = 0, fromCurrencyIdx = -1, toCurrencyIdx = -1;

    // get data
    fromCurrency = document.getElementById("from-currency").value;
    toCurrency = document.getElementById("to-currency").value;
    amount = parseFloat(document.getElementById("amount").value);

    // get rate
    for (i = 0; i < currency.length; i++){
        if (fromCurrency === currency[i]) fromCurrencyIdx = i;
        if (toCurrency === currency[i]) toCurrencyIdx = i;
    }

    // cal result
    result = amount * rate[fromCurrencyIdx][toCurrencyIdx];
    document.getElementById("result").innerHTML = "Result: " + result + " " + toCurrency;
}