console.log();
const prompt = require("prompt-sync")();
console.log("Eu estou investigando o assassinato da Roberta ,");
inic = prompt("me responda algumas perguntas ,apenas com sim ou não , ok ?");
console.log();
if (prompt("Conhecia a Roberta ?").toLowerCase().trim() == "sim") {
  r1 = 1;
} else {
  r1 = 0;
}
console.log();
if (prompt("Mora em Goiania ?").toLowerCase().trim() == "sim") {
  r2 = 1;
} else {
  r2 = 0;
}
console.log();
if (prompt("Calça 38 ?").toLowerCase().trim() == "sim") {
  r3 = 1;
} else {
  r3 = 0;
}
console.log();
if (prompt("Possui cabelos ruivos ?").toLowerCase().trim() == "sim") {
  r4 = 1;
} else {
  r4 = 0;
}
console.log();
if (prompt("Seu celular tem final 8229 ?").toLowerCase().trim() == "sim") {
  r5 = 1;
} else {
  r5 = 0;
}
console.log();

const r = r1 + r2 + r3 + r4 + r5;
if (r <= 2) {
  console.log("Você é inocente !");
}
if (r == 3) [console.log("Você é suspeito !")];
if (r >= 4) {
  console.log("Você é culpado !");
}
