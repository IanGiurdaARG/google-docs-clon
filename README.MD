# Editor de Texto Sincronizado

Editor de texto en tiempo real que sincroniza cambios entre múltiples clientes usando WebSockets

## Requisitos

- Python 3.10+
- Node.js 18+ (o versión compatible con Vite/React)
- npm

## Backend (FastAPI)

1. Crear y activar un entorno virtual:

```bash
cd backend
sudo apt install python3.10-venv    # si no tenés el paquete venv
python3 -m venv venv
source venv/bin/activate
```

2. Instalar dependencias:
```bash
pip install -r requirements.txt
```

3. Levantar el servidor:
```bash
uvicorn main:app --reload
```

El backend correrá en http://127.0.0.1:8000

## Frontend (React)

1. Instalar dependencias:

```bash
cd ../mi-app
npm install
```

2. Levantar el frontend:
```bash
npm run dev
```

El frontend correrá en http://localhost:5173 (Vite por defecto).

## Uso

- Abrir dos (o más) pestañas del navegador con el frontend.
- Escribir en el campo de texto y notar cómo todos están sincronizados