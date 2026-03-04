function calculo_trabalhista(){

let nome = prompt('digite seu nome:')
let horas = Number(prompt('digite suas horas trabalhadas'))
let salario_por_hora = ('7')
let calc = (horas * salario_por_hora)
let calc_horas_extras = (calc * 0.5)

let horas_extras = prompt('voce fez horas extras? s/n')

if(horas_extras =='s'){

let calc_total = (calc + calc_horas_extras)
alert('seu salario é' + ' '  + calc_total + ' ' + 'calculado com as horas extras'+' '+nome)

    }else{

        alert('esse é seu salario' +' '+ calc + ' ' + nome)

   }



 }

calculo_trabalhista()
