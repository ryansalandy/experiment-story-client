const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onAddStory = function (event) {
  event.preventDefault()
  ui.addStorySuccess()
}

const onCreateStory = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createStory(data)
    .then(ui.createStorySuccess)
    .catch(ui.createStoryFailure)
}

const onShowStories = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showStories(data)
    .then(ui.showStoriesSuccess)
    .catch(ui.showStoryFailure)
}

const onUpdateStory = function (event) {
  event.preventDefault()
  ui.updateStorySuccess()
}

const onStoryUpdate = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const id = data.story.id
  api.updateStory(data, id)
    .then(ui.storyUpdateSuccess)
    .catch(ui.storyUpdateFailure)
}

const onDeleteStory = function (event) {
  event.preventDefault()
  ui.deleteStorySuccess()
}

const onStoryDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteStory(data.story.id)
    .then(ui.storyDeleteSuccess)
    .catch(ui.storyDeleteFailure)
}

module.exports = {
  onAddStory,
  onCreateStory,
  onShowStories,
  onUpdateStory,
  onStoryUpdate,
  onDeleteStory,
  onStoryDelete
}
