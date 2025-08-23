import { Server, Socket } from "socket.io";

const rooms = new Map();

export function registerRoomHandlers(io: Server, socket: Socket) {
  socket.on("createRoom", (data) => {
    console.log("Create room", data);
    const roomId = Math.random().toString(36).substr(2, 9);

    rooms.set(roomId, {
      roomName: data.roomName,
      password: data.password || null,
      players: [socket.id],
    });

    socket.join(roomId);
    socket.emit("roomCreated", roomId);

    io.emit(
      "roomsList",
      Array.from(rooms.entries()).map(([id, room]) => ({
        id,
        roomName: room.roomName,
        playersCount: room.players.length,
      })),
    );
  });

  socket.on("get-rooms", () => {
    socket.emit(
      "roomsList",
      Array.from(rooms.entries()).map(([id, room]) => ({
        id,
        roomName: room.roomName,
        playersCount: room.players.length,
      })),
    );
  });

  socket.on("connectToRoom", (roomId: any) => {
    console.log("roomId", roomId);

    // 1. Проверяем, существует ли комната
    if (!rooms.has(roomId)) {
      socket.emit("errorMessage", "Room not found");
      return;
    }

    const room = rooms.get(roomId);

    // 2. Проверяем, не в комнате ли он уже
    if (room.players.includes(socket.id)) {
      socket.emit("errorMessage", "Вы уже в этой комнате");
      return;
    }

    // 3. Добавляем игрока в список
    room.players.push(socket.id);
    rooms.set(roomId, room);

    // 4. Присоединяем сокет к комнате Socket.IO
    socket.join(roomId);

    // 5. Оповещаем всех в этой комнате
    io.to(roomId).emit("playerJoined", {
      players: room.players,
      roomId,
    });

    console.log(`Игрок ${socket.id} подключился к комнате ${roomId}`);
  });
  // Игрок отключился — убираем его из комнат
  socket.on("disconnect", () => {
    rooms.forEach((room, id) => {
      room.players = room.players.filter((p: any) => p !== socket.id);
      if (room.players.length === 0) {
        rooms.delete(id); // комната пустая → удаляем
      }
    });

    // Отправляем новый список всем
    io.emit(
      "roomsList",
      Array.from(rooms.entries()).map(([id, room]) => ({
        id,
        roomName: room.roomName,
        playersCount: room.players.length,
      })),
    );
  });
}
