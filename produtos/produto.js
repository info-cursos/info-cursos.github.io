document.addEventListener("DOMContentLoaded", function () {
    // Obter o nome do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoNome = urlParams.get('produto');

    // Verificar se o nome do produto está presente
    if (produtoNome) {
        // Carregar o arquivo config.json
        fetch('https://info-cursos.github.io/produtos/config.json')
            .then(response => response.json())
            .then(data => atualizarDescricao(data[produtoNome]))
            .catch(error => console.error('Erro ao carregar config.json:', error));
    } else {
        console.error('Nome do produto não especificado na URL.');
    }
});

function atualizarDescricao(descricao) {
    // Atualizar os valores dos elementos <h2>
    document.getElementById('sobre').textContent = descricao.sobre;
    document.getElementById('beneficios').textContent = descricao.beneficios;
    document.getElementById('conteudo').textContent = descricao.conteudo;
    document.getElementById('bonus').textContent = descricao.bonus;
    document.getElementById('certificado').textContent = descricao.certificado;
    document.getElementById('garantia').textContent = descricao.garantia;
}
