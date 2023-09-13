function concatenarDados() {
    var nome = document.getElementById("nome").value;
    var estadoCivil = document.getElementById("estadoCivil").value;
    var faixaEtaria = document.getElementById("faixaEtaria").value;

    var resultado = "Nome: " + nome + "<br>";
    resultado += "Estado Civil: " + estadoCivil + "<br>";
    resultado += "Faixa Etária: " + faixaEtaria;

    document.getElementById("resultado").innerHTML = resultado;
}
