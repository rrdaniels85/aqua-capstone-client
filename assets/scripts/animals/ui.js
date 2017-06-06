'use strict'
const store = require('../store.js')
const api = require('./api.js')
const listAnimalsTemplate = require('../templates/list-tanks.handlebars')
const showOneAnimalTemplate = require('../templates/show-one-tank.handlebars')
const showAnimalsTitleTemplate = require('../templates/tank-title.handlebars')

const createAnimalSuccess = (data) => {
  $('#createtankmodal').modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully created an animal')
}

const createAnimalFailure = () => {
  $('.createerror').text('An error occurred. You must fill in all fields in order to create an animal.')
  console.log('create animal failed')
}

const getAnimalsSuccess = (data) => {
  console.log('list animals ran')
  // let showAnimalTitle = showAnimalsTitleTemplate()
  // $('#handlebarsone').html(showAnimalTitle)
  // const listAnimals = listAnimalsTemplate({ tanks: data.tanks })
  // $('#handlebarstwo').html(listAnimals)
}

const getAnimalsFailure = () => {
  console.log('get tanks failed')
}

const updateAnimalSuccess = (data) => {
  $('#updatetankmodal' + data).modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('update tank worked')
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
