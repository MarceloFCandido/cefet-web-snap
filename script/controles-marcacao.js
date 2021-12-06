document
    .getElementById("visibilidade-das-marcacoes")
    .addEventListener("change", function (e) {
        let marcacaoDiv = document.getElementsByClassName("marcacao")[0].parentElement;
        marcacaoDiv.classList.toggle('marcacoes-ocultas');
    })