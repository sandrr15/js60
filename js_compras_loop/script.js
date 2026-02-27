let itens = ['pc','monitor','mouse','mousepad','teclado']
alert(itens)

let carrinho = []
let acessar_loop = prompt('voce deseja comprar algo?? s/n')

while (acessar_loop == 's'){

    for(n = 0;n <= 5;n++){

    let item1 = Number(prompt('digite o ID do item'))
    carrinho.push(itens[item1])

    }
while (acessar_loop == 'n'){

break

}
let remover_algo = prompt('voce deseja remover algo? s/n')

while (remover_algo == 's'){
    for(i = 0;n <= 5;n++){

    let remove = Number(prompt('qual item voce deseja deletar?informe o id'))
    carrinho.splice(remove, 1)

}
}
while (remover_algo == 'n'){

break

}

    
}

alert(carrinho)

