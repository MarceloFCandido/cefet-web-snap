function configuraBalaozinho() {
    let balaozinho = document.getElementById('balaozinho')

    balaozinho.style.visibility = "hidden"
    balaozinho.appendChild(document.createElement('h2'))
    balaozinho.appendChild(document.createElement('p'))
}

Array.from(document.getElementsByClassName('marcacao')).forEach(element => {
    let balaozinho = document.getElementById('balaozinho')

    element.addEventListener('mouseover', function (e) {
        let marcacao = e.target
        let titulo = marcacao.dataset.titulo
        let conteudo = marcacao.dataset.conteudo
        let cor = marcacao.dataset.cor

        balaozinho.style.visibility = "visible"
        balaozinho.style.backgroundColor = cor

        let [h2, p] = Array.from(balaozinho.children)
        h2.innerHTML = titulo
        p.innerHTML = conteudo
    })
})

Array.from(document.getElementsByClassName('marcacao')).forEach(element => {
    let balaozinho = document.getElementById('balaozinho')

    element.addEventListener('mouseleave', function (e) {
        balaozinho.style.visibility = "hidden"
    })
})

Array.from(document.getElementsByClassName('marcacao')).forEach(element => {
    let balaozinho = document.getElementById('balaozinho')

    element.addEventListener('mousemove', function (e) {
        balaozinho.style.top = `${e.pageY}px`
        balaozinho.style.left = `${e.pageX}px`
    })
})

configuraBalaozinho()