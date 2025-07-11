import { WebSocketServer, WebSocket } from "ws";

const clients = new Set<WebSocket>();

export const setupWebSocket = (server: any) => {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("New WebSocket connection");
    clients.add(ws);

    ws.on("message", (message) => {
      console.log('inMessage')
      const data = JSON.parse(message.toString());
      console.log("Received:", data);
      
      ws.send(JSON.stringify(data))
    });

    ws.on('close', () => {
      clients.delete(ws);
      console.log('Client off')
    })
  });
};
