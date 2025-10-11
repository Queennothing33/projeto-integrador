const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuario) {
  alert("Você precisa fazer login primeiro!");
  window.location.href = "login.html";
} else if (usuario.tipo.toUpperCase() !== "PROFESSOR") {
  alert("Apenas professores podem acessar esta página!");
  window.location.href = "selecao.html";
}

$(document).ready(function () {

  $("form").on("submit", function (e) {
    e.preventDefault();

    let valido = true;
    $("input, select").each(function () {
      if ($(this).val().trim() === "") {
        $(this).addClass("is-invalid");
        valido = false;
      } else {
        $(this).removeClass("is-invalid");
      }
    });

    if (!valido) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const musica = {
      titulo: $("input[placeholder='Digite o título da música']").val().trim(),
      banda: $("input[placeholder='Digite a banda ou artista']").val().trim(),
      tom: $("input[placeholder='Ex: C, D#, F#m']").val().trim(),
      genero: $("select").val(),
      semestreIniciado: $("input[placeholder='Ex: 2025.2']").val().trim(),
      url: $("input[placeholder='https://exemplo.com']").val().trim()
    };

    $.ajax({
      url: "http://localhost:8080/api/musicas",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(musica),

      success: function () {
        alert("🎵 Música cadastrada com sucesso!");
        $("form").trigger("reset");
      },

      error: function (xhr) {
        console.error(xhr);
        alert("Erro ao cadastrar a música. Verifique o servidor.");
      }
    });
  });

  $(".btn-excluir").on("click", function () {
    const id = $("#idMusica").val().trim();

    if (!id) {
      alert("Informe o ID da música que deseja excluir.");
      return;
    }

    if (confirm(`Deseja realmente excluir a música de ID ${id}?`)) {
      $.ajax({
        url: `http://localhost:8080/api/musicas/${id}`,
        method: "DELETE",
        success: function () {
          alert("❌ Música excluída com sucesso!");
          $("form").trigger("reset");
        },
        error: function (xhr) {
          if (xhr.status === 404) {
            alert("Música não encontrada.");
          } else {
            alert("Erro ao excluir a música. Verifique o servidor.");
          }
        }
      });
    }
  });

  $(".btn-voltar").on("click", function () {
    window.location.href = "selecao.html";
  });
});

function logout() {
  localStorage.removeItem("usuarioLogado");
  alert("Você saiu da sua conta.");
  window.location.href = "index.html";
}
