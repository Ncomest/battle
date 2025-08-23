import { Server } from "socket.io";
import { registerRoomHandlers } from "./rooms";

export function setupSockets(io: Server) {
  io.on("connection", (socket) => {
    console.log("Client connected", socket.id);

    registerRoomHandlers(io, socket);

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
    });
  });
}
