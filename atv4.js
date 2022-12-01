/*Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.*/

const numeroLimite = 250
let contador = 1

for (contador; contador<=numeroLimite; contador++){
    console.log(contador)

    if(contador%3==0 && contador%5==0){
    document.write('Múltiplos de 3 e de 5:' + contador + '<br />')
    }
    else if(contador%3==0){
    document.write('Múltiplos de 3:' + contador + '<br />')
    }
    else if(contador%5==0){
    document.write('Multiplos de 5:' + contador + '<br />')
    }
}


/*const num = parseInt(250)
    let contador = parseInt(1)
    for (contador; contador <= num; contador++) {
        if (contador%3==0 && contador%5==0){
            console.log(`é multiplo de 3 e 5 ${contador}`)
        }
        else if (contador%3==0){
            console.log(`multiplo de 3 é ${contador}`)
        }
        else if (contador%5==0){
            console.log(`multiplo de 5 é ${contador}`)
        }
        
    }*/

    /*for (let i = 0; i < numerolimit; i++) {
    if (i%3==0 && i%5==0){
        console.log("é multiplo de 3 e 5")
        console.log(i)
    }
    else if (i%3==0){
        console.log("multiplo de 3")
        console.log(i)
    }
    else if (i%5==0){
        console.log("multiplo de 5")
        console.log(i)
    }else{
        console.log(i)
    }
}*/