const store = require('./../store')

const createStorySuccess = function (res) {
  store.emotion = res.emotion
}

const createStoryFailure = function () {

}

module.exports = {
  createStorySuccess,
  createStoryFailure
}
