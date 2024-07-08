document.addEventListener('DOMContentLoaded', () => {
    const addProductButton = document.getElementById('addProductButton');
    const productsContainer = document.getElementById('productsContainer');
    const maxProducts = 7;
    const productsPerGroup = 4;

    addProductButton.addEventListener('click', () => {
        // Verifica o número de produtos atuais
        const currentProducts = productsContainer.querySelectorAll('.product-group > .product-item').length;

        if (currentProducts < maxProducts) {
            // Verifica se precisamos criar uma nova div contêiner para grupos de produtos
            let lastProductGroup = productsContainer.lastElementChild;
            if (!lastProductGroup || lastProductGroup.children.length >= productsPerGroup) {
                lastProductGroup = document.createElement('div');
                lastProductGroup.classList.add('product-group');
                productsContainer.appendChild(lastProductGroup);
            }

            // Criação dos elementos
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            const productLabel = document.createElement('p');
            const productInput = document.createElement('input');
            const checkboxContainer = document.createElement('div');
            const pescadorContainer = document.createElement('div');
            const pescador = document.createElement('label');
            const checkboxLabel5 = document.createElement('label');
            const checkbox5 = document.createElement('input');
            const checkboxLabel20 = document.createElement('label');
            const checkbox20 = document.createElement('input');
            const checkboxLabel50 = document.createElement('label');
            const checkbox50 = document.createElement('input');
            const removeButton = document.createElement('button');

            // Configuração dos atributos e textos
            productLabel.textContent = `Bomba - ${currentProducts + 1}`;
            productLabel.style = 'margin-top: 40px';
            productInput.type = 'text';
            productInput.classList.add('product-input');
            checkboxContainer.classList.add('checkbox-container');
            pescadorContainer.classList.add('pescador-container');
            pescador.textContent = 'Pescador:  ';
            checkboxLabel5.textContent = '5';
            checkbox5.type = 'checkbox';
            checkbox5.value = '5';
            checkbox5.name = `option-${currentProducts}`;
            checkbox5.classList.add('product-checkbox');
            checkboxLabel20.textContent = '20';
            checkbox20.type = 'checkbox';
            checkbox20.value = '20';
            checkbox20.name = `option-${currentProducts}`;
            checkbox20.classList.add('product-checkbox');
            checkboxLabel50.textContent = '50';
            checkbox50.type = 'checkbox';
            checkbox50.value = '50';
            checkbox50.name = `option-${currentProducts}`;
            checkbox50.classList.add('product-checkbox');
            removeButton.textContent = '-';
            removeButton.type = 'button';
            removeButton.classList.add('remove-button');

            // Adicionando evento de clique ao botão de remover
            removeButton.addEventListener('click', () => {
                lastProductGroup.removeChild(productDiv);
                // Remove o grupo de produtos se estiver vazio
                if (lastProductGroup.children.length === 0) {
                    productsContainer.removeChild(lastProductGroup);
                }
            });

            // Adicionando os elementos ao contêiner do produto
            productDiv.appendChild(productLabel);
            productDiv.appendChild(productInput);
            productDiv.appendChild(removeButton);

            pescadorContainer.appendChild(pescador);
            pescadorContainer.appendChild(checkboxLabel5);
            checkboxLabel5.appendChild(checkbox5);
            pescadorContainer.appendChild(checkboxLabel20);
            checkboxLabel20.appendChild(checkbox20);
            pescadorContainer.appendChild(checkboxLabel50);
            checkboxLabel50.appendChild(checkbox50);
            
            productDiv.appendChild(pescadorContainer);
            
            productDiv.appendChild(checkboxContainer);

            // Adicionando o produto ao último grupo de produtos
            lastProductGroup.appendChild(productDiv);

            // Função para garantir que apenas uma checkbox por grupo seja selecionada
            const checkboxGroup = [checkbox5, checkbox20, checkbox50];
            checkboxGroup.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        checkboxGroup.forEach(cb => {
                            if (cb !== this) {
                                cb.checked = false;
                            }
                        });
                    }
                });
            });
        } else {
            alert('Você só pode adicionar até 7 produtos.');
        }
    });
});
