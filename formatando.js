// Função para exibir o modal
function exibirModal() {
    $('#invalidCredentialsModal').modal('show');
}

// Event listener para o formulário de login
$('#loginForm').submit(function (event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    // Realiza a requisição Ajax para o endpoint de login
    $.ajax({
        type: 'POST',
        url: '/login',
        data: $(this).serialize(),
        success: function (data) {
            if (data === true) {
                window.location.href = '/dashboard';
            } else {
                exibirModal();
            }
        },
        error: function (xhr, status, error) {
            console.error('Erro na requisição Ajax:', error);
        }
    });

});