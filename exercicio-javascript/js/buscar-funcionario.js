function listarFuncionario() {
    xhr.open("GET", conexao);

    xhr.addEventListener("load", function () {
        var funcionarios = JSON.parse(xhr.responseText);

        var tabela = document.querySelector(".w3-table");

        funcionarios.forEach(function (funcionario) {
            tabela.appendChild(montaTr(funcionario));
        });
    });

    xhr.send();
}
