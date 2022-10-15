'use strict';

// DONE: #4 Dar más información que una lista (imagen, nombre, primeros 100 caracteres de summary)
export function generateGameSnippet(game) {
  return `
  <div class="game-snippet">
    <a href="/detail.html?id=${game.id}">
      <div class="game-image-container">
        <img class="img-thumbnail" id="game-${game.id}" src="${game.image}" alt="${game.name}"/>
      </div>
      <h3 class="game-name">${game.name}</h3>
    </a>
  </div>
  `;
}

export function generateCommentSnippet(comment) {
  return `
  <div class="row">
  <div class="col col-2">
    <div class="image-container text-right">
      <img class="avatar rounded" src="${comment.user.image}" alt="${comment.user.name}" />
    </div>
  </div>
  <div class="col col-10">
    <div class="user-name-container">
      <h4 class="text-muted">${comment.user.name}</h4>
    </div>
    <div class="comment-body-container">
      ${comment.body}
    </div>
    <div class="date-container">
      Comment date: <b>${comment.commentDate}</b>
    </div>
  </div>
</div>
  `
}
