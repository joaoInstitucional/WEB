function calcularFaixaEtaria() {
    const idade = parseInt(document.getElementById("idade").value);

    if (idade >= 3 && idade <= 10) {
        document.getElementById("resultado").innerText = "Faixa etária: 3 a 10 anos";
    } else if (idade >= 11 && idade <= 25) {
        document.getElementById("resultado").innerText = "Faixa etária: 11 a 25 anos";
    } else if (idade >= 36 && idade <= 55) {
        document.getElementById("resultado").innerText = "Faixa etária: 36 a 55 anos";
    } else if (idade >= 56 && idade <= 100) {
        document.getElementById("resultado").innerText = "Faixa etária: 56 a 100 anos";
    } else {
        document.getElementById("resultado").innerText = "Idade fora das faixas especificadas.";
    }
}
