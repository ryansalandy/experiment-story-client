const store = require('./../store')

const addStorySuccess = function () {
  $('#messaging').text('Enter your Experiment Hypothesis and Tactic')
  $('#after-add').show()
  $('#story-list').hide()
}

const addStoryFailure = function () {
  $('#messaging').text('Uh Oh! Something went wrong!')
}

const createStorySuccess = function (res) {
  $('#create-story').trigger('reset')
  $('#messaging').text('Your Experiment Story has been Created')
  store.story = res.story
  $('#after-add').hide()
}

const createStoryFailure = function () {
  $('#messaging').text('Uh Oh! Something went wrong!')
}

const showStoriesSuccess = function (res) {
  $('#show-story').trigger('reset')
  $('#messaging').text('These are your Experiment Stories to Complete')
  $('#after-add').hide()
  $('#story-list').show()
  let storiesHtml = ''
  res.stories.forEach(function (story) {
    storiesHtml += `
    <div class="post-list row">
      <div class="card mt-4 col-md-6 bg-light">
        <div class="card-body" id="stories-div">
          <p class="card-text">${story.hypothesis}</p><br />
          <h6 class="card-subtitle mb-2 text-muted">${story.tactic}</h6>
          <p class="card-subtitle mb-2 text-muted">${story._id}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-light me-md-2" type="button">Update</button>
            <button id="delete-story" class="btn btn-light">Delete</button>
          </div>
        </div>
      </div>
    </div>
    `
  })
  $('#story-list').html(storiesHtml)
}

const showStoriesFailure = function () {
  $('#messaging').text('Uh Oh! Something went wrong!')
}

const deleteStorySuccess = function (res) {
  $('#delete-story').trigger('reset')
  $('#messaging').text('Story has been completed')
  // store.story = res.story
  // $('#after-add').hide()
}

module.exports = {
  addStorySuccess,
  addStoryFailure,
  createStorySuccess,
  createStoryFailure,
  showStoriesSuccess,
  showStoriesFailure,
  deleteStorySuccess
}
