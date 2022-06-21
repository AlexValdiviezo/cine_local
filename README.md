# Cine Local
## Desafío de codigo de React

#

Para esta aplicación se implementó la API de [themoviedb](https://developers.themoviedb.org○).

Se uso React.js en su ultima version al 21/06/2022 `version 18.2.0`

#
# Hooks utilizados

### `useState` para la implementación de estados tanto de los parametros de busqueda como la activación de eventos como el `modalOpen`.

### `useEffect` para la implementación de busqueda en tiempo real sobre las películas.

#
# Librerías adicionales

### `reactStrap` y `bootstrap` para el diseño y control simple del modal view.

#
# Funcion General del programa
- El componente `App` general se encarga de mostrar todo el contenido de la aplicación web. A su vez también se encarga de recorrer el vector de peliculas previamente extraído con el helper `getMovies`.
- El componente `InputMovie` se encarga de la lógica e implementación de busqueda en la aplicación web.
- El helper `getMovies` se encarga de obtener a través de una promesa con el metodo `fetch` los datos de la `API`
- El componente `FormStars` se encarga de aplicar el filtro de popularidad a la aplicación web.
- El componente `ModalMovie` se encarga de mostrar detalladamente una pelicula si esta es seleccionada.

#
# Lista de comandos

- ```npm run start``` -> Ejecuta la aplicación como desarrollador.
- ```npm run build``` -> Ejecuta el building de la aplicación para ser luego desplegada en algun servidor.