let prompt = require('prompt-sync')()

inici : while(true){ let qua = +prompt('Quantas rodadas de jokenpô está animado a disputar?').trim()
     var cnt = 0
     var pc = 0
     var hum = 0
      console.clear()
  while(qua > cnt){
    let entr = prompt('Pedra , papel ou tesoura?').toUpperCase().trim()
    let ppt = ['PEDRA' ,'PEDRA', 'PAPEL', 'PAPEL' , 'TESOURA','TESOURA']
    let mix = Math.floor(Math.random()*ppt.length)
    cnt++

    if(entr == ppt[mix]){
      console.log(ppt[mix]+' VS '+entr+' . dessa vez empatamos')}
      
    else if(entr == 'PEDRA' && ppt[mix] == 'TESOURA' || entr == 'TESOURA' && ppt[mix] == 'PAPEL' || entr == 'PAPEL' && ppt[mix] == 'PEDRA' ){
      console.log(entr+' VS '+ppt[mix]+' . dessa vez você ganhou' )
        hum++ }
      
    else{console.log(entr+' VS '+ppt[mix]+' . dessa vez eu ganhei' )
      pc++} 
  }
  
if(pc > hum){
  console.log('I.A ganhou '+pc+' rodada e você ganhou '+hum+' rodada')
  console.log('I.A é a grande campeã')}

else if(hum > pc){ 
  console.log('Você ganhou '+hum+' rodada e a I.A ganhou '+pc+' rodada')
  console.log('Você é o grande campeão')}

else{
    console.log('Rolou empate,cada um ganhou '+pc+' rodada')}

 let ret = prompt('Quer jogar novamente ?').toLowerCase().trim()

  if (ret == 'sim'){continue inici}

    else if(ret != 'sim'){
      console.log('Bye Bye')
      break;
    }
 }