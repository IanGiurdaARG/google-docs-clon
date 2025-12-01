import { useEffect } from "react";
import { getSocket } from "./websocket";

function App() {
  useEffect(() => {
    const socket = getSocket();

    socket.onopen = () => console.log("Conectado");
    socket.onmessage = (e) => console.log("Mensaje del servidor:", e.data);
    socket.onclose = () => console.log("Cerrado");

    return () => {};
  }, []);

 return (
    <div style={{ padding: "1rem" }}>
      <h1>Editor sincronizado (MVP)</h1>
      <textarea
        style={{ width: "100%", height: "300px" }}
        placeholder="Empieza a escribir..."
      />
    </div>
  );
}

export default App;
