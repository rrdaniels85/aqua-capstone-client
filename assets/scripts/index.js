'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const authEvents = require('./auth/events.js')
const tankEvents = require('./tanks/events.js')
const animalEvents = require('./animals/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
  tankEvents.tankHandlers()
  animalEvents.animalHandlers()
})

$(() => {
  $('#passwordbutton').on('click', function () {
    $('.passworderror').text('')
    $('.passwordsuccess').text('')
    $('#change-password').find('input:text, input:password, input:password, select, textarea').val('')
  })
})

$(() => {
  $('.loginbuttons').on('click', function () {
    $('.signinerror').text('')
    $('.signuperror').text('')
    $('.passworderror').text('')
    $('#sign-in').find('input:text, input:password, input:password, select, textarea').val('')
    $('#sign-up').find('input:text, input:password, input:password, select, textarea').val('')
    $('#change-password').find('input:text, input:password, input:password, select, textarea').val('')
    $('.signupsuccess').text('')
  })
})

$(() => {
  $(document).on('click', '#createtankbutton', function () {
    $('.createerror').text('')
    $('#create-tank-name').val('')
    $('#create-tank-water').val('')
  })
})

$(() => {
  $(document).on('click', '.update-tank-button', function () {
    $('.updateerror').text('')
  })
})

$(() => {
  $(document).on('click', '#createanimalbutton', function () {
    $('.createerror').text('')
    $('#create-animal-name').val('')
    $('#create-animal-species').val('')
    $('#create-animal-color').val('')
  })
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
