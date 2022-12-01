/*Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:*/

let limite = Number(prompt('Digite um número:'));

    document.write('Contagem: ');
for(let contador=0; contador<=limite; contador++){
    document.write(contador + ',');
}
document.write('FIM!');