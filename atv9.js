/*Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo; */

let maior = 0;
let menor = 0;

for(let contador = 0; contador<15; contador++){
    let altura = parseFloat(prompt('Digite a altura:'));

    if(menor==0){
        menor = altura

    }else if(altura>maior){
        maior = altura

    }else{
        menor = altura
    }

}
document.write('A maior altura é: ' +maior+ '</br >.');
document.write('A menor altura é: ' +menor+ '</br >.');