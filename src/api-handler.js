'use strict';

const apiEndpoint = 'http://localhost:3033'

export const getGames = async () => {
  const response = await fetch(`${apiEndpoint}/games`)
  return response.json()
}

export const getGameById = async (gameId) => {
  const response = await fetch(`${apiEndpoint}/games/${gameId}`)
  return response.json()
}

export const getCommentsOfGame = async (gameId) => {
  const response = await fetch(`${apiEndpoint}/games/${gameId}/comments?_expand=user`)
  return response.json()
}