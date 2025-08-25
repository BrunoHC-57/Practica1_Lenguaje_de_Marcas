function popup() {
    let respuesta = confirm("¿Aceptas las cookies?")
    if (respuesta) {
        alert("Cookies aceptadas :)")
    }else {
        alert("Cookies denegadas :(")
    }
}