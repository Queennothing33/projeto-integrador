const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
if (usuarioLogado) {
  window.location.href = "selecao.html";
}

$(document).ready(function () {

  $("#formLogin").on("submit", function (e) {
    e.preventDefault();

    const login = $("#email").val().trim();
    const senha = $("#senha").val().trim();

    if (login === "" || senha === "") {
      alert("Por favor, preencha o login e a senha.");
      return;
    }

    $.ajax({
      url: "http://localhost:8080/api/usuarios/login",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ login: login, senha: senha }),

      success: function (usuario) {

        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

        let mensagem = "Bem-vindo(a)!";
        if (usuario.tipo && usuario.tipo.toUpperCase() === "PROFESSOR") {
          mensagem = "Bem-vindo(a), professor!";
        } else if (usuario.tipo && usuario.tipo.toUpperCase() === "ALUNO") {
          mensagem = "Bem-vindo(a), aluno!";
        }

        alert(mensagem);

        window.location.href = "selecao.html";
      },

      error: function (xhr) {
        if (xhr.status === 401) {
          alert("Usuário ou senha incorretos!");
        } else {
          alert("Erro ao conectar com o servidor. Tente novamente.");
        }
      }
    });
  });

  $("#linkEsqueceuSenha").on("click", function (e) {
    e.preventDefault();
    alert("Entre em contato com a secretaria para redefinir sua senha.");
  });
});

function logout() {
  localStorage.removeItem("usuarioLogado");
  alert("Você saiu da sua conta.");
  window.location.href = "index.html";
}
