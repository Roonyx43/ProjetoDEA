document.addEventListener("DOMContentLoaded", function() {
    const addEquipmentButton = document.getElementById("addEquipmentButton");
    const equipmentContainer = document.getElementById("equipmentContainer");

    const maxMachines = 4;
    let addedMachines = 0;
    let elementIdCounter = 0;

    addEquipmentButton.addEventListener("click", function() {
        if (addedMachines >= maxMachines) {
            alert("Você só pode adicionar até 4 máquinas.");
            return;
        }

        addEquipment(addedMachines);
        addedMachines++;
    });

    function addEquipment(id) {
        const equipmentDiv = document.createElement("div");
        equipmentDiv.classList.add("equipment-item");
        equipmentDiv.id = `equipment-item${id + 1}`;  // Assigning fixed ID

        // Adding remove button
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "-";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", function() {
            equipmentContainer.removeChild(equipmentDiv);
            addedMachines--;
        });
        equipmentDiv.appendChild(removeButton);

        const title = document.createElement("h2");
        title.textContent = `Máquina ${id + 1}`;
        equipmentDiv.appendChild(title);

        // Adding KG input
        const kgLabel = document.createElement("label");
        kgLabel.textContent = "KG";
        const kgInput = document.createElement("input");
        kgInput.type = "text";
        kgInput.name = `kg${id}`;
        kgInput.setAttribute('required', 'required');
        kgLabel.appendChild(kgInput);
        equipmentDiv.appendChild(kgLabel);
        equipmentDiv.appendChild(document.createElement("br"));

        // Creating a container for the four columns
        const columnsContainer = document.createElement("div");
        columnsContainer.classList.add("columns-container");

        // Semi-automação
        const semiAutomacaoDiv = createSection('Semi-automação', [
            'Smart Speed Control',
            '5000IR 24V',
            '5000IR 220V',
            '5000IR BV'
        ], `checkbox${id}_semi`, 2, false);
        columnsContainer.appendChild(semiAutomacaoDiv);
        
        // Automação
        const automacaoDiv = createSection('Automação', [
            '801',
            '501',
            'Smart EB'
        ], `checkbox${id}_auto`, 1, false);
        columnsContainer.appendChild(automacaoDiv);

        // Valvula Bermard
        const valvulaDiv = createSection('Valvula Bermard', [
            '3/4',
            '50mm',
            'Elétrica',
            'Pneumático'
        ], `checkbox${id}_valvula`, 2, true, [0, 1], [2, 3]);
        columnsContainer.appendChild(valvulaDiv);

        // Dreno
        const drenoDiv = createSectionWithInput('Dreno', [
            'Elétrico',
            'Pneumático'
        ], 'Diametro da Saída', `dreno${id}`, 1, false, true);
        columnsContainer.appendChild(drenoDiv);

        // Distancia da lavadora ao painel
        const distanciaDiv = createSectionWithInput('Distancia da lavadora ao painel', [], "", `distancia${id}`, 1, false, false);
        distanciaDiv.querySelector('input[type="text"]').classList.add('large-input');
        columnsContainer.appendChild(distanciaDiv);

        // Saída Flauta Produto
        const flautaDiv = createFlautaSection(id);
        columnsContainer.appendChild(flautaDiv);

        equipmentDiv.appendChild(columnsContainer);
        equipmentContainer.appendChild(equipmentDiv);

        // Add event listeners to limit checkbox selection
        limitCheckboxSelection(valvulaDiv, [0, 1]);
        limitCheckboxSelection(valvulaDiv, [2, 3]);
        limitCheckboxSelection(drenoDiv);
        limitCheckboxSelection(distanciaDiv);
        limitCheckboxSelection(flautaDiv);
    }

    function createSection(titleText, checkboxLabels, namePrefix, minRequired = 0, isRequired = true, inlineGroup1 = [], inlineGroup2 = []) {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("column");
        const title = document.createElement("h3");
        title.textContent = titleText;
        sectionDiv.appendChild(title);
        checkboxLabels.forEach((labelText, index) => {
            const checkboxLabel = document.createElement("label");
            checkboxLabel.textContent = labelText;
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = `${namePrefix}${index + 1}`;
            checkbox.id = `${namePrefix}${elementIdCounter++}`;
            if (isRequired) {
                checkbox.setAttribute('required', 'required'); // Adicionando o atributo required apenas se isRequired for true
            }
            checkboxLabel.appendChild(checkbox);

            // Apply inline options class if the index is in inlineGroup1 or inlineGroup2
            if (inlineGroup1.includes(index) || inlineGroup2.includes(index)) {
                sectionDiv.classList.add("inline-options");
            }
            sectionDiv.appendChild(checkboxLabel);
        });

        if (minRequired > 0) {
            sectionDiv.setAttribute('data-min-required', minRequired); // Adiciona um atributo personalizado para a validação
        }

        return sectionDiv;
    }

    function createSectionWithInput(titleText, checkboxLabels, inputLabelText, namePrefix, minCheckboxRequired = 0, inputWithoutLabel = false, isInline = false) {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("column");
        const title = document.createElement("h3");
        title.textContent = titleText;
        sectionDiv.appendChild(title);

        if (inputLabelText) {
            const inputLabel = document.createElement("label");
            inputLabel.textContent = inputLabelText;
            const input = document.createElement("input");
            input.type = "text";
            input.name = `${namePrefix}_input`;
            input.setAttribute('required', 'required');
            inputLabel.appendChild(input);
            input.classList.add = 'large-input'
            sectionDiv.appendChild(inputLabel);
        } else {
            const input = document.createElement("input");
            input.type = "text";
            input.name = `${namePrefix}_input`;
            input.setAttribute('required', 'required');
            sectionDiv.appendChild(input);
        }

        checkboxLabels.forEach((labelText, index) => {
            const checkboxLabel = document.createElement("label");
            checkboxLabel.textContent = labelText;
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = `${namePrefix}_checkbox${index + 1}`;
            checkbox.id = `${namePrefix}_checkbox${elementIdCounter++}`;
            checkbox.setAttribute('required', 'required');
            checkboxLabel.appendChild(checkbox);
            if (isInline) {
                sectionDiv.classList.add("inline-options");
            }
            sectionDiv.appendChild(checkboxLabel);
        });

        if (minCheckboxRequired > 0) {
            sectionDiv.setAttribute('data-min-required', minCheckboxRequired);
        }

        return sectionDiv;
    }

    function createFlautaSection(id) {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("column");
        const title = document.createElement("h3");
        title.textContent = "Saída da Flauta Produto";
        sectionDiv.appendChild(title);

        // Esquerda checkbox
        const esquerdaLabel = document.createElement("label");
        esquerdaLabel.textContent = "Esquerda";
        const esquerdaCheckbox = document.createElement("input");
        esquerdaCheckbox.type = "checkbox";
        esquerdaCheckbox.name = `checkbox_esquerda${id}`;
        esquerdaCheckbox.id = `checkbox_esquerda${elementIdCounter++}`;
        esquerdaCheckbox.setAttribute('required', 'required');
        esquerdaLabel.appendChild(esquerdaCheckbox);
        sectionDiv.appendChild(esquerdaLabel);

        // Direita checkbox
        const direitaLabel = document.createElement("label");
        direitaLabel.textContent = "Direita";
        const direitaCheckbox = document.createElement("input");
        direitaCheckbox.type = "checkbox";
        direitaCheckbox.name = `checkbox_direita${id}`;
        direitaCheckbox.id = `checkbox_direita${elementIdCounter++}`;
        direitaCheckbox.setAttribute('required', 'required');
        direitaLabel.appendChild(direitaCheckbox);
        sectionDiv.appendChild(direitaLabel);

        return sectionDiv;
    }

    function limitCheckboxSelection(sectionDiv, groupIndices = null) {
        let checkboxes;
        if (groupIndices) {
            checkboxes = groupIndices.map(index => sectionDiv.querySelectorAll('input[type="checkbox"]')[index]);
        } else {
            checkboxes = sectionDiv.querySelectorAll('input[type="checkbox"]');
        }
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    checkboxes.forEach(otherCheckbox => {
                        if (otherCheckbox !== checkbox) {
                            otherCheckbox.checked = false;
                            otherCheckbox.removeAttribute('required'); // Remove o atributo required
                        }
                    });
                } else {
                    checkboxes.forEach(otherCheckbox => {
                        otherCheckbox.setAttribute('required', 'required'); // Restaura o atributo required
                    });
                }
            });
        });
    }

    // Adicionando lógica de validação no envio do formulário
    const form = document.getElementById('myForm');
    form.addEventListener('submit', (event) => {
        let valid = true;

        // Validação dos campos KG
        const kgInputs = document.querySelectorAll('input[name^="kg"]');
        kgInputs.forEach(kgInput => {
            if (!kgInput.value) {
                valid = false;
                kgInput.classList.add('error');
                const errorSpan = document.createElement('span');
                errorSpan.textContent = 'Este campo é obrigatório';
                errorSpan.style.color = 'red';
                errorSpan.classList.add('error-message');
                if (!kgInput.parentElement.querySelector('.error-message')) {
                    kgInput.parentElement.appendChild(errorSpan);
                }
            } else {
                kgInput.classList.remove('error');
                const errorMessages = kgInput.parentElement.querySelectorAll('.error-message');
                errorMessages.forEach(errorMessage => errorMessage.remove());
            }
        });

        // Validação de checkboxes mínimos
        const columns = document.querySelectorAll('.column');
        columns.forEach(column => {
            const minRequired = column.getAttribute('data-min-required');
            if (minRequired) {
                const checkboxes = column.querySelectorAll('input[type="checkbox"]');
                const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
                if (checkedCount < minRequired) {
                    valid = false;
                    checkboxes.forEach(checkbox => {
                        checkbox.classList.add('error');
                        const errorSpan = document.createElement('span');
                        errorSpan.textContent = `Selecione pelo menos ${minRequired} opções`;
                        errorSpan.style.color = 'red';
                        errorSpan.classList.add('error-message');
                        if (!column.querySelector('.error-message')) {
                            column.appendChild(errorSpan);
                        }
                    });
                } else {
                    checkboxes.forEach(checkbox => checkbox.classList.remove('error'));
                    const errorMessages = column.querySelectorAll('.error-message');
                    errorMessages.forEach(errorMessage => errorMessage.remove());
                }
            }
        });

        // Validação para a seção de Saída da Flauta Produto
        const flautaSections = document.querySelectorAll('.column h3:contains("Saída da Flauta Produto")');
        flautaSections.forEach(flautaSection => {
            const checkboxes = flautaSection.parentElement.querySelectorAll('input[type="checkbox"]');
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            if (checkedCount === 0) {
                valid = false;
                checkboxes.forEach(checkbox => {
                    checkbox.classList.add('error');
                    const errorSpan = document.createElement('span');
                    errorSpan.textContent = 'Selecione pelo menos uma opção';
                    errorSpan.style.color = 'red';
                    errorSpan.classList.add('error-message');
                    if (!flautaSection.parentElement.querySelector('.error-message')) {
                        flautaSection.parentElement.appendChild(errorSpan);
                    }
                });
            } else {
                checkboxes.forEach(checkbox => checkbox.classList.remove('error'));
                const errorMessages = flautaSection.parentElement.querySelectorAll('.error-message');
                errorMessages.forEach(errorMessage => errorMessage.remove());
            }
        });

        if (!valid) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios e selecione as opções necessárias.');
        }
    });
});
