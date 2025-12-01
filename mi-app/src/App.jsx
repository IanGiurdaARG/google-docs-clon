// App.jsx
import { useEffect, useState } from "react";
import { getSocket } from "./websocket";

export default function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const ws = getSocket();

    ws.onopen = () => console.log("Conectado");
    ws.onmessage = (e) => {
      console.log("Mensaje del servidor:", e.data);
      setText(e.data);
    };
    ws.onclose = () => console.log("Cerrado");

    return () => {
      // no cerramos el socket, lo mantiene la instancia singleton
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    getSocket().send(value);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Editor sincronizado</h1>
      <textarea
        value={text}
        onChange={handleChange}
        style={{ width: "100%", height: "300px" }}
      />
    </div>
  );
}
