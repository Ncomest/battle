import http from "http";
import app from "./app";
import { Server } from "socket.io";
import { setupSockets } from "./sockets";

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

setupSockets(io);

server.listen(PORT, () => {
  console.log(`HTTP & WS is running on http://localhost:${PORT}`);
});
