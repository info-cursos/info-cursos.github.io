// Redirecionamento após 5 segundos (5000 milissegundos)
/*setTimeout(function () {
    window.location.href = "sua_outra_pagina.html";
}, 5000);*/

/*** Script Verificador de Status de Manutenção ***/
/*** Requisitos para a execução do script ***/
/* Adicione referência ao JQuery dentro da tag <head></head> em sua página
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
*/
// Importa os valores do arquivo config.json
fetch('https://info-cursos.github.io/assets/manutencao/config.json')
    .then(response => response.json())
    .then(data => {
        // Obtém a URL atual
        const urlAtual = window.location.href;
        // Define a URL de Manutenção
        const urlManutencao = "https://info-cursos.github.io/assets/manutencao/index.html";

        // Verifica se a URL está na lista e atribui o valor correspondente a manutencaoAtiva
        const manutencaoAtiva = data.urls[urlAtual] || false;

        // Exibe o valor de manutencaoAtiva
        //console.log("manutencaoAtiva:", manutencaoAtiva);

        // Se estiver em manutenção, carrega o conteúdo dinamicamente
        if (manutencaoAtiva) {
            $(document).ready(function () {
                $(document.body).load(urlManutencao, function () {
                    // Após o carregamento, define o estilo do body como display: block
                    document.body.style.display = "block";
                });
            });
        } else {
            $(document).ready(function () {
                // Se não estiver em manutenção, define o estilo do body como display: block
                document.body.style.display = "block";
            });
        }
    })
    .catch(error => console.error('Erro ao carregar o arquivo config.json:', error));
