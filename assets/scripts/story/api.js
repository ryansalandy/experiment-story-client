const config = require('./../config')
const store = require('./../store')

const createStory = function (data) {
  console.log('api create data ', data)
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

const deleteStory = function (data, id) {
  return $.ajax({
    method: 'DELETE',
    data,
    url: config.apiUrl + '/stories/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createStory,
  showStories,
  deleteStory
}
