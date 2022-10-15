//DONE: #1 implementar api (getGames(), getGameById()). Mirar en la documentación de json-server
// DONE: #7 Separar api de index.js
import {getGames} from "./utils/api-handler.js";
// DONE: #8 Separar funciones auxiliares `(generate*)` de renders en index.js
import { generateGameSnippet } from "./utils/functions.js";
// DONE: #9 Separar funciones de index y de detail

import './styles/styles.scss';

// <!-- DONE: #3 dar un poco de estética, usamos Bootstrap? -->
// <!-- DONE: #6 añadir nuestro estilo -->
import 'bootstrap/scss/bootstrap.scss';


export async function drawListGames() {
  let games = await getGames();
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'games-list')
  newDiv.setAttribute('class', 'row')

  document.getElementById('games')
    .appendChild(newDiv)

  var i = 0;
  for (i; i < games.length; i++) {
    let snippetContainer = document.createElement('div');
    snippetContainer.setAttribute('class', 'col-6 col-sm-3');
    document.getElementById('games-list')
      .appendChild(snippetContainer).innerHTML = generateGameSnippet(games[i]);
  }
}


(async () => {
  await drawListGames();
})();