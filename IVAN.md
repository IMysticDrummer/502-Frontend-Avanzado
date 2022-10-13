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

  ### Loaders
  Son manejadores que nos permiten realizar preprocesados directamente desde webpack.  
  Por ejemplo, las transformaciones de archivos sass-scss, o typescript... etc.  

  https://webpack.js.org/concepts/loaders/

  https://webpack.js.org/awesome-webpack/

  Webpack no provee los loaders, que debemos instalar con npm.  
  Ejemplo de instalación de loaders para transformar sass-scss:  
  ```
    npm i -D style-loader css-loader sass-loader
  ```
  La configuración, añadida en el webpack.config.js es:
  ``` javascript
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]    
            }
        ]
    }
  ```

### Babel
Babel transpila los archivos javascript a archivos javascript de versiones antiguas de ECMA para asegurar la compatibiliad en navegadores antiguos o no actualizados.

```npm install --save-dev @babel/core @babel/cli```

```npm install @babel/preset-env --save-dev```

#### Configuración de babel.
Se hace con presets.
Se crea un archivo babel.config.json, y se introduce el siguiente código:
```json
  {
    "presets": ["@babel/preset-env"]
  }
```
## Plugins
Configuraciones que nos generan en la distribución los archivos necesarios separados.
Importantes el html-webpack-plugin:
```npm i --save-dev html-webpack-plugin```

y el min-css-extract-plugin, que extrae los css de los archivos js generados por webpack.
```npm i --save-dev mini-css-extract-plugin```

## Webpack merge
Permite separar en diferentes archivos la configuración común, la específica de desarrollo y la específica de producción.

### Algunas notas importantes
- Nunca se mete el ```dist``` en los repositorios.