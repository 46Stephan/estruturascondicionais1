/*Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16... */

let numero1 = 30;
let numero2 = 1;

for (let contador = numero1; contador >= numero2; contador--) {
    let div = 0;
    for (let contagem = 2; contagem < contador; contagem++) {
        if (contador % contagem == 0) {
            div = 1;
            break
        }
    }

    if (contador > 1 && div == 0) {
        document.write('[' + contador + ']..');
    } else {
        document.write(contador + '..')
    }
}