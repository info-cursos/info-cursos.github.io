document.addEventListener("DOMContentLoaded", function () {
    // Obter o nome do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoNome = urlParams.get('id');

    // Verificar se o nome do produto está presente
    if (produtoNome) {
        // Carregar o arquivo config.json
        fetch('https://info-cursos.github.io/cursos/cursos.json')
            .then(response => response.json())
            .then(data => atualizarDescricao(data[produtoNome]))
            .catch(error => console.error('Erro ao carregar cursos.json:', error));
    } else {
        console.error('Nome do produto não especificado na URL.');
    }
});

function atualizarDescricao(produto) {
    // Atualizar os valores dos elementos <h2>
    document.getElementById('nome').textContent = produto.nome;
    document.getElementById('descricao').textContent = produto.descricao;
    document.getElementById('sobre').textContent = produto.detalhes.sobre;
    document.getElementById('beneficios').textContent = produto.detalhes.beneficios;
    document.getElementById('conteudo').textContent = produto.detalhes.conteudo;
    document.getElementById('bonus').textContent = produto.detalhes.bonus;
    document.getElementById('certificado').textContent = produto.detalhes.certificado;
    document.getElementById('garantia').textContent = produto.detalhes.garantia;

    // Atualizar o valor do atributo href do elemento <a> com o id 'linkTop'
    document.getElementById('linkTop').href = produto.link;
    // Atualizar o texto do elemento <a> com o id 'linkTop'
    //document.getElementById('linkTop').textContent = `Visite o site do ${produto.nome}`;
    document.getElementById('linkTop').textContent = 'Inscreva-se Agora';
    // Atualizar o valor do atributo href do elemento <a> com o id 'linkBottom'
    document.getElementById('linkBottom').href = produto.link;
    // Atualizar o texto do elemento <a> com o id 'linkBottom'
    //document.getElementById('linkBottom').textContent = `Visite o site do ${produto.nome}`;
    document.getElementById('linkBottom').textContent = 'Inscreva-se Agora';
}
