// Preencher variáveis pelos dados do Formulário
document.getElementById('btnInscrever').addEventListener('click', function() {
    var email = document.getElementById('inputEmail4').value;
    var senhaoculta = "********";
    var senha = document.getElementById('inputPassword4').value;

    alert(
        "DADOS DO FORMULÁRIO"
        + "\n"
        + "\nO seu e-mail é: " + email 
        + "\nA sua senha é: " + senhaoculta
    );
})

// Obter o formulário e o div para exibir os dados
const formulario = document.getElementById('formulario');
const dadosColetadosDiv = document.getElementById('dados-coletados');

// Função para coletar e exibir os dados
formulario.addEventListener('submit', function (event) {
    // Impedir o comportamento padrão do formulário (não recarregar a página)
    event.preventDefault();
    
    // Obter os valores dos campos do formulário
    const email = document.getElementById('email').value;
    const  senha= document.getElementById('email').value;

    // Verificar se os campos não estão vazios
    if (email && senha) {
        // Salvar os dados no localStorage (armazenamento local)
        const formulario = {
            email: email,
            senha: senha,
        };

        localStorage.setItem('formulario', JSON.stringify(formulario));

        // Exibir os dados na página
        dadosColetadosDiv.innerHTML = `
            <p>email: ${email}</p>
            <p>senha: ${senha}</p>
        `;
    } else {
        dadosColetadosDiv.innerHTML = "<p>Por favor, preencha todos os campos.</p>";
    }
});
