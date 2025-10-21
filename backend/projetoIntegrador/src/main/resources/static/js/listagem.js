const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuario) {
  alert("Você precisa fazer login primeiro!");
  window.location.href = "login.html";
}

$(document).ready(async function () {

  const params = new URLSearchParams(window.location.search);
  const genero = params.get("genero");


  const titulo = $("h2");
  if (genero) {
    titulo.text(`Prática de ${genero}`);
  } else {
    titulo.text("Prática de Músicas");
  }

  try {

    const resp = await fetch("http://localhost:8080/api/musicas");
    if (!resp.ok) throw new Error("Erro ao buscar músicas");
    const musicas = await resp.json();


    const filtradas = genero
      ? musicas.filter(m => m.genero && m.genero.toLowerCase() === genero.toLowerCase())
      : musicas;


    const tabela = $("table tbody");
    if (filtradas.length > 0) {
      tabela.html(
        filtradas.map(m => `
          <tr>
            <td>${m.id}</td>
            <td>${m.titulo}</td>
            <td>${m.banda}</td>
            <td>${m.tom}</td>
            <td>${m.genero}</td>
            <td>${m.semestreIniciado}</td>
            <td><a href="${m.url}" target="_blank">Ver</a></td>
          </tr>
        `).join("")
      );
    } else {
      tabela.html(`
        <tr>
          <td colspan="7" class="text-center text-muted">
            Nenhuma música encontrada para ${genero || "este gênero"}.
            <br>
            <a href="gerenciarMusicas.html" class="btn btn-warning mt-2">Cadastrar nova música</a>
          </td>
        </tr>
      `);
    }


    $("#pesquisa").on("keyup", function () {
      const termo = $(this).val().toLowerCase();
      $("table tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(termo) > -1);
      });
    });
  } catch (err) {
    console.error(err);
    alert("Erro ao carregar músicas. Verifique o servidor.");
  }
});


function logout() {
  localStorage.removeItem("usuarioLogado");
  alert("Você saiu da sua conta.");
  window.location.href = "index.html";
}
