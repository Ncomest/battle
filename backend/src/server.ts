import http from 'http';
import app from './app';
import { setupWebSocket } from './sockets/ws';

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

setupWebSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});