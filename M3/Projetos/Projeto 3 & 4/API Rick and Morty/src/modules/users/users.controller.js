const usersService = require('./users.service');
const mongoose = require('mongoose');

const findAllUserController = async (req, res) => {
  const allUsers = await usersService.allUsersService();

  if (allUsers.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum usuario cadastrado!' });
  }
  res.send(allUsers);
};

const createUserController = async (req, res) => {
  const { username, name, email, password, photo } = req.body;

  if (!username || !name || !email || !password || !photo) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. Os campos são: 'username', 'name', email, 'password' ou 'photo'",
    });
  }

  const foundUser = await usersService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({
      message: "Email já em uso!",
    });
  }

  const user = await usersService.createUserService(req.body)
    .catch((err) => console.log(err, message));

  if (!user) {
    return res.status(400).send({
      message: "Erro ao criar Usuário!",
    });
  }

  res.status(201).send(user);
};

module.exports = {
  findAllUserController,
  createUserController,
};
