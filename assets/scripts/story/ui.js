const store = require('./../store')

const addStorySuccess = function () {
  $('#messaging').text('Enter your Experiment Hypothesis and Tactic')
  $('#after-add').show()
  $('#story-list').hide()
  $('#after-delete').hide()
  $('#after-update').hide()
}

const createStorySuccess = function (res) {
  $('#create-story').trigger('reset')
  $('#messaging').text('Your Experiment Story was Created')
  store.story = res.story
  $('#after-add').hide()
}

const createStoryFailure = function () {
  $('#messaging').text('Uh Oh! Somethings Wrong!')
}

const showStoriesSuccess = function (res) {
  $('#show-story').trigger('reset')
  $('#messaging').text('These are your Experiment Stories to Complete')
  $('#after-add').hide()
  $('#after-delete').hide()
  $('#story-list').show()
  $('#after-update').hide()
  let storyCard = ''
  res.stories.forEach(function (story) {
    storyCard += `
    <div class="post-list row">
      <div class="card mt-4 col-md-6 bg-light">
        <div class="card-body" id="stories-div">
          <p class="card-text">${story.hypothesis}</p><br />
          <h6 class="card-subtitle">${story.tactic}</h6><br />
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <p class="card-text"><b>ID:</b> ${story._id}</p>
          </div>
        </div>
      </div>
    </div>
    `
  })
  $('#story-list').html(storyCard)
}

const showStoriesFailure = function () {
  $('#messaging').text('Uh Oh! Somethings Wrong!')
}

const updateStorySuccess = function () {
  $('#messaging').text('Enter Experiment Story Tactic')
  $('#after-add').hide()
  $('#story-list').hide()
  $('#after-delete').hide()
  $('#after-update').show()
}
// Need to create the ui for Update to enter resource changes
// Its seems that the buttons in the above ui is none responsive
// to the listner and does not show up in console.
// May need a seperate form to input those changes along with id
// const updateStorySuccess = function () {
//
// }

const deleteStorySuccess = function (res) {
  $('#messaging').text('Enter Experiment Story ID')
  $('#after-add').hide()
  $('#story-list').hide()
  $('#after-update').hide()
  $('#after-delete').show()
}

const storyDeleteSuccess = function (res) {
  $('#messaging').text('Your Experiment Story was Deleted')
  $('#story-delete').trigger('reset')
  $('#after-delete').hide()
}

module.exports = {
  addStorySuccess,
  createStorySuccess,
  createStoryFailure,
  showStoriesSuccess,
  showStoriesFailure,
  updateStorySuccess,
  deleteStorySuccess,
  storyDeleteSuccess
}
