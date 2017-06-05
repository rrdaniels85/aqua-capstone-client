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

const tankHandlers = () => {
  $(document).on('submit', '#create-tank', onCreateTank)
  // $('.get-goals').on('click', onGetGoals)
  // $(document).on('submit', '.remove-goal', onDeleteGoal)
  $(document).on('submit', '.update-tank', onUpdateTank)
}

module.exports = {
  tankHandlers,
  onCreateTank,
  getTanks,
  onUpdateTank
}
