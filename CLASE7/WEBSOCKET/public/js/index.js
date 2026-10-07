// Inicializar la conexión de socket del lado del cliente
const socket = io();

const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');
const messagesList = document.getElementById('messages');

// Enviar evento al servidor al hacer clic
sendBtn.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim() !== "") {
        socket.emit('mensaje_cliente', message);
        chatInput.value = "";
    }
});

// Escuchar las respuestas globales del servidor
socket.on('mensaje_servidor', (data) => {
    const li = document.createElement('li');
    li.textContent = data;
    messagesList.appendChild(li);
});
