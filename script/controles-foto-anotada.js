document
    .getElementById("filtro-da-foto")
    .addEventListener("change", function (e) {
        let children = Array.from(document.getElementsByClassName("foto-anotada")[0].children)
        let rule = children.filter((element) => element.tagName.toLowerCase() === "img")[0]

        rule.style.filter = e.target.value
    })