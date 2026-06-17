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