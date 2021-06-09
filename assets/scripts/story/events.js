const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onCreateStory = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createStory(data)
    .then(ui.createStorySuccess)
    .catch(ui.createStoryFailure)
}

module.exports = {
  onCreateStory
}
