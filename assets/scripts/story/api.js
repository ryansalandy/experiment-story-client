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

module.exports = {
  createStory
}
