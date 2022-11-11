const socket = io.connect()

const addMessage = (e) =>{
    const text = document.querySelector('#texto').value
    const author =document.querySelector('#author').value
    socket.emit('new-message', {text, author})
    return false;
}

const render = (mensajes) => {
    const html = mensajes.map((elem, index) => {
        return (
            `<div>
                <strong>${elem.author}</strong>
                <em>${elem.text}</em>
            </div>`

        )
    }).join(" ");
    document.getElementById('menssages').innerHTML = html;
}

socket.on('mensajes', (data) =>{
    console.log( data)
    render(data)
})