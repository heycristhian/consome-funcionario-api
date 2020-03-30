var xhr = new XMLHttpRequest();
var conexao = "http://localhost:8080/heycristhian-service/funcionarios";


var botaoAdicionar = document.querySelector(".btn");

botaoAdicionar.addEventListener('click', () => {
    event.preventDefault();

    var form = document.querySelector(".form");

    var erros = validaFormulario(form);

    if (erros.length > 0) {
        var ul = document.querySelector("#mensagens-erro");
        ul.classList.add("mensagens-erro");
        exibeMensagensDeErro(erros);
        
    } else {
        xhr.open('POST', conexao);

        xhr.setRequestHeader("Content-Type", "application/json");  
    
        xhr.send(JSON.stringify(obtemFuncionarioFormulario(form)));
    
        /*
        xhr.addEventListener("load", () => {
            if(xhr.status == 201) {
                window.location.replace("index.html");
            }
        });
    */
        form.reset();
        window.location.replace("index.html");
    }
  
    

})

function obtemFuncionarioFormulario(form) {

    var funcionario = {
        nome: form.name.value,
        cpf: form.cpf.value,
        dataNascimento: form.dataNascimento.value,
        descricaoCargo: form.cargo.value
    }

    return funcionario;
}

function validaFormulario(form) {
    var erros = [];

    if(form.name.value == "") {
        erros.push("O campo nome não pode ser vazio");
    }

    if(form.cpf.value == "") {
        erros.push("O campo CPF não pode ser vazio"); 
    }

    if(form.dataNascimento.value == "") {
        erros.push("O campo Data não pode ser vazio"); 
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
