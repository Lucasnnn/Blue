const users = require('../../models/users');

const allUsersService = async () => {
  const allUsers = await users.find();
  return allUsers;
};

const createUserService = async (newUser) => {
  const createUser = await users.create(newUser);
  return createUser;
};

const findByEmailUserService = async (email) => {
  const userEmail = await users.findOne({ email : email });
  return userEmail;
};

module.exports = {
  allUsersService,
  createUserService,
  findByEmailUserService
};
