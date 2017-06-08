'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateAnimal = function (event) {
  console.log('yo')
  // prevent screen from refreshing
  event.preventDefault()
  // assign form field inputs to variable data
  const data = getFormFields(this)
  // assign tank id
  const tankId = $(event.target).attr('data-id')
  console.log(data)
  console.log(tankId)
  api.createAnimal(tankId, data)
    .then(ui.createAnimalSuccess)
    .catch(ui.createAnimalFailure)
}

const getAnimals = function () {
  console.log('get animals tank id is', tankId)
  // assign tankId
  const tankId = store.tank
  // send request to API to get goals without an event trigger
  api.getAnimals(tankId)
    .then(ui.getAnimalsSuccess)
    .catch(ui.getAnimalsFailure)
}

const onUpdateAnimal = function (event) {
  // prevent screen from refreshing
  event.preventDefault()
  // assign data to be what user entered in form fields
  const data = getFormFields(this)
  // get id from DOM and assign to tankId
  const tankId = store.tank
  console.log('tankId is', tankId)
  // assign data-id of item to the variable animalId
  const animalId = $(event.target).attr('data-id')
  console.log('animal id is', animalId)
    // pass goalID to the API Patch request for item
  api.updateAnimal(tankId, animalId, data)
      .then(ui.updateAnimalSuccess)
      .catch(ui.updateAnimalFailure)
}

const onDeleteAnimal = function () {
  // prevent screen from refreshing
  event.preventDefault()
  // get id from DOM and assign to tankId
  const tankId = store.tank
  // const tankId = $(document).find('.tank').attr('data-id')
  console.log('tank id is', tankId)
  // assign tankId to the store
  // store.tank = tankId
  // assign data value to be equal to the data-id of the item user wants to remove
  const animalId = $(event.target).attr('data-id')
  // pass data in delete request to api to delete item associated with ID
  api.deleteAnimal(tankId, animalId)
    .done(ui.deleteAnimalSuccess)
    .catch(ui.deleteAnimalFailure)
}

const animalHandlers = () => {
  $(document).on('submit', '#create-animal', onCreateAnimal)
  $(document).on('submit', '.remove-animal', onDeleteAnimal)
  $(document).on('submit', '.update-animal', onUpdateAnimal)
  $(document).on('hidden.bs.modal', '.update-animal-modal', getAnimals)
}

module.exports = {
  animalHandlers,
  onCreateAnimal,
  getAnimals,
  onUpdateAnimal,
  onDeleteAnimal
}
