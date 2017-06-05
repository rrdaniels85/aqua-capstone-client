'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateTank = function (event) {
  console.log('yo')
  // prevent screen from refreshing
  event.preventDefault()
  // assign form field inputs to variable data
  const data = getFormFields(this)
  api.createTank(data)
    .done(ui.createTankSuccess)
    .catch(ui.createTankFailure)
}

const getTanks = function () {
  // send request to API to get goals without an event trigger
  api.getTanks()
    .then(ui.getTanksSuccess)
    .catch(ui.getTanksFailure)
}

const onUpdateTank = function (event) {
  // prevent screen from refreshing
  event.preventDefault()
  // assign data to be what user entered in form fields
  const data = getFormFields(this)
  // assign data-id of item to the variable tankId
  const tankId = $(this).attr('data-id')
    // pass goalID to the API Patch request for item
  api.updateTank(tankId, data)
      .done(ui.updateTankSuccess)
      .catch(ui.updateTankFailure)
}

const onDeleteTank = function () {
  // prevent screen from refreshing
  event.preventDefault()
  // assign data value to be equal to the data-id of the item user wants to remove
  let data = $(this).attr('data-id')
  // pass data in delete request to api to delete item associated with ID
  api.deleteTank(data)
    .done(ui.deleteTankSuccess)
    .catch(ui.deleteTankFailure)
}

const onShowOneTank = function () {
  // prevent screen from refreshing
  event.preventDefault()
  // assign data value to be equal to the data-id of the item user wants to remove
  const tankId = $(this).attr('data-id')
  // pass data in delete request to api to delete item associated with ID
  api.getOneTank(tankId)
    .done(ui.getOneTankSuccess)
    .catch(ui.getOneTankFailure)
}

const tankHandlers = () => {
  $(document).on('submit', '#create-tank', onCreateTank)
  $(document).on('click', '.manage-tank', onShowOneTank)
  // $('.get-goals').on('click', onGetGoals)
  $(document).on('submit', '.remove-tank', onDeleteTank)
  $(document).on('submit', '.update-tank', onUpdateTank)
}

module.exports = {
  tankHandlers,
  onCreateTank,
  getTanks,
  onUpdateTank,
  onShowOneTank
}
