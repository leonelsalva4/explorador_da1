Final Previo DA1 - Leonel Salva 

Tecnologias:
React Native + Expo 54,
JavaScript

Utilice la Rick and Morty API: https://rickandmortyapi.com/

Funciones y screens:

Dentro de src/

    En api/rickAndMorty.js se encuentran las funciones que hacen las HTTP requests a la API: obtenerPersonajes y obtenerPersonajePorId
    
    En context/FavoritesContext.js es el estado global de los favoritos: FavoritesProvider, alternarFavorito y esFavorito

    Despues screens/
        DetailScreen.js pantalla de detalle de un personaje
        HomeScreen.js pantalla principal, listado, busqueda, filtros(vivo,muerto,desconocido).
        FavoritesScreen.js pantalla con los personajes marcados como favoritos. 

La navegacion en el footer es entre Inicio(el listado de los pjs) y Favoritos.
