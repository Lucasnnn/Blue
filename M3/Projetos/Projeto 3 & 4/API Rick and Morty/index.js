const express = require('express');
const cors = require('cors');
const routes = require('./src/modules/Characters/Character.route');
const routeUsers = require('./src/modules/users/usesrs.route')
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

// app.use('/auth',  )
app.use('/users' , routeUsers);
app.use('/characters', routes);

app.listen(port, () => {
  console.log(`Servidor Bugando na porta http://localhost:${port}/`);
});
