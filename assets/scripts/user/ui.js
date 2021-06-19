
const store = require('./../store')

// Sign up begin
const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').text('Please Sign In with, ' + res.user.email)
}

const signUpFailure = function (err) {
  $('#messaging').text('Failed to Sign Up, Please Check Email and Passwords: ' + err.status)
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  store.user = res.user
  $('#messaging').text(res.user.email + ', Signed In Successfully!')
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
  $('#nav-bar').show()
  $('#nav-bar-main').hide()
}

const signInFailure = function () {
  $('#messaging').text('Failed to Sign In, Check Email and Password')
}

const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#messaging').text('Password Change Succesfull')
}

const changePasswordFailure = function () {
  $('#messaging').text('Password Change Failed')
}

const signOutSuccess = function () {
  store.user = null
  $('#messaging').text('Sign Out Succesfull')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  $('#nav-bar').hide()
  $('#after-add').hide()
  $('#story-list').hide()
  $('#nav-bar-main').show()
}

const signOutFailure = function () {
  $('#messaging').text('Sign Out failed')
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
