class Cachorro{
        constructor(nome , raca , idade , cor){

            this.nome = nome;
            this.raca = raca;
            this.idade = idade;
            this.cor = cor;

        }

        display(){

            console.log('nome:' +this.nome)
            console.log('raça:' +this.raca)
            console.log('idade:' +this.idade)
            console.log('cor:' +this.cor)

        }




}

let MeuCachorro = new Cachorro('leo','shitzu','4','marrom')
let OutroCachorro = new Cachorro('luan','yorkshile','10','preto')
MeuCachorro.display()
OutroCachorro.display()