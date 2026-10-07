import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración de __dirname para ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = 3000;

// Configuración de Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Carpeta pública para archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Configuración de WebSockets
io.on('connection', (socket) => {
    console.log(`Cliente conectado. ID: ${socket.id}`);

    // Escuchar mensaje del cliente
    socket.on('mensaje_cliente', (data) => {
        console.log(`Mensaje recibido: ${data}`);
        
        // Responder a todos los clientes conectados
        io.emit('mensaje_servidor', `El servidor recibió: "${data}"`);
    });

    socket.on('disconnect', () => {
        console.log(`Cliente desconectado. ID: ${socket.id}`);
    });
});

// Iniciar el servidor con el HTTP server (no con app.listen)
httpServer.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
