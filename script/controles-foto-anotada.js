function readImage(img, file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        img.src = event.target.result;
    });

    reader.readAsDataURL(file);
}

document
    .getElementById("filtro-da-foto")
    .addEventListener("change", function (e) {
        let children = Array.from(document.getElementsByClassName("foto-anotada")[0].children)
        let rule = children.filter((element) => element.tagName.toLowerCase() === "img")[0]

        rule.style.filter = e.target.value
    })

document
    .getElementById("imagem")
    .addEventListener("change", function (e) {
        let children = Array.from(document.getElementsByClassName("foto-anotada")[0].children)
        let image = children.filter((element) => element.tagName.toLowerCase() === "img")[0]

        readImage(image, e.target.files[0])
    })