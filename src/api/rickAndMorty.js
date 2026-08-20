const BASE_URL = 'https://rickandmortyapi.com/api';
const MENSAJE_ERROR = 'No se pudo obtener información de la API';

export async function obtenerPersonajes(nombre, estado) {
  let url = BASE_URL + '/character?name=' + nombre;

  if (estado) {
    url += '&status=' + estado;
  }

  let respuesta;
  try {
    respuesta = await fetch(url);
  } catch (e) {
    throw new Error(MENSAJE_ERROR);
  }

  if (respuesta.status === 404) {
    return [];
  }

  if (!respuesta.ok) {
    throw new Error(MENSAJE_ERROR);
  }

  const datos = await respuesta.json();
  return datos.results;
}

export async function obtenerPersonajePorId(id) {
  let respuesta;
  try {
    respuesta = await fetch(BASE_URL + '/character/' + id);
  } catch (e) {
    throw new Error(MENSAJE_ERROR);
  }

  if (!respuesta.ok) {
    throw new Error(MENSAJE_ERROR);
  }

  return respuesta.json();
}
