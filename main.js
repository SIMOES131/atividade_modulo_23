document.addEventListener("DOMContentLoaded", function() {
    var username = 'SIMOES131';  // Nome de usuário atualizado
    var apiUrl = 'https://api.github.com/users/' + username;

    fetch(apiUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Erro ao buscar informações do usuário');
            }
            return response.json();
        })
        .then(function(data) {
            // Preencher os campos com os dados obtidos da API
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.getElementById('repositorios').value = data.public_repos;
            document.getElementById('seguidores').value = data.followers;
            document.getElementById('seguindo').value = data.following;
            document.querySelector('.profile-link').href = data.html_url;
        })
        .catch(function(error) {
            console.error('Erro ao buscar informações do usuário:', error);
            alert('Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.');
        })
        .finally(function() {
            // Finalizar o código após a interação do usuário com a mensagem de erro
            setTimeout(function() {
                console.log('Requisição finalizada.');
            }, 1000);
        });
});
