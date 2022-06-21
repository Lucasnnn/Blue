const prompt = require('prompt-sync')();
const autonomia = [614,1]
const kmdodia = []
const cargadodia = []

dados = {
  user : prompt('Qual nome do usuario ?') ,

  rapido : 0 ,
  lento : 0 ,
  
  kilometragem : 0,
  
    rodar : function(){
      console.clear()
    let kms = +prompt('Quantos km vai rodar no veiculo hoje ?')
      kmdodia.splice(0,1,kms)
      console.clear()
    let auto = simOUnao(`Pretende usar o modo autonomo de direcão ?

Se ativado ele aumenta o consumo de bateria e diminui em 10 % sua autonomia.`)
      console.clear()
      if(auto == 0){let autono = autonomia[0]*0.9 ;
                    autonomia.splice(0,1,autono);
                    autonomia.splice(1,1,auto)
                   }else if (auto == 1){autonomia.splice(1,1,auto);}
  
      if(kms > autonomia[0]){
        console.clear()
        let cargas = carga(kms,autonomia[0],auto)
          cargadodia.splice(0,1,cargas)
        console.log(`Ops , ${this.user} como seu tesla possui apenas ${autonomia[0]} kilometros de autonomia , vai ser preciso fazer ${cargas} recargas durante o dia/percurso.`)
        
        console.log()
        console.log('Temos dois modos de recarga : modo rapido ou lento ; a lento demora em torno de 3 horas e a rapido metade deste tempo , porem o lento preserva a vida util da sua bateria')
        console.log()
        
        let recarga = simOUnao('Prentede fazer essas recargas no modo rapido?')
         if(recarga == 0){let srapido = this.rapido + cargas ; this.rapido = srapido}
         if(recarga == 1){console.log('Vamos de modo lento então.')
           let slento = this.lento + cargas ; this.lento = slento }
      }
    let soma = this.kilometragem + kms 
    this.kilometragem = soma
  },
}


//_____________________base___________________\\
console.clear()
console.log(`Ola ${dados.user} , me chamo Clarice sou uma interface integrada ao seu Tesla model Z .

Estou aqui para coletar alguns dados da forma de uso do veiculo e te deixar atualizado sobre algumas informações atuais e previsoes futuras do veiculo.`)
console.log()
let comecar = prompt('Antes de iniciar , concorda com os termos de dados e privacidade ?')
console.clear()

console.log('Leve em consideracao que sou uma versão de teste ,e você tera apenas 7 dias de acesso . Entao vou precisa que me informe os dados manualmente , e para as perguntas so consigo analisar sim ou nao , e numeros.')
let comeca = prompt('')
console.clear()


//______________ inicio _______________\\

for(let i = 1;i<=7;i++){
  console.clear()
 autonomia.splice(0,1,614)
 let usar = simOUnao(`Ola ${dados.user},
Bem vindo ao ${i}º dia de teste , pretende usar o veiculo hoje ?`)
  if(usar == 1){console.clear();
    console.log('Ok , amanha nos vemos.');
               continue;}
  
dados.rodar()

const dodia = Math.floor(rodadosdia(cargadodia , kmdodia , autonomia[0] , autonomia[1] ))
 autonomia.splice(0,1,dodia)
  console.clear()
  
console.log(`${dados.user} hoje você rodou ${kmdodia} kilometros,e fez ${cargadodia} recargas , ficando sobrando ${dodia} kilometros de autonomia ,recomendo que coloque o carro pra recarregar para que amanhã possua autonomia completa.`)
console.log()
let novodia = prompt('Para encerrar esse dia press enter...')

}


console.clear()
if(dados.rapido > dados.lento){
  console.log(`Chegamos ao fim do nosso tempo de teste , nesses 7 dias você rodou um total de ${dados.kilometragem} kilometros , fez um total de ${dados.rapido} recargas rapidas e ${dados.lento} recargas lentas , sendo assim a vida util da sua bateria daqui a 5 anos vai ter perdido 30 % da sua eficacia de reserva energetica`)
}

if(dados.lento > dados.rapido ){
  console.log(`Chegamos ao fim do nosso tempo de teste , nesses 7 dias você rodou um total de ${dados.kilometragem} kilmoetros, fez um total de ${dados.rapido} recargas rapidas e ${dados.lento} recargas lentas , sendo assim a vida util da sua bateria tera uma grande longevidade`)
}

//________ funcoes _________\\

function simOUnao(texto){
  while(true){
    console.log()
   console.log(texto)
    let entrada = prompt('')
   if( entrada == 'sim'){const sim = 0 ; return sim ; break;}
    else if(entrada == 'nao'){const nao = 1 ; return nao;break;}
     else if (entrada != 'sim' && prompt != 'nao'){
       console.clear()
       console.log('Entrada invalida , tente novamente.')
       continue;
      }
  }
}

function carga(kms,autonomia,auto){
  let subtrair = kms - autonomia
  if(auto == 0 ){let divi = Math.ceil(subtrair/552,6) ; return divi}
  if(auto == 1 ){let divi = Math.ceil(subtrair/614) ; return divi}
}

function rodadosdia(cargadia,kmdia,autonomia0,autonomia1){
  if(autonomia1 == 0 ){
    let recar = cargadia*552.6
    let total = recar + autonomia0
    let resultado = total - kmdia
    return resultado
  }

  if(autonomia1 == 1 ){
    let recar = cargadia*614
    let total = recar + autonomia0
    let resultado = total - kmdia
    return resultado
  }
}