const mongooose = require('mongoose');

const CarroSchema = new mongooose.Schema({
  Marca: { type: String, required: true },
  Modelo: { type: String, required: true },
  Potencia: { type: String, required: true },
  Preco: { type: Number, required: true },
});

const Carro = mongooose.model('carros', CarroSchema);

module.exports = Carro;
