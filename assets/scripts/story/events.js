const getFormFields = require('./../../../lib/get-form-fields')
// const store = require('./../store')
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
// Need to complete not working
// const onUpdateStory = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.updateStory(data)
//     .then(ui.updateStorySuccess)
//     .catch(ui.updateStoryFailure)
// }
// Need to complete not working
const onDeleteStory = function (event) {
  event.preventDefault()
  ui.deleteStorySuccess()
}

const onStoryDelete = function (event) {
  event.preventDefault()
  const id = getFormFields(event.target)
  api.deleteStory(id)
    .then(ui.storyDeleteSuccess)
    .catch(ui.storyDeleteFailure)
}

module.exports = {
  onAddStory,
  onCreateStory,
  onShowStories,
  onUpdateStory,
  onDeleteStory,
  onStoryDelete
}
