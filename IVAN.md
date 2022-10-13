# UTILIDADES
## Webpack
Webpack comprueba todas la dependencias de entrada del proyecto y devuelve unos archivos simples que evitan la utra-carga de dependencias en los navegadores.

Webpack es tremendamente configurable para que el proyecto de salida se ajuste a lo que necesitamos

### Alternativas
- Parcel --> Promete 0 configuración.


### Instalación
- ```npm i -D webpack webpack-cli```
- Colocar un script en package.json
  - ```"buid": "webpack"```

**Nota:** El punto de entrada por defecto de webpack es /src/index.js. Si dicho archivo no tiene un "lanzamiento" de la aplicación, webpack no va a hacer nada.  
Si queremos que webpack coja las dependencias correctas, hay que poner el punto de entrada donde hagamos realmente la llamada inicial.

### Configuración de webpack
- Crear un archivo ```webpack.config.js```
- Puntos de entrada:  
  - Crear un objeto module.exports, dentro una clave ```entry``` que es un objeto con las claves que queramos crear y los archivos fuente de los que debe bebe:
  ``` javascript
    module.exports={
    entry: {
      main: './src/index.js',
      detail: './src/detail.js'
      }
    }
  ```
  ### Webpack serve
  Servidor de webpack que nos permite servir a través de webpack sin necesidad de crear la carpeta ```dist```.  
  Es necesario instalar el webpack-dev-server:  
  ```npm i -D webpack-dev-server```  
  y configuramos el server en el webpack.config.js:
  ``` javascript
  module.exports={
    entry: {
      main: './src/index.js',
      detail: './src/detail.js'
    },

    devServer:{
      client: {
        overlay: true
      }
    }
  }
  ```
  lo llamamos con ```webpack serve --mode development```.  
  Esto generará "on the fly", en la carpeta "public" los archivos de funcionamiento de la web.

### Algunas notas importantes
- Nunca se mete el ```dist``` en los repositorios.