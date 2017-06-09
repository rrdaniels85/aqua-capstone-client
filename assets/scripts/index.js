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
    $('#sign-up-emai').val('')
    $('#sign-up-password').val('')
    $('#sign-up-password-confirmation').val('')
    $('#sign-in-email').val('')
    $('#sign-in-password').val('')
    $('#signupsuccess').text('')
  })
})

$(() => {
  $('#passwordbutton').on('click', function () {
    $('#old-password').val('')
    $('#new-password').val('')
    $('.passworderror').text('')
  })
})

$(() => {
  $(document.body).on('hide.bs.modal', function () {
    $('body').css('padding-right', '0')
  })
  $(document.body).on('hidden.bs.modal', function () {
    $('body').css('padding-right', '0')
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

$(() => {
  $(document).on('click', '.update-animal-button', function () {
    $('.updateerror').text('')
  })
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
