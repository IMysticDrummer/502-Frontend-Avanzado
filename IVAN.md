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



# Pasos seguidos durante la clase final
1. Instalar webpack  
  a. Pasar los archivos HTML a public  
  b. Configurar webpack para que lea los archivos .js  
2. Instalar el webpack-dev-serve, para poder servir directamente desde ram  
3. Instalar los loaders  
    - instalar las dependencias necesarias para que webpack reconozca y traduzca sass/scss, en modo desarrollo  
        - esto causará que en los archivos distribuidos, se inyecte el css directamente en el dom.  
    - instalar las dependencias de babel, y configurarlas, para que sólo transpile los archivos js fuera de nodemodules  
    - instalar jquery, para poder importarlo y utilizarlo en nuestros js.  
    - instalar e importar bootstrap, para que funcione directamente desde nuestros js.  
    **Nota:** es importante entender que todo esto hay que importarlo en los js que utilicemos, para que webpack lea las dependencias.  
    **Nota 2:** cuando instalamos bootstrap, lo que hemos importado es el archivo bootstrap.scss (soportado porque anteriormente hemos
  instalado las dependencias que leen sass/scss). Comprobar en node_modules la dirección de dicho archivo, para que funcione en condiciones.  
4. Instalar los plugins para dejar el código límpio y separado en nuestra distribución.  
    - instalar HtmlWebpackPlugin, para que nos copie los archivos html a nuestro directorio de distribución.  
        - Cuando instalamos HtmlWebpackPlugin, en la configuración, usando la clave *chunk*, le decimos las dependencias .js que tiene
        dicho archivo html... por lo que no nos hace falta la llamada al script en el html. **Webpack se encargará de meter en el archivo 
        del directorio de distribución, las dependencias de dicho archivo.**  
    - instalar *MiniCssExtractPlugin*
        - En el archivo de configuración, en la parte de configuración para traducir sass/scss, hay que poner una instancia de este
        plugin en lugar del *style-loader* que habríamos configurado en la parte anterior de loaders.  
        - En la configuración del plugin de *minicssextractplugin*, se puede colocar la clave *chunkFilename* con la siguiente 
        configuración:  
            `chunkFilename: [id].[contenhash].css`  
          Esto causará que el plugin divida el archivo css de salida, que normalmente será bastante grande, en archivos más pequeños que,
          a su vez, inyectará como dependencias el html correspondiente.  
          Esto puede ayudar a la velocidad de carga de la página.  
          Para que esto termine de funcionar, hay que crear una clave nueva en el module.exports del archivo de configuración de 
          webpack, con el siguiente código:  
          ```javascript
            optimization: {
              splitChunks:{
              chunks: 'all'
              }
            }
          ```
          **¿dónde está el límite de dividir archivos?**... para eso están las métricas y comprobar qué resulta más eficaz para la carga 
          de la página.  
    - instalar el *webpack-merge*. Este paquete permitirá tener archivos de configuración de webpack separados para la parte desarrollo 
    y la parte producción.  
    Cuando tengamos realizada la configuración común y las de
    desarrollo y producción, hay que cambiar la configuración
    del package.json, para que los scripts de arranque y 
    desarrollo se ejecuten correctamente.  
    El script de arranque pasará de ser:  
    `"build": "webpack --mode production"` a  
    `"build": "webpack --config webpack.prod.js`  
    El script de desarrollo y el server pasa de:  
    `"serve": "webpack serve --mode development"` a  
    `"serve": "webpack serve --config webpack.dev.js"`

        


# Otras notas interesantes
## Webpack
1. Cuando configuras los *entry* del archivo de configuración, las claves son los nombres de los archivos .js que webpack generará como salida. Estas claves pueden indicar rutas... por lo que podemos organizar sin problemas nuestros archivos en distribución. Por ejemplo:  
```javascript
entry: {
  'js/main': './src/index.js',
  'js/detail': './src/detail.js'
}
```  
  - También puedes configurar el directorio por defecto para los entry points utilizando antes la clave *content*. Por ejemplo: 
    `context: __dirname+'/src'`

2. La clave output en la configuración de webpack.
    - Para aseguar que cualquier cambio en nuestra distribución (dist) será cargado por los navegadores, evitando el cacheo, se suele
    configurar la salida de archivos para que en su nombre contenga un hash. Como cambiará el nombre del archivo, esto asegurará que
    cualquier cambio, cambiará el nombre, y por tanto los navegadores cargarán la página de servidor, en vez de utilizar la que tienen
    cacheada.  
    Para ello en el archivo de configuración, clave output, la configuraremos:  
    ```javascript
    output:{
      filename: '[name].[contenthash].js',
      clean: true
    }
    ```
    La clave *clean* dentro del cacheado, realizará una limpieza del directorio dist cada vez que hagamos una construcción webpack, para
    evitar tener que hacerlo nosotros a mano.
    El uso de *[contenthas]* también se puede utilizar en la clave *filename* (nombre del archivo de salida que queremos que se genere), 
    para obtener el mismo efecto que hemos comentado, y que cualquier cambio que hayamos hecho y pasado por webpack, sea cargado por los
    navegadores, evitando el cacheo.



# Plugins interesantes de webpack:
**Nota:** Estos plugins se suelen instalar en desarrollo.
**Nota 2:** Los plugins se comportan como objetos, por lo que en el archivo de configuración de webpack, hay que importarlos como tales
para luego utilizarlos.

1- CopyWebpackPlugin
  - copia los archivos o directorios al directorio de construcción 
2- HtmlWebpackPlugin
  - Permitirá copiar los archivos html al directorio de distribución
3- MiniCssExtracPlugin
  - crea un archivo CSS por cada JS que necesite CSS.
