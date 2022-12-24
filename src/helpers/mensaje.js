function mostrarMensaje(mensaje, error) {
    const formulario = document.querySelector('#formulario')
    const div = document.createElement('DIV')
    div.classList.add('text-white', 'py-3', 'px-5', 'mt-5', 'uppercase', 'text-center', 'font-bold')

    if (error === 'error') {
        div.classList.add('bg-red-800')
    } else {
        div.classList.add('bg-lime-600')
    }

    const mensajeDiv = document.createElement('P')
    mensajeDiv.textContent = mensaje
    
    div.appendChild(mensajeDiv)
    formulario.appendChild(div)

    setTimeout(() => {
        div.remove();
    }, 3000);
}

export {
    mostrarMensaje
}