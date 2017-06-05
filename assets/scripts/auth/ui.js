'use strict'
const store = require('../store.js')
const showTanksTitleTemplate = require('../templates/tank-title.handlebars')
const tankapi = require('../tanks/api.js')
const tankui = require('../tanks/ui.js')
const tankevents = require('../tanks/events.js')

const signUpSuccess = (data) => {
  // assign user data in the store
  store.user = data.user
  $('#signupmodal').modal('toggle')
  $('#signinmodal').modal('toggle')
  $('.signupsuccess').text('You successfully signed up! Please sign in to continue.')
  console.log('you successfully signed up')
}

const signUpFailure = () => {
  $('.signuperror').text('An error occurred. You may have entered invalid credentials. Try again.')
  console.log('sign up failed')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.sign-in-view').addClass('hidden')
  $('.afterlogin').removeClass('hidden')
  $('#signinmodal').modal('toggle')
  let showTankTitle = showTanksTitleTemplate()
  $('#handlebarsone').append(showTankTitle)
  tankapi.getTanks()
    .then(tankui.getTanksSuccess)
    .catch(tankui.getTanksFailure)
  console.log('you successfully signed in')
}

const signInFailure = () => {
  $('.signinerror').text('An error occurred. You may have entered invalid credentials. Try again.')
  console.log('sign in failed')
}

const signOutSuccess = () => {
  store.user = null
  $('#signoutmodal').modal('toggle')
  // $('#content').empty()
  // $('.nogoals').text('')
  // $('body').removeClass('modal-open')
  // $('body').removeClass('modal-open')
  // $('.modal-backdrop').remove()
  // $('.sign-in-view').removeClass('hidden')
  // $('.afterlogin').addClass('hidden')
  console.log('sign out was successful')
}

const signOutFailure = () => {
  console.log('sign out failed')
}

const changePasswordSuccess = () => {
  $('#newpasswordmodal').modal('toggle')
  $('.passworderror').text('')
  console.log('change password was successful')
}

const changePasswordFailure = () => {
  $('.passworderror').text('An error occurred. You may have entered the wrong password. Try again.')
  console.log('change password failed')
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
