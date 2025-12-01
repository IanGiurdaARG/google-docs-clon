// App.jsx
import { useState, useEffect, useRef } from "react";

function App() {
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
