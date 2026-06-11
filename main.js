document.addEventListener("DOMContentLoaded", function () {

  var tamanhoFonte = 16;

  var aumentarFonte = document.getElementById("aumentar-fonte");
  var diminuirFonte = document.getElementById("diminuir-fonte");
  var altoContraste = document.getElementById("alto-contraste");
  var btnAcessibilidade = document.getElementById("btn-acessibilidade");
  var painelAcessibilidade = document.getElementById("painel-acessibilidade");

  if (aumentarFonte) {
    aumentarFonte.addEventListener("click", function () {
      tamanhoFonte += 2;
      document.body.style.fontSize = tamanhoFonte + "px";
    });
  }

  if (diminuirFonte) {
    diminuirFonte.addEventListener("click", function () {
      if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
      }
    });
  }

  if (altoContraste) {
    altoContraste.addEventListener("click", function () {
      document.body.classList.toggle("alto-contraste");
    });
  }

  if (btnAcessibilidade && painelAcessibilidade) {
    btnAcessibilidade.addEventListener("click", function () {
      painelAcessibilidade.classList.toggle("mostrar");
    });
  }

});