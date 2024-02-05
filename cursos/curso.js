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

function atualizarDescricao(id) {
    // Atualizar os valores dos elementos <h2>
    document.getElementById('nome').textContent = id.nome;
    document.getElementById('descricao').textContent = id.descricao;
    document.getElementById('sobre').textContent = id.detalhes.sobre;
    document.getElementById('beneficios').textContent = id.detalhes.beneficios;
    document.getElementById('conteudo').textContent = id.detalhes.conteudo;
    document.getElementById('bonus').textContent = id.detalhes.bonus;
    document.getElementById('acesso').textContent = id.detalhes.conteudo;
    document.getElementById('promocao').textContent = id.detalhes.conteudo;
    document.getElementById('certificado').textContent = id.detalhes.certificado;
    document.getElementById('garantia').textContent = id.detalhes.garantia;

    // Atualizar o valor do atributo href do elemento <a> com o id 'linkTop'
    document.getElementById('linkTop').href = id.link;
    // Atualizar o texto do elemento <a> com o id 'linkTop'
    //document.getElementById('linkTop').textContent = `Visite o site do ${produto.nome}`;
    document.getElementById('linkTop').textContent = 'Inscreva-se Agora';
    // Atualizar o valor do atributo href do elemento <a> com o id 'linkBottom'
    document.getElementById('linkBottom').href = id.link;
    // Atualizar o texto do elemento <a> com o id 'linkBottom'
    //document.getElementById('linkBottom').textContent = `Visite o site do ${produto.nome}`;
    document.getElementById('linkBottom').textContent = 'Inscreva-se Agora';
}
