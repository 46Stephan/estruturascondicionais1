/*Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores

positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos. */

let n10 = [];
let soma = 0;
let media = 0;
let valorPositivo = 0;
let valorNegativo = 0;


do{
    n10.push(parseInt(prompt("Digite um numero: ")));

}while(n10.length <= 9);

for(let i = 0; i < n10.length; i++){
    soma += n10[i];
    media = soma / n10.length;

    if(n10[i] > 0){
        valorPositivo += 1;
    }else if(n10[i] < 0){
        valorNegativo += 1;
    }
} 

let percentPositivo = operacao1(valorPositivo, n10);
let percentNegativo = operacao2(valorNegativo, n10);

function operacao1(valorPositivo, n10) {

    let result = 0;

        result = (valorPositivo / n10.length) * 100;

    return parseInt(result);

}

function operacao2(valorNegativo, numeroDez) {

    let result = 0;

         result = (valorNegativo / numeroDez.length) * 100;

    return parseInt(result);

}

document.write('A soma total é: ' +soma+ '<br />');
document.write('Sua média é: ' + media+ '<br />');  
document.write('A quantidade de números positivos vai ser: ' +  valorPositivo+ '<br />');
document.write('A quantidade de números negativo vai ser: ' +  valorNegativo+ '<br />');
document.write('O percentual de números positivos é de: ' + percentPositivo, '%'+ '<br />');
document.write('O percentual de números negativos é de: ' + percentNegativo, '%'+ '<br />');