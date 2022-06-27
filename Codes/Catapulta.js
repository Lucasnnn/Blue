const prompt = require("prompt-sync")();
const rodadas = prompt("quantas rodadas?");
const duracao = prompt("qual duração ?");

base = 4 * rodadas * duracao;
console.log(
  "A catapulta lançou " +
    base +
    " pedras em " +
    rodadas +
    " rodadas de " +
    duracao +
    " minutos"
);
