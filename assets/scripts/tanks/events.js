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

const tankHandlers = () => {
  $(document).on('submit', '#create-tank', onCreateTank)
  // $('.get-goals').on('click', onGetGoals)
  // $(document).on('submit', '.remove-goal', onDeleteGoal)
  // $(document).on('submit', '.update-goal', onUpdateGoal)
}

module.exports = {
  tankHandlers,
  onCreateTank
}
