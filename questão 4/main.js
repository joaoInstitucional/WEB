
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 16.9) {
        classificacao = "Muito abaixo do peso";
    } else if (imc < 18.4) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Acima do peso";
    } else {
        classificacao = "Obesidade";
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Seu IMC é ${imc.toFixed(2)} e você está classificado como: ${classificacao}`;
}