const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const formulario = document.getElementById("formCadastro");
const resultado = document.getElementById("resultado");


function apenasNumeros(valor) {
    return valor.replace(/\D/g, "");
}


/* MÁSCARA CPF */

cpf.addEventListener("input", function () {

    let valor = apenasNumeros(this.value);

    valor = valor.substring(0, 11);

    valor = valor.replace(
        /^(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /^(\d{3})\.(\d{3})(\d)/,
        "$1.$2.$3"
    );

    valor = valor.replace(
        /^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/,
        "$1.$2.$3-$4"
    );

    this.value = valor;
});


/* MÁSCARA TELEFONE */

telefone.addEventListener("input", function () {

    let valor = apenasNumeros(this.value);

    valor = valor.substring(0, 11);

    if (valor.length <= 10) {

        valor = valor.replace(
            /^(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{4})(\d)/,
            "$1-$2"
        );

    } else {

        valor = valor.replace(
            /^(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );

    }

    this.value = valor;
});


/* MÁSCARA CEP */

cep.addEventListener("input", function () {

    let valor = apenasNumeros(this.value);

    valor = valor.substring(0, 8);

    valor = valor.replace(
        /^(\d{5})(\d)/,
        "$1-$2"
    );

    this.value = valor;
});


/* ENVIO DO FORMULÁRIO */

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!formulario.checkValidity()) {

        formulario.reportValidity();

        resultado.textContent =
            "Verifique os campos obrigatórios antes de enviar.";

        resultado.style.color = "#c0392b";

        return;
    }

    resultado.textContent =
        "Cadastro realizado com sucesso! Obrigado por fazer parte da ONG Esperança.";

    resultado.style.color = "#27864a";

    formulario.reset();
});
