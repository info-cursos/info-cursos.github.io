document.addEventListener("DOMContentLoaded", function () {
    // Obter o nome do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoID = urlParams.get('id');

    // Verificar se o nome do produto está presente
    if (produtoID) {
        // Carregar o arquivo config.json
        fetch('https://info-cursos.github.io/curso/cursos.edit.json')
            .then(response => response.json())
            .then(data => atualizarDados(data.autor.JessicaSoares.cursos[produtoID])) // Ajuste aqui para acessar o nível "cursos"
            .catch(error => console.error('Erro ao carregar cursos.json:', error));
    } else {
        console.error('ID do produto não especificado na URL.');
    }   
});

function atualizarDados(curso) {
    //Atualizar Título da página para o nome do produto
    document.getElementById('produtoTitle').textContent = `Info Cursos | ${curso.nome}`;

    // Atualizar os valores dos elementos de textos e imagem
    document.getElementById('nome').textContent = curso.nome;
    document.getElementById('descricao').textContent = curso.descricao;
    document.getElementById('fraseConvite').textContent = curso.fraseConvite;
    document.getElementById('sobre').textContent = curso.detalhes.sobre;
    document.getElementById('beneficios').textContent = curso.detalhes.beneficios;
    document.getElementById('conteudo').textContent = curso.detalhes.conteudo;
    document.getElementById('bonus').textContent = curso.detalhes.bonus;
    document.getElementById('acesso').textContent = curso.detalhes.acesso;
    document.getElementById('promocao').textContent = curso.detalhes.promocao;
    document.getElementById('certificado').textContent = curso.detalhes.certificado;
    document.getElementById('garantia').textContent = curso.detalhes.garantia;
    
    // Atualizar os valores dos elementos de imagem
    document.getElementById('imagem').src = curso.srcImagem;
    document.getElementById('imagem').alt = curso.altImagem;

    // Atualizar o valor do atributo href dos elementos <a>
    document.getElementById('linkTop1').href = curso.links.linksTop.linkTop1.href;
    document.getElementById('linkTop2').href = curso.links.linksTop.linkTop2.href;
    document.getElementById('linkImagem').href = curso.links.linkImagem.href;
    document.getElementById('linkMeio').href = curso.links.linkMeio.href;
    document.getElementById('linkBottom').href = curso.links.linkBottom.href;
    
    // Atualizar o valor do atributo textContent dos elementos <a>
    document.getElementById('linkTop1').textContent = curso.links.linksTop.linkTop1.textContent;
    document.getElementById('linkTop2').textContent = curso.links.linksTop.linkTop2.textContent;
    document.getElementById('linkMeio').textContent =  curso.links.linkMeio.textContent;
    document.getElementById('linkBottom').textContent = curso.links.linkBottom.textContent;
}
