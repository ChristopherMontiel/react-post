# React POST

Este proyecto consiste en una pequeña aplicación de REACT con Redux, que maneje Posteos. Los requerimientos se definen a continuación:

## Requerimientos:

## Frontend (REACT con REDUX):
[Repositorio del Frontend](https://github.com/ChristopherMontiel/react-post).  
Los Posts deben tener:  
Nombre  
Descrpición  
Buenas prácticas:  
JSON camel-case  
JS camel-case  
Ruby en snake case  
Funcionalidades aplicación web hecha con React y Redux  
Insertar posts  
Eliminar posts  
Listar posts  
Filtrar posts por nombre localmente  
## Estructura:  
Formulario  
Filtro  
Lista  

## Backend (API JSON) en Node.js y Express:
[Repositorio del Backend](https://github.com/ChristopherMontiel/express-backend-post).  
Crear posts: Deberá retornar el post creado
Eliminar posts: Deberá retornar el post eliminado
Obtener lista de posts: Deberá retornar todos los posts
BD en postgreSQL

Solo se debe llamar al endpoint que entrega la lista completa de posts una sola vez por cada vez que se cargue la vista.

## Información del Proyecto:

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).  
Version de react: 18.2.0  
Configuración para conección a la API: ./src/services/useApiPost.js  
Para ejecutar el proyecto se debe correr el comando `npm run start`