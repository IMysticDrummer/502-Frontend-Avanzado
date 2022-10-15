# Frontend PRO

This is an example of a typical request: A friend of us wants to publish a list of video games and the details. Kind of a blog.

Our inputs are 2 htmls, 1 json containing the DB and one index.js to fetch the data.

## Requirements

We are going to use [servor](https://www.npmjs.com/package/servor) and [json-server](https://www.npmjs.com/package/json-server)

Servor is used to watch files and json-server will automatically add a local DB to Mock our requests.

In some cases, we will be using Postman to add some custom data.

1. Install required devDependencies
```
npm i servor json-server
```

## Run the app

### Servor
To start up servor just run
```
npx servor src --reload
```

The app will be running at http://localhost:8080, for the scope of this project, we will ignore an automatic redirect to index.html

### Json-server
To start the local db running
```
npx json-server --watch ./games/games.json --port 3033
```

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
