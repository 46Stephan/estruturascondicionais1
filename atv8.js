/*Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).*/

const numero = prompt('Informe um número maior do que zero:');

for (let contador = 1; contador <= 10; contador++) {
    document.write(numero + 'x' + contador + '=' + numero * contador + '</br >' + '</br >');
}