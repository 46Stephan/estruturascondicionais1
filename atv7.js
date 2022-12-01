/*Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.*/

let velocidade = parseFloat(prompt('Insira a velocidade do carro:'));
let excesso = velocidade - 80;
const multa = 5

if(velocidade>80){

    alert(`Você foi multado em: R$ ${excesso*multa} reais.`);

}else{
    alert(`Você está dirigindo dentro do limite permitido!`);
}