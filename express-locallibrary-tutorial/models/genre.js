var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 100, minlength: 3},
    GenreURL: {type: String}
  }
);

GenreSchema
.virtual('GenreURL')
.get(function () {
  return this.GenreURL;
});

module.exports = mongoose.model('GenreInstance', GenreSchema);