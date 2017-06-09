'use strict'
const store = require('../store.js')
const tankapi = require('../tanks/api.js')
const tankui = require('../tanks/ui.js')

const signUpSuccess = (data) => {
  // assign user data in the store
  store.user = data.user
  $('#signupmodal').modal('toggle')
  $('#signinmodal').modal('toggle')
  $('#signupsuccess').text('You successfully signed up! Please sign in to continue.')
}

const signUpFailure = () => {
  $('.signuperror').text('An error occurred. You may have entered invalid credentials. Try again.')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.visitor-view').addClass('hidden')
  $('.user-view').removeClass('hidden')
  $('#signinmodal').modal('toggle')
  tankapi.getTanks()
    .then(tankui.getTanksSuccess)
    .catch(tankui.getTanksFailure)
}

const signInFailure = () => {
  $('.signinerror').text('An error occurred. You may have entered invalid credentials. Try again.')
}

const signOutSuccess = () => {
  store.user = null
  store.tank = null
  $('#signoutmodal').modal('toggle')
  $('.visitor-view').removeClass('hidden')
  $('#handlebarsone').empty()
  $('#handlebarstwo').empty()
  $('.user-view').addClass('hidden')
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
  $('#newpasswordmodal').modal('toggle')
  $('.passworderror').text('')
}

const changePasswordFailure = () => {
  $('.passworderror').text('An error occurred. You may have entered the wrong password. Try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
