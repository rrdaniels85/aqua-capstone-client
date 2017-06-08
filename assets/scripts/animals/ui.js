'use strict'
const store = require('../store.js')
const events = require('./events.js')
const listAnimalsTemplate = require('../templates/list-animals-table.handlebars')
const noAnimalsTemplate = require('../templates/no-animals.handlebars')

const createAnimalSuccess = (data) => {
  // assign tank id to the store
  store.tank = data.animal.tank.id
  console.log('create animal data is', data)
  // toggle modal
  $('#createanimalmodal').modal('toggle')
  // remove remaining bootstrap modal classes
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log(store.tank)
  // require animal events file
  const events = require('./events.js')
  // fun getAnimals function to refresh list of tank's animals on ui
  events.getAnimals()
}

const createAnimalFailure = () => {
  // notify user of create animal failure
  $('.createerror').text('An error occurred. You must fill in all fields in order to create an animal.')
}

const getAnimalsSuccess = (data) => {
  // if no animals - display message to user with handlebars templates
  if (data.animals.length === 0) {
    const noAnimals = noAnimalsTemplate()
    $('#handlebarstwo').html(noAnimals)
    console.log('you have no animals')
    console.log('animal data list is', data)
  } else {
    // if animals - sort from highest to lowest id
    data.animals.sort(function (a, b) {
      return parseFloat(b.id) - parseFloat(a.id)
    })
  // insert data into handlebars template
    const listAnimals = listAnimalsTemplate({ animals: data.animals })
  // render handlebars template in div
    $('#handlebarstwo').html(listAnimals)
  }
}

const getAnimalsFailure = () => {
  console.log('get animals failed')
}

const updateAnimalSuccess = (data) => {
  // toggle update modal
  $('#updateanimalmodal' + store.tank).modal('toggle')
  // remove remaining bootstrap modal classes
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('update tank worked')
  // require animal events file
  const events = require('./events.js')
  // run getAnimals function to refresh list of tank's animals
  events.getAnimals()
}

const updateAnimalFailure = () => {
  // notify user of update failure
  $('.updateerror').text('An error occurred. You must complete all fields in order to update an animal.')
  console.log('update animal failed')
}

const deleteAnimalSuccess = (data) => {
  console.log('delete data', data)
  // toggle delete modal
  $('#removeanimalmodal').modal('toggle')
  // close out bootstrap modal classes
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully deleted that tank! :)')
  // require animal events file
  const events = require('./events.js')
  // run getAnimals() function to refresh animals for tank
  events.getAnimals()
}

const deleteAnimalFailure = () => {
  console.log('delete tank failed')
}

module.exports = {
  createAnimalSuccess,
  createAnimalFailure,
  getAnimalsSuccess,
  getAnimalsFailure,
  updateAnimalSuccess,
  updateAnimalFailure,
  deleteAnimalSuccess,
  deleteAnimalFailure
}
