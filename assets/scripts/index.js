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

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
