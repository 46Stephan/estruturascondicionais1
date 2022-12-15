/*Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:*/

const peso = parseFloat(prompt('Informe o peso:'));
const idade = prompt('Informe a idade:');

if (idade <= 12) {
    alert('Infantil')
} else if (idade >= 3 && idade <= 16 && peso <= 40) {
    alert('Juvenil leve')
} else if (idade >= 13 && idade <= 16 && peso > 40) {
    alert('Juvenil pesado')
} else if (idade >= 17 && idade <= 24 && peso <= 45) {
    alert('Sênior leve')
} else if (idade >= 17 && idade <= 24 && peso > 45 && peso <= 60) {
    alert('Sênior médio')
} else if (idade >= 17 && idade <= 24 && peso > 60) {
    alert('Sênior pesado')
} else {
    alert('Veterano')
}