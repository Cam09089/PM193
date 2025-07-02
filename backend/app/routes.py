from fastapi import APIRouter #sistema de rutas de FastAPI
from data import nombres #del data.py importamos la variable nombres

router = APIRouter() #creamos un objeto para poder definir las rutas
@router.get("/nombres") #creamos un endpoint GET
def get_nombres(): #esta funcion se ejecutara cuando se haga una peticion GET a /nombres
    return nombres #nos regresara la lista de nombres

#sirve como buena practica para seccionar bien las rutas que tenemoos
#y asi no amontonar todo en el main
