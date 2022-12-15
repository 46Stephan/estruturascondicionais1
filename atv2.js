/*Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.*/

let n1 = parseFloat(prompt('Digite o numero 1'));
let n2 = parseFloat(prompt('Digite o numero 2'));
let operacao = prompt('Qual opera você irá fazer? * = Multiplicação \n + = Adição \n - = Subtração \n / = Divisão')
let resultado = 0

switch (operacao) {
    case "*":
        resultado = n1 * n2;
        break;
    case "+":
        resultado = n1 + n2;
        break;
    case "-":
        resultado = n1 - n2;
        break;
    case "/":
        resultado = n1 / n2;
        break;
    default:
        document.write('Opção inválida!')
        break;
}

document.write(resultado)