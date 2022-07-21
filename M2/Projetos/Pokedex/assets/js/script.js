async function pokemons() {
  const Nome = document.querySelector("#nome");
  // console.log(Nome);
  const Imagem = document.querySelector("#imagem");
  // console.log(Imagem);
  const Numero = document.querySelector("#numero");
  // console.log(Numero);
  const Tipo = document.querySelector("#tipo");
  // console.log(Tipo);
  const Descrição = document.querySelector("#descricao");
  // console.log(Descrição);

  const i = 25;
  const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/");
  const dados = await resultado.json();
  console.log(dados);

  const imags = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + 25 + ".png"

  Imagem.src = imags;
  Nome.textContent = dados.name;
}

pokemons();
