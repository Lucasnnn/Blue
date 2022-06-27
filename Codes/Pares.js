const prompt = require('prompt-sync')()
console.log()
let quanti = prompt('Quantos numeros quer que eu organize e compare entre pares e impares ?')
let par = []
let impar = []

for(let i = 0; i < quanti;){
    console.log();
    let per = +prompt(`Me informe ${quanti} numeros inteiros por favor :`); 
    console.clear();
 if(per/per != 1 ){console.log('Digite apenas numeros') ; i--}
  else if (per % 2 == 0){par.push(per)} 
   else if(per % 2 != 0){impar.push(per)}
    else if (per % 1 != 0){console.log("Insira numeros inteiros por favor ")}
i++
    
}
console.clear();
console.log("Pares : " + par);
console.log()
console.log('Impares :' +  impar);
console.log()
console.log('Todos :' + par + impar);
console.log();