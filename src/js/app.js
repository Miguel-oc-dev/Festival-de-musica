document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {

    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `../src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)

        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {
    // Generar Modal
    const modal = document.createElement('DIV')
    modal.classList.addEventListener('modal')
    modal.onclick = cerrarModal

    // Agregar al HTML
    const body = document.querySelector('body')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')

    modal?.remove()
}