'use strict'
const store = require('../store.js')
const events = require('./events.js')
const ui = require('./ui.js')
const listAnimalsTemplate = require('../templates/list-animals.handlebars')

const createAnimalSuccess = (data) => {
  console.log('create animal data is', data)
  $('#createanimalmodal').modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  store.tank = data.animal.tank.id
  console.log(store.tank)
  const events = require('./events.js')
  events.getAnimals()
}

const createAnimalFailure = () => {
  $('.createerror').text('An error occurred. You must fill in all fields in order to create an animal.')
  console.log('create animal failed')
}

const getAnimalsSuccess = (data) => {
  console.log('list animals ran')
  console.log('animal data list is', data)
  console.log('tank is', data.animals[0].tank.id)
  const listAnimals = listAnimalsTemplate({ animals: data.animals })
  $('#handlebarstwo').html(listAnimals)
  // const listAnimals = listAnimalsTemplate({ tanks: data.tanks })
  // $('#handlebarstwo').html(listAnimals)
}

const getAnimalsFailure = () => {
  console.log('get animals failed')
}

const updateAnimalSuccess = (data) => {
  // $('#updateanimalmodal' + data).modal('toggle')
  console.log('update animal data is', data)
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('update tank worked')
  store.tank = data.animal.tank.id
  console.log(store.tank)
  const events = require('./events.js')
  events.getAnimals()
}

const updateAnimalFailure = () => {
  $('.updateerror').text('An error occurred. You must complete all fields in order to update a tank.')
  console.log('update tank failed')
}

const deleteAnimalSuccess = (data) => {
  $('#removetankmodal' + data).modal('toggle')
  // $('#content').empty()
  // $('body').removeClass('modal-open')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully deleted that tank! :)')
}

const deleteAnimalFailure = () => {
  console.log('delete tank failed')
}

const getOneAnimalSuccess = (data) => {
  console.log('tank success for one')
  console.log(data)
  $('#handlebarsone').empty()
  $('#handlebarstwo').empty()
  const showOneAnimal = showOneAnimalTemplate({ tank: data.tank })
  $('#handlebarsone').html(showOneAnimal)
}

const getOneAnimalFailure = () => {
  console.log('get tank failed')
}

module.exports = {
  createAnimalSuccess,
  createAnimalFailure,
  getAnimalsSuccess,
  getAnimalsFailure,
  updateAnimalSuccess,
  updateAnimalFailure,
  deleteAnimalSuccess,
  deleteAnimalFailure,
  getOneAnimalSuccess,
  getOneAnimalFailure
}
