'use strict'
const store = require('../store.js')
const api = require('./api.js')
const listTanksTemplate = require('../templates/list-tanks.handlebars')

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

const getTanksSuccess = (data) => {
  console.log('list tanks ran before template')
  const listTanks = listTanksTemplate({ tanks: data.tanks })
  $('#handlebarstwo').append(listTanks)
}

const getTanksFailure = () => {
  console.log('get tanks failed')
}

const updateTankSuccess = (data) => {
  $('#updatetankmodal' + data).modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('update tank worked')
}

const updateTankFailure = () => {
  // $('.updateerror').text('An error occurred. You must fill in all fields in order to update an item.')
  console.log('update tank failed')
}

const deleteTankSuccess = (data) => {
  $('#removetankmodal' + data).modal('toggle')
  // $('#content').empty()
  // $('body').removeClass('modal-open')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully deleted that tank! :)')
}

const deleteTankFailure = () => {
  console.log('delete tank failed')
}

module.exports = {
  createTankSuccess,
  createTankFailure,
  getTanksSuccess,
  getTanksFailure,
  updateTankSuccess,
  updateTankFailure,
  deleteTankSuccess,
  deleteTankFailure
}
