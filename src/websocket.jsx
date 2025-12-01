// websocket.js
let socket = null;

export function getSocket() {
  if (!socket || socket.readyState === WebSocket.CLOSED) {
    socket = new WebSocket("ws://localhost:8000/ws");
  }
  return socket;
}
