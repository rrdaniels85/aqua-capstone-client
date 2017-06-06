'use strict'
const store = require('../store.js')
const api = require('./api.js')
const listTanksTemplate = require('../templates/list-tanks.handlebars')
const showOneTankTemplate = require('../templates/show-one-tank.handlebars')
const showTanksTitleTemplate = require('../templates/tank-title.handlebars')

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
  let showTankTitle = showTanksTitleTemplate()
  $('#handlebarsone').html(showTankTitle)
  const listTanks = listTanksTemplate({ tanks: data.tanks })
  $('#handlebarstwo').html(listTanks)
}

const getTanksFailure = () => {
  console.log('get tanks failed')
}

const updateTankSuccess = (data) => {
  console.log('update tank data is', data)
  $('#updatetankmodal' + data).modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('update tank worked')
}

const updateTankFailure = () => {
  $('.updateerror').text('An error occurred. You must complete all fields in order to update a tank.')
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

const getOneTankSuccess = (data) => {
  console.log('tank success for one')
  console.log(data)
  $('#handlebarsone').empty()
  $('#handlebarstwo').empty()
  const showOneTank = showOneTankTemplate({ tank: data.tank })
  $('#handlebarsone').html(showOneTank)
}

const getOneTankFailure = () => {
  console.log('get tank failed')
}

module.exports = {
  createTankSuccess,
  createTankFailure,
  getTanksSuccess,
  getTanksFailure,
  updateTankSuccess,
  updateTankFailure,
  deleteTankSuccess,
  deleteTankFailure,
  getOneTankSuccess,
  getOneTankFailure
}
