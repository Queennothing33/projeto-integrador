const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuario) {
  alert("Você precisa fazer login primeiro!");
  window.location.href = "login.html";
}

$(document).ready(function () {

  if (usuario.tipo && usuario.tipo.toUpperCase() === "PROFESSOR") {
    $(".texto").first().text("Bem-vindo(a), Professor!");
  } else if (usuario.tipo && usuario.tipo.toUpperCase() === "ALUNO") {
    $(".texto").first().text("Bem-vindo(a), Aluno!");
  }

  $(".btn-card").on("click", function () {
    const genero = $(this).find("h5").text();
    window.location.href = `listagem.html?genero=${encodeURIComponent(genero)}`;
  });
});

function logout() {
  localStorage.removeItem("usuarioLogado");
  alert("Você saiu da sua conta.");
  window.location.href = "index.html";
}
