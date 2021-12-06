document
    .getElementById("visibilidade-das-marcacoes")
    .addEventListener("change", function (e) {
        let marcacaoDiv = document.getElementsByClassName("marcacao")[0].parentElement
        marcacaoDiv.classList.toggle('marcacoes-ocultas')
    })

Array.from(document.getElementsByClassName('marcacao')).forEach((element) => {
    element.addEventListener('click', function (e) {
        let currentMarcacao = document.getElementsByClassName('selecionada')[0]
        currentMarcacao.classList.remove('selecionada')
        element.classList.add('selecionada')

        document.getElementById("x-da-marcacao").value = parseFloat(element.style.left)
        document.getElementById("y-da-marcacao").value = parseFloat(element.style.top)
        document.getElementById("largura-da-marcacao").value = parseFloat(element.style.width)
        document.getElementById("altura-da-marcacao").value = parseFloat(element.style.height)

        document.getElementById("titulo-da-marcacao").value = element.dataset.titulo
        document.getElementById("conteudo-da-marcacao").value = element.dataset.conteudo
        document.getElementById("cor-da-marcacao").value = element.dataset.cor

        let formato = element.dataset.formato
        let [retangular, oval] = document.getElementsByName("formato-da-marcacao")
        if (formato === "formato-retangular") {
            retangular.checked = true
        } else if (formato === "formato-oval") {
            oval.checked = true
        }
    })
})