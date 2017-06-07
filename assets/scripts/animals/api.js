'use strict'

const config = require('../config')
const store = require('../store')

const createAnimal = (tankId, data) => {
  return $.ajax({
    url: config.apiOrigin + '/tanks/' + tankId + '/animals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAnimals = (tankId) => {
  return $.ajax({
    url: config.apiOrigin + '/tanks/' + tankId + '/animals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAnimal = (tankId, animalId) => {
  return $.ajax({
    url: config.apiOrigin + '/tanks/' + tankId + '/animals/' + animalId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateAnimal = (tankId, animalId, data) => {
  return $.ajax({
    url: config.apiOrigin + '/tanks/' + tankId + '/animals/' + animalId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createAnimal,
  getAnimals,
  deleteAnimal,
  updateAnimal
}
