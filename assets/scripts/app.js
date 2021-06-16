'use strict'

const userEvents = require('./user/events.js')
const storyEvents = require('./story/events.js')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#add-story').on('click', storyEvents.onAddStory)
  $('#create-story').on('submit', storyEvents.onCreateStory)
  $('#show-stories').on('click', storyEvents.onShowStories)
  // Still working on update and delete.
  // Update another listener for the update form button
  // Delete is not working may need to figure how to connect id
  $('#update-story').on('click', storyEvents.onUpdateStory)
  $('#delete-story').on('click', storyEvents.onDeleteStory)
})
