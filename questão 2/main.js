
function validarForm() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "" || senha === "") {
        alert("Por favor, preencha todos os campos do formulário.");
    } else {
        alert("Formulário enviado com sucesso!");
    }
}
