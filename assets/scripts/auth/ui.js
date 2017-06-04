'use strict'
const store = require('../store.js')

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
  console.log('you successfully signed in')
}

const signInFailure = () => {
  $('.signinerror').text('An error occurred. You may have entered invalid credentials. Try again.')
  console.log('sign in failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // signOutSuccess,
  // signOutFailure,
  // changePasswordSuccess,
  // changePasswordFailure
}
