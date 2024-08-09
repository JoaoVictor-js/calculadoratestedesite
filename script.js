var res = document.getElementById("restxt");

var result = 0;

function somar() {
    var n1 = Number(document.getElementById("txtn1").value);
    var n2 = Number(document.getElementById("txtn2").value);
    result = n1 + n2;
    res.innerHTML = result;
}

function subtrair() {
    var n1 = Number(document.getElementById("txtn1").value);
    var n2 = Number(document.getElementById("txtn2").value);
    result = n1 - n2;
    res.innerHTML = result;
}

function multiplicar() {
    var n1 = Number(document.getElementById("txtn1").value);
    var n2 = Number(document.getElementById("txtn2").value);
    result = n1 * n2;
    res.innerHTML = result;
}

function dividir() {
    var n1 = Number(document.getElementById("txtn1").value);
    var n2 = Number(document.getElementById("txtn2").value);
    result = n1 / n2;
    res.innerText = result;
}