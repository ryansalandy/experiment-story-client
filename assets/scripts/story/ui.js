const store = require('./../store')

const addStorySuccess = function () {
  $('#after-add').show()
}

const createStorySuccess = function (res) {
  $('#create-story').trigger('reset')
  $('#messaging').text('Story created')
  store.story = res.story
  $('#after-add').hide()
}

const showStoriesSuccess = function (res) {
  let storyHtml = ''

  res.forEach(story => {
    storyHtml += `
    <div class="post-list row" id="story-list">
      <div class="card mt-4 col-md-6 bg-light">
        <div class="card-body" id="stories-div">
          <p class="card-text">${story.hypothesis}</p>
          <h6 class="card-subtitle mb-2 text-muted">${story.tactic}</h6>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">Update</button>
            <button class="btn btn-light" type="button" id="delete-story">Done</button>
          </div>
        </div>
      </div>
    </div>
    `
  })
  $('#story-list').html(storyHtml)
}

module.exports = {
  addStorySuccess,
  createStorySuccess,
  // createStoryFailure,
  showStoriesSuccess
  // deleteStorySuccess
}
