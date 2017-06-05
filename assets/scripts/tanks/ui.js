'use strict'
const store = require('../store.js')
const api = require('./api.js')

const createTankSuccess = (data) => {
  $('#createtankmodal').modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully created a tank')
}

const createTankFailure = () => {
  $('.createerror').text('An error occurred. You must fill in all fields in order to create a new item.')
  console.log('create tank failed')
}

module.exports = {
  createTankSuccess,
  createTankFailure
}
