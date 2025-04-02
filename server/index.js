import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

app.use(cors());


const io = new Server(server, {
    cors: { origin: "*" }
});

io.on("connection", (socket) => {
    console.log("Un usuario se ha conectado");

    socket.on("send_message", (msg) => {
        io.emit("receive_message", msg); 
    });

    socket.on("disconnect", () => {
        console.log("Un usuario se ha desconectado");
    });
});


const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
