
const store = require('./../store')

// Sign up begin
const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')

  $('#messaging').text('Please sign in with, ' + res.user.email)
}

const signUpFailure = function (err) {
  $('#messaging').text('Failed to sign up, please check email and passwords: ' + err.status)
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')

  store.user = res.user

  $('#messaging').text(res.user.email + ', has signed in successfully!')

  $('#after-sign-in').show()

  $('#before-sign-in').hide()

  $('#nav-bar').show()
}

const signInFailure = function () {
  $('#messaging').text('Failed to sign in, check email and password')
}

const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#messaging').text('Password change succesfull')
}

const changePasswordFailure = function () {
  $('#messaging').text('Password change failed')
}

const signOutSuccess = function () {
  store.user = null

  $('#messaging').text('Sign Out succesfull')

  $('#before-sign-in').show()

  $('#after-sign-in').hide()

  $('#nav-bar').hide()

  $('#after-add').hide()
}

const signOutFailure = function () {
  $('#messaging').text('Sign out failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
