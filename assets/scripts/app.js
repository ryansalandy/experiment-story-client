'use strict'

const userEvents = require('./user/events.js')
const storyEvents = require('./story/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Before sign in listeners
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  // After sign in listeners
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  // Experiment Story listners
  $('#create-story').on('submit', storyEvents.onCreateStory)
})
