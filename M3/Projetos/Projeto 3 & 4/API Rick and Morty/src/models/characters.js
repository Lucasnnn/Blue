const mongooose = require('mongoose');

const CharactersSchema = new mongooose.Schema({
  user: '',
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const characters = mongooose.model('characters', CharactersSchema);

module.exports = characters;
