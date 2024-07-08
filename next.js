document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');
    const secondForm = document.getElementById('secondForm');
    const formBombas = document.getElementById('formBombas');
    const formEq = document.getElementById('formEq');
    const nextPageButton = document.querySelector('.next-page');
    const nextPageButton2 = document.querySelector('.next-page-2');
    const nextPageButton3 = document.querySelector('.next-page-3');

    nextPageButton.addEventListener('click', () => {
        // Verifica se o formulário atual é válido
        if (form.checkValidity()) {
            // Oculta o primeiro formulário
            form.classList.add('hidden');
            // Exibe o segundo formulário
            secondForm.classList.remove('hidden');
        } else {
            // Se o formulário atual não for válido, exibe mensagens de erro
            form.reportValidity();
        }
    });

    nextPageButton2.addEventListener('click', () => {
        // Verifica se o segundo formulário atual é válido
        if (secondForm.checkValidity()) {
            // Oculta o segundo formulário
            secondForm.classList.add('hidden');
            // Exibe o formulário de Bombas
            formBombas.classList.remove('hidden');
        } else {
            // Se o segundo formulário atual não for válido, exibe mensagens de erro
            secondForm.reportValidity();
        }
    });
    nextPageButton3.addEventListener('click', () => {
        // Verifica se o segundo formulário atual é válido
        if (secondForm.checkValidity()) {
            // Oculta o segundo formulário
            formBombas.classList.add('hidden');
            // Exibe o formulário de Bombas
            formEq.classList.remove('hidden');
        } else {
            // Se o segundo formulário atual não for válido, exibe mensagens de erro
            formBombas.reportValidity();
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio do formulário
    });
});

function runScript() {
    // Chame a função original do script.js aqui
    originalRunScript();
}

function voltarParaFormulario() {
    const form = document.getElementById('myForm');
    const secondForm = document.getElementById('secondForm');
    // Oculta o segundo formulário
    secondForm.classList.add('hidden');
    // Exibe o primeiro formulário
    form.classList.remove('hidden');
}

function voltarParaFormulario2() {
    const secondform = document.getElementById('secondForm');
    const formBombas = document.getElementById('formBombas');
    // Oculta o segundo formulário
    formBombas.classList.add('hidden');
    // Exibe o primeiro formulário
    secondform.classList.remove('hidden');
}

function voltarParaFormulario3() {
    const formBombas = document.getElementById('formBombas');
    const form = document.getElementById('formEq');
    // Oculta o segundo formulário
    formEq.classList.add('hidden');
    // Exibe o primeiro formulário
    formBombas.classList.remove('hidden');
}

