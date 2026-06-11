document.addEventListener("DOMContentLoaded", () => {
  let tamanhoFonte = 16;

  // Aumentar fonte
  document.getElementById("aumentar-fonte").addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  });

  // Diminuir fonte
  document.getElementById("diminuir-fonte").addEventListener("click", () => {
    if (tamanhoFonte > 10) {
      tamanhoFonte -= 2;
      document.body.style.fontSize = tamanhoFonte + "px";
    }
  });

  // Alto contraste
  document.getElementById("alto-contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });

  // Abrir/fechar painel de acessibilidade
  document.getElementById("btn-acessibilidade").addEventListener("click", () => {
    document.getElementById("painel-acessibilidade").classList.toggle("mostrar");
  });
});