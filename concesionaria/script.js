// // let nome  =  prompt('Digite seu nome:  ')

// let btn =  document.getElementById("btn")

// // decisões  -> tomada de decisão
// // condiçao esta no parenteses
// // decisão esta nas chaves

// btn.addEventListener("click", function () {
// let dado = document.getElementById("texto").value.toString()


// if (dado == "Julia"){
    


//         console.log('Seja bem vinda 1 ' + dado)
    

// }
// else if(dado == "Carlos"){

    

//         console.log('Seja bem vindo 2  ' + dado)
    


    

// }else{



//         console.log('Seja bem vindo 3 ' + dado)
    

// }
// });



// let ano_nascimento  =  prompt('Digite o ano:  ')


// if (ano_nascimento >= 2020){

// console.log('Você tem 26 ou mais')


// }else{

//     console.log('Você provavelmente tem mais que 26 anos ')

// }




// let cidade =  prompt('Digite a cidade:  ')



// if (cidade  ==='Guarulhos'){
// console.log('Nossa cidade, cidade de  ' +  cidade)
// }
// else if (cidade  === 'São Paulo' ){
// console.log('Cidade da garoa cidade de  ' + cidade )
// }
// else{
// console.log('Qualquer outra cidade, cidade de  ', cidade)
// }



// let carta_motorista  =  prompt('Possui carta de motorista? s / n')
// let idade =  prompt('Idade: ')

// if (carta_motorista == 's' && idade >= 18){
    
        
//       alert('Pode dirigir!')

    
// }else{

//   console.log('Não pode dirigir!')

// }






// if (carta_motorista == 's'){
//     if (idade >= 18) {
        
//       console.log('Pode dirigir!')

//     }
// }else{

//   console.log('Não pode dirigir!')

// }



let modelo  = prompt('DIGITE O MODELO DO VEÍCULO: ')
let valor = prompt('QUAL VALOR DESEJA INVESTIR: ')
let corVeiculo = prompt('QUAL COR VOCÊ ACHA INTERESSANTE')



if (modelo === 'Jeep' && valor <= 70000 && corVeiculo == 'preta'  ){


    console.log('Mande a proposta do financiamento!')


}else if (modelo != 'Jeep' && valor <= 70000 && corVeiculo == 'preta'){

    console.log('Seria interessante conversar com o vendedor')

}else if (modelo != 'Jeep' && valor > 70000 && corVeiculo =='preta' ){

    console.log('Envie as fotos do veículo')

} else{

console.log('Não optante')

}


