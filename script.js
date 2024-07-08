document.addEventListener('DOMContentLoaded', function() {
    const formEq = document.getElementById('formEq');

    formEq.addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura os valores dos inputs
        const observacao = document.querySelector('textarea[placeholder="Observação"]').value;
        const dtinst = document.querySelector('input[placeholder="Data de instalação"]').value;
        const hor = document.querySelector('input[placeholder="Horário"]').value;
        const nomeCliente = document.querySelector('input[placeholder="Nome do Cliente"]').value;
        const codigoCliente = document.querySelector('input[placeholder="Código do Cliente"]').value;
        const vendedor = document.querySelector('input[placeholder="Vendedor"]').value;
        const contatoInstalacao = document.querySelector('input[placeholder="Contato na instalação"]').value;
        const clienteNovo = document.querySelector('input[name="option"][value="1"]').checked;
        const clienteExistente = document.querySelector('input[name="option"][value="2"]').checked;
        const tensao110v = document.querySelector('input[name="option2"][value="3"]').checked;
        const tensao220v = document.querySelector('input[name="option2"][value="4"]').checked;
        const conexao34 = document.querySelector('input[name="option3"][value="5"]').checked;
        const conexao12 = document.querySelector('input[name="option3"][value="6"]').checked;
        const CPUdir = document.querySelector('input[name="option4"][value="7"]').checked;
        const CPUesq = document.querySelector('input[name="option4"][value="8"]').checked;
        const painelSim = document.querySelector('input[name="option5"][value="9"]').checked;
        const painelNao = document.querySelector('input[name="option5"][value="10"]').checked;
        const medPai = document.querySelector('input[id="medpai1"]').value;
        const medPar1 = document.querySelector('input[id="medpar1"]').value;
        const medPar2 = document.querySelector('input[id="medpar2"]').value;
        const dist = document.querySelector('input[id="dist"]').value;
        const dist2 = document.querySelector('input[id="dist2"]').value;
        const pacd = document.querySelector('input[name="option6"][value="11"]').checked;
        const pace = document.querySelector('input[name="option6"][value="12"]').checked;
        const pecd = document.querySelector('input[name="option7"][value="13"]').checked;
        const pece = document.querySelector('input[name="option7"][value="14"]').checked;
        
        //Máquina 1
        const kg0 = document.querySelector('input[name="kg0"]').value;
        const ssc1 = document.querySelector('input[name="checkbox0_semi1"]').checked;        
        const check500024v1 = document.querySelector('input[name="checkbox0_semi2"]').checked;
        const check5000220v1 = document.querySelector('input[name="checkbox0_semi3"]').checked;
        const check5000bvv1 = document.querySelector('input[name="checkbox0_semi4"]').checked;
        const a801 = document.querySelector('input[name="checkbox0_auto1"]').checked
        const a501 = document.querySelector('input[name="checkbox0_auto2"]').checked
        const aEB = document.querySelector('input[name="checkbox0_auto3"]').checked
        const vb3_4 = document.querySelector('input[name="checkbox0_valvula1"]').checked
        const vb50 = document.querySelector('input[name="checkbox0_valvula2"]').checked
        const vbel = document.querySelector('input[name="checkbox0_valvula3"]').checked
        const vbpn = document.querySelector('input[name="checkbox0_valvula4"]').checked
        const drenoinp = document.querySelector('input[name="dreno0_input"]').value
        const drenoel = document.querySelector('input[name="dreno0_checkbox1"]').checked
        const drenopn = document.querySelector('input[name="dreno0_checkbox2"]').checked
        const distlp = document.querySelector('input[name="distancia0_input"]').value
        const flesq = document.querySelector('input[name="checkbox_esquerda0"]').checked
        const fldir = document.querySelector('input[name="checkbox_direita0"]').checked

        // Verifica a existência da div equipment-item2
        const equipmentItem2Exists = document.getElementById('equipment-item2') !== null;

        //Máquina 2 (se a div equipment-item2 existir)
        let kg1, ssc2, check500024v2, check5000220v2, check5000bvv2, a801_2, a501_2, aEB2, vb3_4_2, vb50_2, vbel2, vbpn2, drenoinp2, drenoel2, drenopn2, distlp2, flesq2, fldir2;
        if (equipmentItem2Exists) {
            kg1 = document.querySelector('input[name="kg1"]').value;
            ssc2 = document.querySelector('input[name="checkbox1_semi1"]').checked;        
            check500024v2 = document.querySelector('input[name="checkbox1_semi2"]').checked;
            check5000220v2 = document.querySelector('input[name="checkbox1_semi3"]').checked;
            check5000bvv2 = document.querySelector('input[name="checkbox1_semi4"]').checked;
            a801_2 = document.querySelector('input[name="checkbox1_auto1"]').checked;
            a501_2 = document.querySelector('input[name="checkbox1_auto2"]').checked;
            aEB2 = document.querySelector('input[name="checkbox1_auto3"]').checked;
            vb3_4_2 = document.querySelector('input[name="checkbox1_valvula1"]').checked;
            vb50_2 = document.querySelector('input[name="checkbox1_valvula2"]').checked;
            vbel2 = document.querySelector('input[name="checkbox1_valvula3"]').checked;
            vbpn2 = document.querySelector('input[name="checkbox1_valvula4"]').checked;
            drenoinp2 = document.querySelector('input[name="dreno1_input"]').value;
            drenoel2 = document.querySelector('input[name="dreno1_checkbox1"]').checked;
            drenopn2 = document.querySelector('input[name="dreno1_checkbox2"]').checked;
            distlp2 = document.querySelector('input[name="distancia1_input"]').value;
            flesq2 = document.querySelector('input[name="checkbox_esquerda1"]').checked;
            fldir2 = document.querySelector('input[name="checkbox_direita1"]').checked;
        }

        const equipmentItem3Exists = document.getElementById('equipment-item3') !== null;

        let kg2, ssc3, check500024v3, check5000220v3, check5000bvv3, a801_3, a501_3, aEB3, vb3_4_3, vb50_3, vbel3, vbpn3, drenoinp3, drenoel3, drenopn3, distlp3, flesq3, fldir3;
        if (equipmentItem3Exists) {
            kg2 = document.querySelector('input[name="kg2"]').value;
            ssc3 = document.querySelector('input[name="checkbox2_semi1"]').checked;        
            check500024v3 = document.querySelector('input[name="checkbox2_semi2"]').checked;
            check5000220v3 = document.querySelector('input[name="checkbox2_semi3"]').checked;
            check5000bvv3 = document.querySelector('input[name="checkbox2_semi4"]').checked;
            a801_3 = document.querySelector('input[name="checkbox2_auto1"]').checked;
            a501_3 = document.querySelector('input[name="checkbox2_auto2"]').checked;
            aEB3 = document.querySelector('input[name="checkbox2_auto3"]').checked;
            vb3_4_3 = document.querySelector('input[name="checkbox2_valvula1"]').checked;
            vb50_3 = document.querySelector('input[name="checkbox2_valvula2"]').checked;
            vbel3 = document.querySelector('input[name="checkbox2_valvula3"]').checked;
            vbpn3 = document.querySelector('input[name="checkbox2_valvula4"]').checked;
            drenoinp3 = document.querySelector('input[name="dreno2_input"]').value;
            drenoel3 = document.querySelector('input[name="dreno2_checkbox1"]').checked;
            drenopn3 = document.querySelector('input[name="dreno2_checkbox2"]').checked;
            distlp3 = document.querySelector('input[name="distancia2_input"]').value;
            flesq3 = document.querySelector('input[name="checkbox_esquerda2"]').checked;
            fldir3 = document.querySelector('input[name="checkbox_direita2"]').checked;
        }

        const equipmentItem4Exists = document.getElementById('equipment-item4') !== null;

        let kg3, ssc4, check500024v4, check5000220v4, check5000bvv4, a801_4, a501_4, aEB4, vb3_4_4, vb50_4, vbel4, vbpn4, drenoinp4, drenoel4, drenopn4, distlp4, flesq4, fldir4;
        if (equipmentItem3Exists) {
            kg3 = document.querySelector('input[name="kg3"]').value;
            ssc4 = document.querySelector('input[name="checkbox3_semi1"]').checked;        
            check500024v4 = document.querySelector('input[name="checkbox3_semi2"]').checked;
            check5000220v4 = document.querySelector('input[name="checkbox3_semi3"]').checked;
            check5000bvv4 = document.querySelector('input[name="checkbox3_semi4"]').checked;
            a801_4 = document.querySelector('input[name="checkbox3_auto1"]').checked;
            a501_4 = document.querySelector('input[name="checkbox3_auto2"]').checked;
            aEB4 = document.querySelector('input[name="checkbox3_auto3"]').checked;
            vb3_4_4 = document.querySelector('input[name="checkbox3_valvula1"]').checked;
            vb50_4 = document.querySelector('input[name="checkbox3_valvula2"]').checked;
            vbel4 = document.querySelector('input[name="checkbox3_valvula3"]').checked;
            vbpn4 = document.querySelector('input[name="checkbox3_valvula4"]').checked;
            drenoinp4 = document.querySelector('input[name="dreno3_input"]').value;
            drenoel4 = document.querySelector('input[name="dreno3_checkbox1"]').checked;
            drenopn4 = document.querySelector('input[name="dreno3_checkbox2"]').checked;
            distlp4 = document.querySelector('input[name="distancia3_input"]').value;
            flesq4 = document.querySelector('input[name="checkbox_esquerda3"]').checked;
            fldir4 = document.querySelector('input[name="checkbox_direita3"]').checked;
        }

        // Captura os valores dos inputs de produto adicionados dinamicamente
        const productGroups = document.querySelectorAll('.product-group .product-item');
        const productValues = [];
        const checkboxValues = [];

        productGroups.forEach((group, index) => {
            const productInput = group.querySelector('.product-input');
            productValues.push(productInput.value);

            const checkboxes = group.querySelectorAll('.product-checkbox');
            let checkedValue = '';
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    checkedValue = checkbox.value;
                }
            });
            checkboxValues.push(checkedValue);
        });

        // Carrega o arquivo de modelo usando fetch
        fetch('modelo.xlsx')
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = new ExcelJS.Workbook();
                return workbook.xlsx.load(data);
            })
            .then(workbook => {
                const worksheet = workbook.getWorksheet(1); // Obtém a primeira planilha

                // Preenche as células específicas com os dados do formulário
                worksheet.getCell('H3').value = observacao;
                worksheet.getCell('I10').value = dtinst;
                worksheet.getCell('T10').value = hor;
                worksheet.getCell('I11').value = nomeCliente;
                worksheet.getCell('Y11').value = codigoCliente;
                worksheet.getCell('I12').value = vendedor;
                worksheet.getCell('I13').value = contatoInstalacao;
                worksheet.getCell('I14').value = clienteNovo ? 'X' : '';
                worksheet.getCell('R14').value = clienteExistente ? 'X' : '';
                worksheet.getCell('K15').value = tensao110v ? 'X' : '';
                worksheet.getCell('N15').value = tensao220v ? 'X' : '';
                worksheet.getCell('V15').value = conexao34 ? 'X' : '';
                worksheet.getCell('Z15').value = conexao12 ? 'X' : '';
                worksheet.getCell('I17').value = CPUdir ? 'X' : '';
                worksheet.getCell('O17').value = CPUesq ? 'X' : '';
                worksheet.getCell('W17').value = painelSim ? 'X' : '';
                worksheet.getCell('Z17').value = painelNao ? 'X' : '';
                worksheet.getCell('J18').value = medPai;
                worksheet.getCell('S18').value = medPar1;
                worksheet.getCell('X18').value = medPar2;
                worksheet.getCell('J19').value = dist;
                worksheet.getCell('J20').value = dist2;
                worksheet.getCell('V19').value = pacd ? 'X' : '';
                worksheet.getCell('Z19').value = pace ? 'X' : '';
                worksheet.getCell('V20').value = pecd ? 'X' : '';
                worksheet.getCell('Z20').value = pece ? 'X' : '';

                // Inserindo Máquina 1
                worksheet.getCell('B34').value = kg0;
                worksheet.getCell('N31').value = ssc1 ? 'X' : '';
                worksheet.getCell('R31').value = check500024v1 ? 'X' : '';
                worksheet.getCell('V31').value = check5000220v1 ? 'X' : '';
                worksheet.getCell('Z31').value = check5000bvv1 ? 'X' : '';
                worksheet.getCell('K32').value = a801 ? 'X' : '';
                worksheet.getCell('M32').value = a501 ? 'X' : '';
                worksheet.getCell('Q32').value = aEB ? 'X' : '';
                worksheet.getCell('L33').value = vb3_4 ? 'X' : '';
                worksheet.getCell('O33').value = vb50 ? 'X' : '';
                worksheet.getCell('S33').value = vbel ? 'X' : '';
                worksheet.getCell('Y33').value = vbpn ? 'X' : '';
                worksheet.getCell('X34').value = drenoinp;
                worksheet.getCell('M34').value = drenoel ? 'X' : '';
                worksheet.getCell('R34').value = drenopn ? 'X' : '';
                worksheet.getCell('J35').value = distlp;
                worksheet.getCell('U35').value = flesq ? 'X' : '';
                worksheet.getCell('S35').value = fldir ? 'X' : '';

                // Inserção da Máquina 2 (se a div equipment-item2 existir)
                if (equipmentItem2Exists) {
                    worksheet.getCell('B39').value = kg1;
                    worksheet.getCell('N36').value = ssc2 ? 'X' : '';
                    worksheet.getCell('R36').value = check500024v2 ? 'X' : '';
                    worksheet.getCell('V36').value = check5000220v2 ? 'X' : '';
                    worksheet.getCell('Z36').value = check5000bvv2 ? 'X' : '';
                    worksheet.getCell('K37').value = a801_2 ? 'X' : '';
                    worksheet.getCell('M37').value = a501_2 ? 'X' : '';
                    worksheet.getCell('Q37').value = aEB2 ? 'X' : '';
                    worksheet.getCell('L38').value = vb3_4_2 ? 'X' : '';
                    worksheet.getCell('O38').value = vb50_2 ? 'X' : '';
                    worksheet.getCell('S38').value = vbel2 ? 'X' : '';
                    worksheet.getCell('Y38').value = vbpn2 ? 'X' : '';
                    worksheet.getCell('X39').value = drenoinp2;
                    worksheet.getCell('M39').value = drenoel2 ? 'X' : '';
                    worksheet.getCell('R39').value = drenopn2 ? 'X' : '';
                    worksheet.getCell('J40').value = distlp2;
                    worksheet.getCell('U40').value = flesq2 ? 'X' : '';
                    worksheet.getCell('S40').value = fldir2 ? 'X' : '';
                }

                if (equipmentItem3Exists) {
                    worksheet.getCell('B44').value = kg2;
                    worksheet.getCell('N41').value = ssc3 ? 'X' : '';
                    worksheet.getCell('R41').value = check500024v3 ? 'X' : '';
                    worksheet.getCell('V41').value = check5000220v3 ? 'X' : '';
                    worksheet.getCell('Z41').value = check5000bvv3 ? 'X' : '';
                    worksheet.getCell('K42').value = a801_3 ? 'X' : '';
                    worksheet.getCell('M42').value = a501_3 ? 'X' : '';
                    worksheet.getCell('Q42').value = aEB3 ? 'X' : '';
                    worksheet.getCell('L43').value = vb3_4_3 ? 'X' : '';
                    worksheet.getCell('O43').value = vb50_3 ? 'X' : '';
                    worksheet.getCell('S43').value = vbel3 ? 'X' : '';
                    worksheet.getCell('Y44').value = vbpn3 ? 'X' : '';
                    worksheet.getCell('X44').value = drenoinp3;
                    worksheet.getCell('M44').value = drenoel3 ? 'X' : '';
                    worksheet.getCell('R44').value = drenopn3 ? 'X' : '';
                    worksheet.getCell('J45').value = distlp3;
                    worksheet.getCell('U45').value = flesq3 ? 'X' : '';
                    worksheet.getCell('S45').value = fldir3 ? 'X' : '';
                }

                if (equipmentItem4Exists) {
                    worksheet.getCell('B49').value = kg3;
                    worksheet.getCell('N46').value = ssc4 ? 'X' : '';
                    worksheet.getCell('R46').value = check500024v4 ? 'X' : '';
                    worksheet.getCell('V46').value = check5000220v4 ? 'X' : '';
                    worksheet.getCell('Z46').value = check5000bvv4 ? 'X' : '';
                    worksheet.getCell('K47').value = a801_4 ? 'X' : '';
                    worksheet.getCell('M47').value = a501_4 ? 'X' : '';
                    worksheet.getCell('Q47').value = aEB4 ? 'X' : '';
                    worksheet.getCell('L48').value = vb3_4_4 ? 'X' : '';
                    worksheet.getCell('O48').value = vb50_4 ? 'X' : '';
                    worksheet.getCell('S48').value = vbel4 ? 'X' : '';
                    worksheet.getCell('Y49').value = vbpn4 ? 'X' : '';
                    worksheet.getCell('X49').value = drenoinp4;
                    worksheet.getCell('M49').value = drenoel4 ? 'X' : '';
                    worksheet.getCell('R49').value = drenopn4 ? 'X' : '';
                    worksheet.getCell('J50').value = distlp4;
                    worksheet.getCell('U50').value = flesq4 ? 'X' : '';
                    worksheet.getCell('S50').value = fldir4 ? 'X' : '';
                }

                // Adiciona os valores dos produtos nas células específicas
                productValues.forEach((value, index) => {
                    worksheet.getCell(`D${index + 23}`).value = value;
                });

                // Adiciona os valores dos checkboxes nas células específicas
                checkboxValues.forEach((value, index) => {
                    worksheet.getCell(`I${index + 23}`).value = value;
                });

                // Adiciona a logo na célula B1
                return fetch('logo.jpg') // Caminho para a logo
                    .then(response => response.blob())
                    .then(blob => {
                        return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = () => resolve(reader.result);
                            reader.onerror = reject;
                            reader.readAsArrayBuffer(blob);
                        });
                    })
                    .then(buffer => {
                        const imageId = workbook.addImage({
                            buffer: buffer,
                            extension: 'jpg',
                        });

                        worksheet.addImage(imageId, {
                            tl: { col: 1.4, row: 1.2 },
                            ext: { width: 150, height: 100 }
                        });

                        // Salva o arquivo
                        return workbook.xlsx.writeBuffer();
                    });
            })
            .then(buffer => {
                const blob = new Blob([buffer], { type: "application/octet-stream" });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'dados_cliente.xlsx';
                link.click();
            })
            .catch(error => console.error('Erro ao carregar o modelo:', error));
    });
});
