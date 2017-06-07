'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateTank = function (event) {
  console.log('yo')
  // prevent screen from refreshing
  event.preventDefault()
  // assign form field inputs to variable data
  const data = getFormFields(this)
  api.createTank(data)
    .done(ui.createTankSuccess, getTanks)
    .catch(ui.createTankFailure)
}

const getTanks = function () {
  store.tank = null
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
  store.tank = tankId
    // pass goalID to the API Patch request for item
  api.updateTank(tankId, data)
      .then(ui.updateTankSuccess)
      .catch(ui.updateTankFailure)
}

const onDeleteTank = function () {
  // prevent screen from refreshing
  event.preventDefault()
  // assign data value to be equal to the data-id of the item user wants to remove
  const data = $(this).attr('data-id')
  store.tank = data
  // pass data in delete request to api to delete item associated with ID
  api.deleteTank(data)
    .then(ui.deleteTankSuccess)
    .catch(ui.deleteTankFailure)
    .done(getTanks)
}

const onShowOneTank = function (event) {
  // prevent screen from refreshing
  event.preventDefault()
  // assign data value to be equal to the data-id of the item user wants to remove
  const tankId = $(event.target).attr('data-id')
  // pass data in delete request to api to delete item associated with ID
  api.getOneTank(tankId)
    .done(ui.getOneTankSuccess)
    .catch(ui.getOneTankFailure)
}

const refreshOneTank = function () {
  const tankId = store.tank
  // pass data in delete request to api to delete item associated with ID
  api.getOneTank(tankId)
    .then(ui.refreshOneTankSuccess)
    .catch(ui.refreshOneTankFailure)
}

// const navGetTanks = function () {
//   api.getTanks()
//     .then(ui.navTanksSuccess)
//     .catch(ui.navTanksFailure)
// }

const tankHandlers = () => {
  // $('#mytanksnav').on('click', navGetTanks)
  $(document).on('submit', '#create-tank', onCreateTank)
  $(document).on('click', '.manage-tank', onShowOneTank)
  $(document).on('submit', '.remove-tank', onDeleteTank)
  $(document).on('submit', '.update-tank', onUpdateTank)
  $(document).on('click', '#show-all-tanks', getTanks)
  $(document).on('hidden.bs.modal', '.update-tank-modal', refreshOneTank)
}

module.exports = {
  tankHandlers,
  onCreateTank,
  getTanks,
  onUpdateTank,
  onShowOneTank,
  refreshOneTank
}
