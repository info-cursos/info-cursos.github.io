// Limpa o console
console.clear();

// Função para mostrar o toast
function showToast() {
  $(".toast").toast("show");
  setTimeout(function () {
    var start = new Date().getTime(); // Tempo inicial
    var interval = setInterval(function () {
      var elapsed = new Date().getTime() - start; // Tempo decorrido
      var remaining = 4000 - elapsed; // Tempo restante
      if (remaining <= 0) {
        clearInterval(interval);
        $(".toast").toast("hide"); // Oculta o toast ao final da transição de opacidade
        $(".toast").css("opacity", 1); // Ajusta a opacidade para 1
      } else if (remaining <= 4000) {
        var opacity = remaining / 4000; // Ajusta a opacidade linearmente
        $(".toast").css("opacity", opacity);
      }
    }, 100);
  }, 11000); // Inicia a transição de opacidade no sexto segundo
  //
}

function toastBtnAvancarOnClick() {
  console.log("O botão Avançar do toast foi clicado!");
}

function toastBtnFecharOnClick() {
  console.log("O botão Fechar do toast foi clicado!");
}

// Função para atualizar os dados da Notificacao na página
function atualizarDados(toast) {
  //Atualizar Ícone do Toast
  document.getElementById("toastImagem").src = toast.header.toastImagem.src;
  //Atualizar Título do Toast
  document.getElementById("toastTitulo").textContent = toast.header.toastTitulo;
  //Atualizar Small do Toast
  document.getElementById("toastSubTitulo").textContent =
    toast.header.toastSubTitulo;
  //Atualizar Mensagem do Toast
  document.getElementById("toastMensagem").textContent = toast.body.toastMensagem;
  //Atualizar Texto do botão Avancar do Toast
  document.getElementById("toastBtnAvancar").textContent = toast.body.toastBtnAvancar.textContent;
  //Atualizar Texto do botão Next do Toast
  document.getElementById("toastBtnFechar").textContent = toast.body.toastBtnFechar.textContent;
 
  // Obtém uma referência para o botão pelo seu ID
  var botaoAvancar = document.getElementById("toastBtnAvancar");
  // Atribui o evento de clique ao botão usando as informações do JSON
  botaoAvancar.addEventListener("click", function () {
    // Avalia a string do JSON para chamar a função correta
    eval(toast.body.toastBtnAvancar.onClick);
  });

  // Obtém uma referência para o botão pelo seu ID
  var botaoFechar = document.getElementById("toastBtnFechar"); 
  // Atribui o evento de clique ao botão usando as informações do JSON
  botaoFechar.addEventListener("click", function () {
    // Avalia a string do JSON para chamar a função correta
    eval(toast.body.toastBtnFechar.onClick);
  });  
}

document.addEventListener("DOMContentLoaded", function () {
  const Notificacao = "toast";

  // Carregar o arquivo toast.json
  fetch("https://info-cursos.github.io/curso/json/toast.json")
    .then((response) => response.json())
    .then((data) => {
      // Chamar a função recursiva para procurar o produtoID
      const toast = encontrarProduto(data, Notificacao);
      // Se o curso for encontrado, atualizar os dados
      if (toast) {
        atualizarDados(toast);
      } else {
        console.error("Notificação não encontrado.");
      }
    })
    .catch((error) => console.error("Erro ao carregar toast.json:", error));
});

// Função recursiva para encontrar a Notificacao em todos os níveis do objeto JSON
function encontrarProduto(objeto, Notificacao) {
  // Verificar se o objeto atual é um array
  if (Array.isArray(objeto)) {
    // Se for um array, iterar sobre cada elemento do array
    for (let i = 0; i < objeto.length; i++) {
      // Chamar a função recursiva para cada elemento do array
      const resultado = encontrarProduto(objeto[i], Notificacao);
      // Se a Notificacao for encontrada, retornar o resultado
      if (resultado) {
        return resultado;
      }
    }
  } else if (typeof objeto === "object") {
    // Se o objeto atual for um objeto, iterar sobre cada propriedade do objeto
    for (let chave in objeto) {
      // Se a propriedade atual for a Notificacao, retornar o objeto correspondente
      if (chave === Notificacao) {
        return objeto[chave];
      }
      // Chamar a função recursiva para cada valor do objeto
      const resultado = encontrarProduto(objeto[chave], Notificacao);
      // Se a Notificacao for encontrada, retornar o resultado
      if (resultado) {
        return resultado;
      }
    }
  }
  // Se o Notificacao não for encontrada em nenhum nível, retornar null
  return null;
}

showToast();
