function calculatetax() {
    var MoneyInput1 = document.getElementById("MoneyInput");
    var TaxInput1 = document.getElementById("TaxInput");

    var firstNumber = parseFloat(MoneyInput1.value)
    var secondNumber = parseFloat(TaxInput1.value)

    var percentage = firstNumber - (secondNumber / 100git ) * firstNumber;
    var result = document.getElementById("result");
    result.value = percentage.toFixed(2)
    

 }