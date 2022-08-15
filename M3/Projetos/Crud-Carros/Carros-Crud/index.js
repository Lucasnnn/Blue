const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/Carros.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/carros', routes);

app.listen(port, () => {
  console.log(`Servidor Bugando na porta http://localhost:${port}`);
});
