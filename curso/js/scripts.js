document.addEventListener("DOMContentLoaded", function () {
    // Obter o nome do curso da URL
    const urlParams = new URLSearchParams(window.location.search);
    const cursoID = urlParams.get('id');

    // Carregar o arquivo config.json
    fetch('https://info-cursos.github.io/curso/cursos.json')
        .then(response => response.json())
        .then(data => {
            // Chamar a função recursiva para procurar o cursoID
            const curso = encontrarCurso(data, cursoID);
            // Se o curso for encontrado, atualizar os dados
            if (curso) {
                atualizarDadosCurso(curso);
            } else {
                console.error('Curso não encontrado.');
            }
        })
        .catch(error => console.error('Erro ao carregar cursos.json:', error));  
});

// Função recursiva para encontrar o cursoID em todos os níveis do objeto JSON
function encontrarCurso(objeto, cursoID) {
    // Verificar se o objeto atual é um array
    if (Array.isArray(objeto)) {
        // Se for um array, iterar sobre cada elemento do array
        for (let i = 0; i < objeto.length; i++) {
            // Chamar a função recursiva para cada elemento do array
            const resultado = encontrarCurso(objeto[i], cursoID);
            // Se o cursoID for encontrado, retornar o resultado
            if (resultado) {
                return resultado;
            }
        }
    } else if (typeof objeto === 'object') {
        // Se o objeto atual for um objeto, iterar sobre cada propriedade do objeto
        for (let chave in objeto) {
            // Se a propriedade atual for o cursoID, retornar o objeto correspondente
            if (chave === cursoID) {
                return objeto[chave];
            }
            // Chamar a função recursiva para cada valor do objeto
            const resultado = encontrarCurso(objeto[chave], cursoID);
            // Se o cursoID for encontrado, retornar o resultado
            if (resultado) {
                return resultado;
            }
        }
    }
    // Se o cursoID não for encontrado em nenhum nível, retornar null
    return null;
}

// Função para atualizar os dados do curso na página
function atualizarDadosCurso(curso) {
    //Atualizar Título da página para o nome do curso
    document.getElementById('cursoTitle').textContent = `Info Cursos | ${curso.nome}`;

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