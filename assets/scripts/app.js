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
  $('#update-story').on('click', storyEvents.onUpdateStory)
  $('#story-update').on('submit', storyEvents.onStoryUpdate)
  $('#delete-story').on('click', storyEvents.onDeleteStory)
  $('#story-delete').on('submit', storyEvents.onStoryDelete)
})
