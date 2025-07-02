from fastapi import FastAPI #importar la clase FastAPI
from fastapi.middleware.cors import CORSMiddleware #importar el middleware de CORS
from routes import router #importar las rutas definidas en routes.py

app = FastAPI() #crear una instancia de la clase FastAPI

#creamos el filtro de seguridad de 
app.add_middleware(
    CORSMiddleware, #agregar el middleware de CORS
    allow_origins=["*"], #permitir todas las origines
    allow_credentials=True, #permitir credenciales
    allow_methods=["*"], #permitir todos los metodos HTTP
    allow_headers=["*"], #permitir todos los headers
)

app.include_router(router) #incluir las rutas definidas en routes.py
