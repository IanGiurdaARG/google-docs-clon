# backend/main.py
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Permitir que React pueda conectarse
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Estado global
text_state = ""
connections = []

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    global text_state  # declaramos text_stat al inicio de la función

    await ws.accept()
    connections.append(ws)

    # Enviar estado actual al cliente nuevo
    await ws.send_text(text_state)

    try:
        while True:
            data = await ws.receive_text()
            text_state = data
            # Reenviar a todos los clientes conectados
            for connection in connections:
                if connection != ws:
                    await connection.send_text(text_state)
    except:
        connections.remove(ws)
