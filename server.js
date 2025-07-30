const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "Public")));

io.on("connection", (socket) => {
  let currentUser = ""; 

  console.log("✅ A user connected");

  socket.on("new user", (username) => {
    currentUser = username;
    socket.broadcast.emit("user joined", username);
  });

  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  });

  socket.on("typing", (user) => {
    socket.broadcast.emit("typing", user);
  });

  socket.on("disconnect", () => {
    if (currentUser) {
      socket.broadcast.emit("user left", currentUser);
    }
    console.log("❌ A user disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
