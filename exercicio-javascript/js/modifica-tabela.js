function montaTd(dado) {
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}

function montaTr(funcionario) {
    var funcionarioTr = document.createElement("tr");

    funcionarioTr.appendChild(montaTd(funcionario.nome));
    funcionarioTr.appendChild(montaTd(funcionario.cpf));
    funcionarioTr.appendChild(montaTd(funcionario.cargo.descricao));
    return funcionarioTr;
}