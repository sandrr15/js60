function calcularIMC(){

const peso = (document.getElementById('peso').value);
const altura = (document.getElementById('altura').value);
const imc = peso / (altura * altura);
document.getElementById('resultado').innerHTML = 'IMC:' + imc.toFixed(2);

}