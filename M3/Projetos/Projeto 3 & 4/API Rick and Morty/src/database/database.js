const mongoose = require('mongoose');

function conexaoBanco() {
  const credentials = './chars.pem';
  mongoose
    .connect(
      'mongodb+srv://chars.2ecxtok.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority',
      {
        sslKey: credentials,
        sslCert: credentials,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('Serà que deu certo??'))
    .catch((error) => console.log(`Aqui não !!, erro: ${error}`));
}

module.exports = conexaoBanco;
