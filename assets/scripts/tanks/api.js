'use strict'

const config = require('../config')
const store = require('../store')

const createTank = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/tanks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getTanks = () => {
  return $.ajax({
    url: config.apiOrigin + '/tanks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneTank = (tankId) => {
  return $.ajax({
    url: config.apiOrigin + '/tanks/' + tankId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteTank = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/tanks/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTank = (tankId, data) => {
  return $.ajax({
    url: config.apiOrigin + '/tanks/' + tankId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createTank,
  getTanks,
  getOneTank,
  deleteTank,
  updateTank
}
