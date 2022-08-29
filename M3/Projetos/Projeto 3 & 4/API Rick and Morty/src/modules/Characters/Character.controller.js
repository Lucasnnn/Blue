const characterService = require('./Character.service');
const mongoose = require('mongoose');

const allCharactersController = async (req, res) => {
  const allCharacters = await characterService.allCharService();

  if (allCharacters.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum personagem cadastrado!' });
  }
  res.send(allCharacters);
};

const characterIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const charSelect = await characterService.charIdService(idParam);

  if (!charSelect) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(charSelect);
};

const createCharacterController = async (req, res) => {
  const char = req.body;

  if (!char || !char.name || !char.imageUrl) {
    return res.status(400).send({ message: 'Envie todos os dados !' });
  }
  const newChar = await characterService.createCharService(char);
  res.status(201).send(newChar);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const characterEdit = req.body;

  if (!characterEdit || !characterEdit.name || !characterEdit.imageUrl) {
    return res.status(404).send({ message: 'Faltando informação !' });
  }

  const updateCharacter = await characterService.updateCharService(
    idParam,
    characterEdit,
  );
  res.send(updateCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  await characterService.deleteCharService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

const characterNameController = async (req, res) => {
  const name = req.params.name;

  const charSelect = await characterService.charNameService(name);

  if (!charSelect) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(charSelect);
};

module.exports = {
  allCharactersController,
  characterIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  characterNameController,
};
