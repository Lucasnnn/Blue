const prompt = require("prompt-sync")();
console.log("Que tal duelar algumas partidas de jogo da velha?");
console.log();
const jog1 = prompt("Qual o nome do 1º jogador ?").toUpperCase().trim();
console.clear();
const jog2 = prompt("Qual o nome do 2º jogador?").toUpperCase().trim();
console.clear();

const item2 = correcao(
  prompt(`${jog1} quer jogar com 'X' ou 'O'? `).toUpperCase().trim()
);

const item1 = escolha(item2);

let vitoriajogador1 = 0;
let vitoriajogador2 = 0;

let colun = [];
let linh = [];

console.log(`[  a1  ,  b2  ,  c3  ]
[  b1  ,  b2  ,  c3  ]
[  c1  ,  c2  ,  c3  ]`);
//_______________________inicio________________________________\\
inicio: for (let rod = 0; rod < 9; ) {
  const jog = jogdavez(jog1, jog2, rod);
  const iten = itemdavez(item1, item2, rod);

  var arraylinhas = [];
  for (let i = 0; i < 3; i++) {
    var arrayelementos = [];
    for (let a = 0; a < 3; a++) {
      arrayelementos.push("-");
    }
    arraylinhas.push(arrayelementos);
  }

  //_________________________entralinha__________________________\\
  console.log(`
 A [  ?  ]
 B [  ?  ]
 C [  ?  ]`);
  entraLinha: while (true) {
    console.log();
    let linha = prompt(`${jog} qual linha quer jogar ?`).toLowerCase().trim();
    console.log();

    if (linha == "a") {
      var li = 0;
      linh.push(li);
      break;
    } else if (linha == "b") {
      var li = 1;
      linh.push(li);
      break;
    } else if (linha == "c") {
      var li = 2;
      linh.push(li);
      break;
    } else {
      console.log(`Entrada invalida , ${jog} tente novamente`);
      continue entraLinha;
    }
  }

  //____________________entracoluna_____________________________\\
  console.log(`
    1    2    3
 [  ?  , ?  , ?  ]`);

  entraColuna: while (true) {
    console.log();
    var coluna = prompt(`${jog} qual coluna quer jogar ?`).trim() - 1;
    if (coluna == 0 || coluna == 1 || coluna == 2) {
      colun.push(coluna);
      break;
    } else {
      console.log();
      console.log(`Entrada invalida , ${jog} tente novamente `);
      continue entraColuna;
    }
  }

  console.clear();

  //______________________if's__________________________________\\
  if (rod >= 0) {
    comando(li, coluna, 0, item2);
  }
  if (rod >= 1) {
    if (comando(li, coluna, 1, item1) == 0) {
      colun.pop();
      linh.pop();
      console.log("Posiçao ja escolhida,tente novamente");
      continue inicio;
    }
  }
  if (rod >= 2) {
    if (comando(li, coluna, 2, item2) == 0) {
      colun.pop();
      linh.pop();
      console.log("Posiçao ja escolhida,tente novamente");
      continue inicio;
    }
  }
  if (rod >= 3) {
    if (comando(li, coluna, 3, item1) == 0) {
      colun.pop();
      linh.pop();
      console.log("Posiçao ja escolhida,tente novamente");
      continue inicio;
    }
  }
  if (rod >= 4) {
    if (comando(li, coluna, 4, item2) == 0) {
      colun.pop();
      linh.pop();
      console.log("Posiçao ja escolhida,tente novamente");
      continue inicio;
    }
  }
  if (rod >= 5) {
    if (comando(li, coluna, 5, item1) == 0) {
      colun.pop();
      linh.pop();
      console.log("Posiçao ja escolhida,tente novamente");
      continue inicio;
    }
  }
  if (rod >= 6) {
    if (comando(li, coluna, 6, item2) == 0) {
      colun.pop();
      linh.pop();
      console.log("Posiçao ja escolhida,tente novamente");
      continue inicio;
    }
  }
  if (rod >= 7) {
    if (comando(li, coluna, 7, item1) == 0) {
      colun.pop();
      linh.pop();
      console.log("Posiçao ja escolhida,tente novamente");
      continue inicio;
    }
  }
  if (rod >= 8) {
    if (comando(li, coluna, 8, item2) == 0) {
      colun.pop();
      linh.pop();
      console.log("Posiçao ja escolhida,tente novamente");
      continue inicio;
    }
  }

  for (var i of arraylinhas) {
    console.log(i);
  }

  if (
    (arraylinhas[0][0] == iten &&
      arraylinhas[0][1] == iten &&
      arraylinhas[0][2] == iten) ||
    (arraylinhas[1][0] == iten &&
      arraylinhas[1][1] == iten &&
      arraylinhas[1][2] == iten) ||
    (arraylinhas[2][0] == iten &&
      arraylinhas[2][1] == iten &&
      arraylinhas[2][2] == iten) ||
    (arraylinhas[0][0] == iten &&
      arraylinhas[1][0] == iten &&
      arraylinhas[2][0] == iten) ||
    (arraylinhas[0][1] == iten &&
      arraylinhas[1][1] == iten &&
      arraylinhas[2][1] == iten) ||
    (arraylinhas[0][2] == iten &&
      arraylinhas[1][2] == iten &&
      arraylinhas[2][2] == iten) ||
    (arraylinhas[0][0] == iten &&
      arraylinhas[1][1] == iten &&
      arraylinhas[2][2] == iten) ||
    (arraylinhas[0][2] == iten &&
      arraylinhas[1][1] == iten &&
      arraylinhas[2][0] == iten)
  ) {
    console.log(`${jog} voce ganhou essa rodada`);
    console.log();
    let repetir = prompt("Querem jogar mais uma partida?").toLowerCase().trim();

    if (jog == jog1) {
      vitoriajogador1++;
    } else if (jog == jog2) {
      vitoriajogador2++;
    }

    if (repetir == "sim") {
      for (let res = 0; res < rod; ) {
        rod--;
      }
      colun.splice(0);
      linh.splice(0);
      continue inicio;
    } else {
      break;
    }
  }

  if (rod >= 8) {
    console.log();
    console.log("Nessa rodada nao teve ganhador :/");
    console.log();
    let repetir = prompt("Querem jogar mais uma partida?").toLowerCase().trim();
    if (repetir == "sim") {
      for (let res = 0; res < rod; ) {
        rod--;
      }
      colun.splice(0);
      linh.splice(0);
      continue inicio;
    } else {
      break;
    }
  }

  rod++;
}

