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

function atualizarDescricao(produto) {
    // Atualizar os valores dos elementos <h2>
    document.getElementById('sobre').textContent = produto.descricao.sobre;
    document.getElementById('beneficios').textContent = produto.descricao.beneficios;
    document.getElementById('conteudo').textContent = produto.descricao.conteudo;
    document.getElementById('bonus').textContent = produto.descricao.bonus;
    document.getElementById('certificado').textContent = produto.descricao.certificado;
    document.getElementById('garantia').textContent = produto.descricao.garantia;

    // Atualizar o valor do atributo href do elemento <a> com o id 'link'
    document.getElementById('link').href = produto.link;

    // Atualizar o texto do elemento <a> com o id 'link'
    document.getElementById('link').textContent = `Visite o site do ${produto.nome}`;
}
