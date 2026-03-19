import ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizaDadosBack();

  const formularioPensamento = document.getElementById("pensamento-form");

  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
});

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    await api.enviaProBack({ conteudo, autoria });
    ui.renderizaDadosBack();
  } catch {
    alert("Erro ao salvar pensamento");
  }
}
