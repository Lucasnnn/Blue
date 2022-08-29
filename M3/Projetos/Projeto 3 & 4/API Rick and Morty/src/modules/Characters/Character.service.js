const characters = require('../../models/characters');

const allCharService = async () => {
  const allChar = await characters.find();
  return allChar;
};

const charIdService = async (idParam) => {
  const charId = await characters.findById(idParam);
  return charId;
};

const createCharService = async (newChar) => {
  const createChar = await characters.create(newChar);
  return createChar;
};

const updateCharService = async (idParam, editChar) => {
  const updateChar = await characters.findByIdAndUpdate(idParam, editChar);
  return updateChar;
};

const deleteCharService = async (idParam) => {
  return await characters.findByIdAndDelete(idParam);
};

const charNameService = async (name) => {
  const charName = await characters.find({ name: name });
  return charName;
};

module.exports = {
  allCharService,
  charIdService,
  createCharService,
  updateCharService,
  deleteCharService,
  charNameService,
};
