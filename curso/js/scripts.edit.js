document.addEventListener("DOMContentLoaded", function () {
    // Obter o nome do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoID = urlParams.get('id');

    // Verificar se o nome do produto está presente
    if (produtoID) {
        // Carregar o arquivo config.json
        fetch('https://info-cursos.github.io/curso/cursos.edit.json')
            .then(response => response.json())
            .then(data => atualizarDados(data[produtoID]))
            .catch(error => console.error('Erro ao carregar cursos.json:', error));
    } else {
        console.error('ID do produto não especificado na URL.');
    }
});

function atualizarDados(id) {
    //Atualizar Título da página para o nome do produto
    document.getElementById('produtoTitle').textContent = `Info Cursos | ${id.nome}`;

    // Atualizar os valores dos elementos de textos e imagem
    document.getElementById('nome').textContent = cursos.id.nome;
    document.getElementById('descricao').textContent = id.descricao;
    document.getElementById('fraseConvite').textContent = id.fraseConvite;
    document.getElementById('sobre').textContent = id.detalhes.sobre;
    document.getElementById('beneficios').textContent = id.detalhes.beneficios;
    document.getElementById('conteudo').textContent = id.detalhes.conteudo;
    document.getElementById('bonus').textContent = id.detalhes.bonus;
    document.getElementById('acesso').textContent = id.detalhes.acesso;
    document.getElementById('promocao').textContent = id.detalhes.promocao;
    document.getElementById('certificado').textContent = id.detalhes.certificado;
    document.getElementById('garantia').textContent = id.detalhes.garantia;
    
    // Atualizar os valores dos elementos de imagem
    document.getElementById('imagem').src = id.srcImagem;
    document.getElementById('imagem').alt = id.altImagem;

    // Atualizar o valor do atributo href dos elementos <a>
    document.getElementById('linkTop1').href = id.links.linksTop.linkTop1.href;
    document.getElementById('linkTop2').href = id.links.linksTop.linkTop2.href;
    document.getElementById('linkImagem').href = id.links.linkImagem.href;
    document.getElementById('linkMeio').href = id.links.linkMeio.href;
    document.getElementById('linkBottom').href = id.links.linkBottom.href;
    
    // Atualizar o valor do atributo textContent dos elementos <a>
    //document.getElementById('linkTop').textContent = `Visite o site do ${produto.nome}`;
    document.getElementById('linkTop1').textContent = id.links.linksTop.linkTop1.textContent;
    document.getElementById('linkTop2').textContent = id.links.linksTop.linkTop2.textContent;
    document.getElementById('linkMeio').textContent =  id.links.linkMeio.textContent;
    document.getElementById('linkBottom').textContent = id.links.linkBottom.textContent;
}
