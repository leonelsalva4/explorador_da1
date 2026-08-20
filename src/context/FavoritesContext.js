import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function alternarFavorito(personaje) {
    const existe = favoritos.find((c) => c.id === personaje.id);

    if (existe) {
      setFavoritos(favoritos.filter((c) => c.id !== personaje.id));
    } else {
      setFavoritos([...favoritos, personaje]);
    }
  }

  function esFavorito(id) {
    return favoritos.find((c) => c.id === id) != null;
  }

  return (
    <FavoritesContext.Provider value={{ favoritos, alternarFavorito, esFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}
