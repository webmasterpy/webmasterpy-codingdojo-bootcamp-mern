function quicksort(array_numeros){
    if(array_numeros.length<=1){
        return array_numeros;
    }else{
        let pivote = array_numeros[0];
        let num_izq = [];
        let num_der = [];

        for(let i= 1; i<array_numeros.length; i++){
            (array_numeros[i] <= pivote ? num_izq.push(array_numeros[i]) : num_der.push(num_der[i]));
        }

        return [...quicksort(num_izq), pivote, ...quicksort(num_der)];
    }
}

function quicksort(arrNumeros){
    if( arrNumeros.length <= 1){
        return arrNumeros
    }
    else{
        let pivote = arrNumeros[0];
        let numerosOrdenadosIzq = [];
        let numerosOrdenadosDer = [];

        for (let i=1; i<arrNumeros.length; i++){
            ( arrNumeros[i] <= pivote ? numerosOrdenadosIzq.push(arrNumeros[i]) : numerosOrdenadosDer.push(arrNumeros[i]))
        }
        return [...quicksort(numerosOrdenadosIzq), pivote, ...quicksort(numerosOrdenadosDer)]
    }
}


//let arreglo = [2, 4, 2 5, 7, 2, 6, 9, 12, 44, 22, 12, 2];
let arreglo =[2, 4, 1, 5, 7, 2, 6, 1, 1, 6, 4, 10, 33, 5, 7, 23];

console.log(quicksort(arreglo));