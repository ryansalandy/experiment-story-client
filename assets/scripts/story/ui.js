const store = require('./../store')

const addStorySuccess = function () {
  $('#messaging').text('Enter your Experiment Hypothesis and Tactic')
  $('#after-add').show()
  $('#story-list').hide()
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
  $('#story-list').show()
  let storyCard = ''
  res.stories.forEach(function (story) {
    storyCard += `
    <div class="post-list row">
      <div class="card mt-4 col-md-6 bg-light">
        <div class="card-body" id="stories-div">
          <p class="card-text">${story.hypothesis}</p><br />
          <h6 class="card-subtitle">${story.tactic}</h6>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button id="update-story" class="btn btn-light">Update</button>
            <button id="delete-story" class="btn btn-light">Delete</button>
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

// Need to create the ui for Update to enter resource changes
// May need a seperate form to input those changes along with id
// const updateStorySuccess = function () {
//
// }

const deleteStorySuccess = function (res) {
  $('#delete-story').trigger('reset')
  // store.story = null
  $('#messaging').text('Story has been Deleted')
  // store.story = res.story
  // $('#after-add').hide()
}

module.exports = {
  addStorySuccess,
  createStorySuccess,
  createStoryFailure,
  showStoriesSuccess,
  showStoriesFailure,
  deleteStorySuccess
}
