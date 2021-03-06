const config = require('./../config')
const store = require('./../store')

const createStory = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/stories',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showStories = function (data) {
  return $.ajax({
    method: 'GET',
    data,
    url: config.apiUrl + '/stories',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateStory = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/stories/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteStory = function (id) {
  console.log(id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/stories/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createStory,
  showStories,
  updateStory,
  deleteStory
}
