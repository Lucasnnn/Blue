let prompt = require('prompt-sync')()

inici : while(true){ 
  console.clear()
  let qua = +prompt('Quantas rodadas de jokenpô está animado a disputar?')
if(qua / qua == 1){
  var pc = 0
  var hum = 0
  console.clear()
  
  for(let i = 0 ; qua > i ; i++){
    console.log()
    let entr = prompt('Pedra , papel ou tesoura?').toUpperCase().trim()
    if (entr == 'PEDRA' || entr == 'PAPEL' || entr == 'TESOURA' ){
    console.clear()
    let ppt = ['PEDRA' ,'PEDRA', 'PAPEL', 'PAPEL' , 'TESOURA','TESOURA']
    let mix = Math.floor(Math.random()*ppt.length)
  
    
    if(entr == ppt[mix]){
      console.log(ppt[mix]+' VS '+entr+' . dessa vez empatamos')}
      
    else if(entr == 'PEDRA' && ppt[mix] == 'TESOURA' || entr == 'TESOURA' && ppt[mix] == 'PAPEL' || entr == 'PAPEL' && ppt[mix] == 'PEDRA' ){
      console.log(entr+' VS '+ppt[mix]+' . dessa vez você ganhou' )
        hum++ }
      
    else{console.log(entr+' VS '+ppt[mix]+' . dessa vez eu ganhei' )
      pc++} 
    }else{
      console.log('Entrada invalida , vamos tentar novamente , ok ?')
      i--}
  }

  if(pc > hum){console.log()
  console.log('I.A ganhou '+pc+' rodada e você ganhou '+hum+' rodada')
  console.log()
  console.log('I.A É A GRANDE CAMPEÃ')}

  else if(hum > pc){ console.log()
  console.log('Você ganhou '+hum+' rodada e a I.A ganhou '+pc+' rodada')
  console.log()
  console.log('VOCÊ É O GRANDE CAMPEÃO')}

  else{
  console.log()
  console.log('Ficamos empatados,cada um ganhou '+pc+' rodada')}
 console.log()
 let ret = prompt('Quer jogar novamente ?').toLowerCase().trim()
  if (ret == 'sim'){continue inici}
    else if(ret != 'sim'){
      console.clear()
      console.log('Bye Bye "\\o/" ')
      break;
    }
}else {console.log()
  console.log("Digite apenas numeros.")
  console.log()
  let rest = prompt('Enter pra reboot...')
continue inici}  
}
