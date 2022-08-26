const Carros = require('../../mocks/db');
const model = require('../models/Carros');

function todosCarrosService() {
  return Carros;
}

function carroIdService(id) {
  let carroId;

  Carros.map((Carros) => {
    if (Carros.id === id) {
      carroId = Carros;
    }
  });
  return carroId;
}

function criarCarroService(carro) {
  Carros.push(carro);
  return carro;
}

function deletarCarroService(id) {  
  let carroEncontro;
  Carros.map((carru, index) => {
    if (carru.id === id) {
      carroEncontro = carru;
      Carros.splice(index, 1);
    }
  });
  return carroEncontro;
}

module.exports = {
  todosCarrosService,
  carroIdService,
  criarCarroService,
  deletarCarroService,
};
