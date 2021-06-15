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
  console.log(data)
  api.createStory(data)
    .then(ui.createStorySuccess)
    .catch(ui.createStoryFailure)
}

const onShowStories = function (event) {
  event.preventDefault()
  api.showStories()
    .then(ui.showStoriesSuccess)
    .catch(ui.showStoryFailure)
}

const onDeleteStory = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.story.id
  api.deleteTeam(data, id)
    .then(ui.deleteTeamSuccess)
    .catch(ui.deleteTeamFailure)
}

module.exports = {
  onAddStory,
  onCreateStory,
  onShowStories,
  onDeleteStory
}
