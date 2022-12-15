/*Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.*/

let altPedro = parseFloat(1.50);
let altLucas = parseFloat(1.10);
let anos = 0

while (altPedro >= altLucas) {
    altPedro += 0.02;
    altLucas += 0.03;
    anos++;
}

document.write('Será necessário ' + (anos - 1) + ' anos para que Lucas e Pedro tenham a mesma altura.' + '<br />');


document.write('Será necessário ' + anos + ' anos para que Lucas seja mais alto que Pedro!' + '<br />');

