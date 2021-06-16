const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onAddStory = function (event) {
  event.preventDefault()
  ui.addStorySuccess()
  // ui.addStoryFailure()
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

const onDeleteStory = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteStory(data)
    .then(ui.deleteStorySuccess)
    .catch(ui.deleteStorySuccess)
}

module.exports = {
  onAddStory,
  onCreateStory,
  onShowStories,
  onDeleteStory
}
