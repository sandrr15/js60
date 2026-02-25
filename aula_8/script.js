// nome  =  estrutura de dado


// for (i = 1; i<=3 ;i++){


//      console.log('contagem', i)
     
   


// }


// restaurante


// cadastra 
// quarto




let nomes = []
let mesas =  ['','1 - Mesa 4 ', '2 - Mesa 6', '3 - Mesa  8']
let valores =  []
let mesas_valores  =  [0,50.0,80.0,150.0]


for (x = 0; x < 3; x++){
     alert('CADASTRE - SE: ')
     let nome  =  prompt('Digite seu nome: ')
     let escolha  =  prompt('Escolha sua mesa: mesa 1 (50) |  mesa 2 (80) mesa 3 (150) ')
     let quantidade  =  Number(prompt('Quantidade de pessoas: '))
     nomes.push(nome)
     valores.push(mesas_valores[escolha])
     console.log(nomes)
     console.log(valores)
     
     if (escolha == 1){


       let  calculo = quantidade * mesas_valores[1]


       console.log('Mesa escolhida -  ' +  mesas[1]) 
       console.log('R$', calculo) 


     }else if(escolha == 2){


       let  calculo = quantidade * mesas_valores[2]
       console.log('Mesa escolhida -  ' +  mesas[2]) 
       console.log('R$', calculo) 




     }else if(escolha == 3){


       let  calculo = quantidade * mesas_valores[3]
       console.log('Mesa escolhida -  ' +  mesas[3]) 
       console.log('R$', calculo) 




     }else{


      console.log('Digite algo válido')


     }
  
    


}






