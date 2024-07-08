document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');
    const secondForm = document.getElementById('secondForm')
    const checkboxGroups = [
        document.querySelectorAll('input[type="checkbox"][name="option"]'),
        document.querySelectorAll('input[type="checkbox"][name="option2"]'),
        document.querySelectorAll('input[type="checkbox"][name="option3"]'),
        document.querySelectorAll('input[type="checkbox"][name="option4"]'),
        document.querySelectorAll('input[type="checkbox"][name="option5"]'),
        document.querySelectorAll('input[type="checkbox"][name="option6"]'),
        document.querySelectorAll('input[type="checkbox"][name="option7"]')
    ];

    checkboxGroups.forEach(group => {
        group.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    group.forEach(cb => {
                        if (cb !== this) {
                            cb.checked = false;
                            cb.removeAttribute('required'); // Remove o atributo required
                        }
                    });
                } else {
                    // Se desmarcar o checkbox, restaura o atributo required
                    group.forEach(cb => {
                        if (cb !== this) {
                            cb.setAttribute('required', 'required');
                        }
                    });
                }
            });
        });
    });

    form.addEventListener('submit', (event) => {
        let valid = true;

        checkboxGroups.forEach(group => {
            const groupValid = Array.from(group).some(checkbox => checkbox.checked);
            if (!groupValid) {
                valid = false;
                const errorSpan = document.createElement('span');
                errorSpan.textContent = 'Este campo é obrigatório';
                errorSpan.style.color = 'red';
                errorSpan.classList.add('error-message');
                if (!group[0].parentElement.querySelector('.error-message')) {
                    group[0].parentElement.appendChild(errorSpan);
                }
            } else {
                const errorMessages = group[0].parentElement.querySelectorAll('.error-message');
                errorMessages.forEach(error => error.remove());
            }
        });

        if (valid) {
            // Chama a função do script.js após a validação dos checkboxes
            runScript();
        } else {
            event.preventDefault(); // Previne o envio do formulário se não estiver validado
        }
    });
});

function runScript() {
    // Chame a função original do script.js aqui
    originalRunScript();
}
