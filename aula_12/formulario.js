class Formulario{

    constructor(nome,data,contato,email){

        this.nome = nome;
        this.data = data;
        this.contato = contato;
        this.email = email;

    }


        cumprimento(){

        console.log('Ola SEJAM BEM VINDOS')

        }

        cadastrar(){

            console.log('nome:' +this.nome)
            console.log('data de nascimento:' +this.data)
            console.log('contato:' +this.contato)
            console.log('email:' +this.email)

        }  

    }   

let nome = prompt('digite seu nome:')
let data = prompt('digite sua data de nascimento:')
let contato = prompt('digite seu contato:')
let email = prompt('digite seu email:')

let form = new Formulario(nome , data , contato , email)
form.cadastrar()