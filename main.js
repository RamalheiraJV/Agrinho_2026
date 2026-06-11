
  let tamanhoFonte = 16;

  document.getElementById("aumentar-fonte").addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  });

  document.getElementById("diminuir-fonte").addEventListener("click", () => {
    if (tamanhoFonte > 10) {
      tamanhoFonte -= 2;
      document.body.style.fontSize = tamanhoFonte + "px";
    }
  });

  document.getElementById("alto-contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });

  let tamanhoFonte = 16;

  document.getElementById("aumentar-fonte").addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  });

  document.getElementById("diminuir-fonte").addEventListener("click", () => {
    if (tamanhoFonte > 10) {
      tamanhoFonte -= 2;
      document.body.style.fontSize = tamanhoFonte + "px";
    }
  });

  document.getElementById("alto-contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });

  document.getElementById("btn-acessibilidade").addEventListener("click", () => {
    document.getElementById("painel-acessibilidade")
      .classList.toggle("mostrar");
  });