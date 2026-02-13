function somar(){

const numero1 = parseFloat(document.getElementById('numero1').value);
const numero2 = parseFloat(document.getElementById('numero2').value);
const soma = (numero1 + numero2);
return document.getElementById('resultado').innerHTML =  + soma


}

function subtrair(){

const numero1 = parseFloat(document.getElementById('numero1').value);
const numero2 = parseFloat(document.getElementById('numero2').value);
const subtrair = (numero1 - numero2);
return document.getElementById('resultado').innerHTML =  + subtrair

}

function dividir(){

const numero1 = parseFloat(document.getElementById('numero1').value);
const numero2 = parseFloat(document.getElementById('numero2').value);
const dividir = (numero1 / numero2);
return document.getElementById('resultado').innerHTML =  + dividir

}

function multiplicar(){

const numero1 = parseFloat(document.getElementById('numero1').value);
const numero2 = parseFloat(document.getElementById('numero2').value);
const multi = (numero1 * numero2);
return document.getElementById('resultado').innerHTML =  + multi

}