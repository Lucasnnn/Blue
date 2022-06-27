console.log();
const prompt = require("prompt-sync")();
const inici = prompt("Press enter...");

console.log(
  "Esse é um resumo sobre super gordin , um cara que começou aos 13 anos trabalhar e estudar na mesma epoca , após longos 9 anos nessa rotina decidiu ser autonomo e após 1 ano e meio nessa experencia , ele se encontrou localizado dentro de uma pandemia mundial, tal qual fez com que ele voltasse ao seu serviço antigo , alguns meses após surgiu a ele a oportunidade de ser dono de uma empresa , tal qual ele tocou 1 ano e alguns meses , no meio de um abre e fecha por conta da tal pandemia , após estar esgostado e cansado daquela rotina , ele decidiu buscar novos caminhos pra ele,encontrou um curso em um ramo que ele ama , mas o desafio final e maior deles está por vir , terminar o curso e entrar no mercado de trabalho"
);
console.log();
console.log("Agora 5 pergutinhas (sim/não) : ");
console.log();
if (
  prompt("Se identificou com essa historia ?").toLowerCase().trim() == "sim"
) {
  a = 1;
} else {
  a = 0;
}
console.log();
if (
  prompt("Superou grandes desafios nesse periodo ?").toLowerCase().trim() ==
  "sim"
) {
  b = 1;
} else {
  b = 0;
}
console.log();
if (
  prompt("Na pandemia conseguiu se reinventar bem ?").toLowerCase().trim() ==
  "sim"
) {
  c = 1;
} else {
  c = 0;
}
console.log();
if (
  prompt("Todos entes queridos se manteram pós pandemia ?")
    .toLowerCase()
    .trim() == "sim"
) {
  d = 1;
} else {
  d = 0;
}
console.log();
if (
  prompt("Se sente alguém melhor que era antes disso ?").toLowerCase().trim() ==
  "sim"
) {
  e = 1;
} else {
  e = 0;
}
const r = a + b + c + d + e;
console.log();

if (r == 0) {
  console.log("Você falha miseravelmente.");
}
if (r == 1 || r == 2)
  [console.log("Você falha, mas ainda consegue fugir da situação.")];
if (r == 3) {
  console.log(
    "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
  );
}
if (r == 4) {
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
}
if (r == 5) {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
}
console.log();