if (vitoriajogador1 > vitoriajogador2) {
  console.log();
  console.log(
    `${jog1} voce foi o grande campeao, ganhando ${vitoriajogador1} rodadas `
  );
  console.log();
  console.log("Bye Bye \\o// ");
} else if (vitoriajogador2 > vitoriajogador1) {
  console.log();
  console.log(
    `${jog2} voce foi o grande campeao, ganhando ${vitoriajogador2} rodadas `
  );
  console.log();
  console.log("Bye Bye \\o// ");
}

//_______________________funcao_______________________________\\

function comando(li, coluna, numero, item) {
  if (arraylinhas[li][coluna] != "-") {
    const ret = 0;
    return ret;
  } else if (arraylinhas[li][coluna] == "-") {
    arraylinhas[linh[numero]].splice(colun[numero], 1, item);
  }
}

function escolha(item2) {
  if (item2 == "X") {
    const it = "O";
    return it;
  }
  if (item2 == "O") {
    const itt = "X";
    return itt;
  }
}

function correcao(promp) {
  if (promp != "X" && promp != "O") {
    console.log();
    console.log('Entrada invalida sendo assim voce jogara com "X"');
    console.log();
    const it = "X";
    return it;
  }
  if (promp == "X" || promp == "O") {
    const itt = promp;
    return itt;
  }
}

function itemdavez(item1, item2, rod) {
  if (rod % 2 == 0) {
    const jogada1 = item2;
    return jogada1;
  } else if (rod % 2 != 0) {
    const jogada2 = item1;
    return jogada2;
  }
}

function jogdavez(jog1, jog2, rod) {
  if (rod % 2 == 0) {
    const jg1 = jog1;
    return jg1;
  } else if (rod % 2 != 0) {
    const jg2 = jog2;
    return jg2;
  }
}
