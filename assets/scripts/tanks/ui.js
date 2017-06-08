'use strict'
const store = require('../store.js')
const listTanksTemplate = require('../templates/list-tanks.handlebars')
const showOneTankTemplate = require('../templates/show-one-tank.handlebars')
const showTanksTitleTemplate = require('../templates/tank-title.handlebars')
const noTanksTemplate = require('../templates/no-tanks.handlebars')

const createTankSuccess = (data) => {
  // toggle modal
  $('#createtankmodal').modal('toggle')
  // remove bootstrap modal classes
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully created a tank')
}

const createTankFailure = () => {
  // notify user of error
  $('.createerror').text('An error occurred. You must fill in all fields in order to create an aquarium.')
}

const getTanksSuccess = (data) => {
  // if user has not created any tanks
  if (data.tanks.length === 0) {
    // notify user w/ handlebars template that no tanks exist
    const showTankTitle = showTanksTitleTemplate()
    $('#handlebarsone').html(showTankTitle)
    const noTanks = noTanksTemplate()
    $('#handlebarstwo').html(noTanks)
  } else {
    console.log('list tanks ran before template')
    // if there are tanks, sort tanks from newest to oldest by ID #
    data.tanks.sort(function (a, b) {
      return parseFloat(b.id) - parseFloat(a.id)
    })
    // render tanks with handlebars templates
    const showTankTitle = showTanksTitleTemplate()
    $('#handlebarsone').html(showTankTitle)
    const listTanks = listTanksTemplate({ tanks: data.tanks })
    $('#handlebarstwo').html(listTanks)
  }
}

const getTanksFailure = () => {
}

const updateTankSuccess = (data) => {
  console.log('update tank data is', data)
  // toggle modal
  $('#updatetankmodal' + store.tank).modal('toggle')
  // remove modal classes
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('update tank worked')
  // refresh tank info
  const events = require('./events.js')
  events.refreshOneTank()
}

const updateTankFailure = () => {
  // notify user of update tank failure
  $('.updateerror').text('An error occurred. You must complete all fields in order to update an aquarium.')
}

const deleteTankSuccess = (data) => {
  // toggle modal
  $('#removetankmodal' + store.tank).modal('toggle')
  // remove modal classes
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('you successfully deleted that tank! :)')
}

const deleteTankFailure = () => {
}

const getOneTankSuccess = (data) => {
  console.log('tank success for one')
  console.log(data)
  // assign tankId to the store
  store.tank = data.tank.id
  // clear handlebars divs
  $('#handlebarsone').empty()
  $('#handlebarstwo').empty()
  // display one tank info with handlebars template
  const showOneTank = showOneTankTemplate({ tank: data.tank })
  $('#handlebarsone').html(showOneTank)
  // run get animals function
  const animalEvents = require('../animals/events.js')
  animalEvents.getAnimals()
}

const getOneTankFailure = () => {
}

const refreshOneTankSuccess = (data) => {
  console.log(' refresh tank success for one')
  console.log(data)
  // refresh one tank info with handlebars template
  $('#handlebarsone').empty()
  const showOneTank = showOneTankTemplate({ tank: data.tank })
  $('#handlebarsone').html(showOneTank)
}

const refreshOneTankFailure = () => {
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
  getOneTankFailure,
  refreshOneTankSuccess,
  refreshOneTankFailure
}
