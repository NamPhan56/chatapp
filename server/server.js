const express = require('express');
const app = express();

const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);

const cors = require("cors");
app.use(cors());

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3001',
        methods: ["GET", "POST"],
        // allowedHeaders: [""],
        // credentials: true
    }
});


io.on('connection', (socket) => {
    console.log(`a user connected: ${socket.id}`);
    socket.on('send_message', (data) => {
        socket.broadcast.emit("receive_message", data)
    },
    socket.on('disconnect', () => {
        console.log('user disconnected');
    }));
  });
  
const PORT = process.env.POR || 5000

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});