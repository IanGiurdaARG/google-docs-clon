# main.py
from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    await ws.send_text("conexion establecida")

    while True:
        msg = await ws.receive_text()
        print("Cliente envió:", msg)
