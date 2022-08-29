const routerUser = require('express').Router();
const userController = require('./users.controller');

routerUser.post('/create', userController.createUserController);
routerUser.get('', userController.findAllUserController);

module.exports = routerUser;
