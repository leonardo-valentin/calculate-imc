const Modal = {
    buttonClose: document.querySelector('.close'),
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    },

}


Modal.buttonClose.addEventListener('click', closeElement)

window.addEventListener('keydown' , handleKeydown)

Modal.wrapper.addEventListener('click', closeClickingOutside)

function handleKeydown(e) {
    if (e.key === 'Escape') {
        closeElement()
    }
}

function closeElement() {
    Modal.close()
}

// explicação para mim mesmo -> Ele vai fechar pois quando clicar no modal-wrapper (que é a pagina toda, ele fecha), e se vc clicar no modal-card, ele não vai fechar

function closeClickingOutside(e) {
    if (e.target === this) {
        Modal.close()
    }
}

export {Modal}