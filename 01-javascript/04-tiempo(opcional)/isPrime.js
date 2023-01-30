/** Calcular numeros primos */
Number.prototype.isPrime = function () {
    
    for (let i = 2; i <= Math.floor(Math.sqrt(this)); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
let start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo

function calcularPrimos(numerosACalcular) {
    while (primeCount < numerosACalcular) {
        if (num.isPrime()) {
            primeCount++;
        }
        num++;
    }

    console.log(`The ${numerosACalcular}th prime number is ${num - 1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run \n\n`);
}

//10,000 numeros primos
calcularPrimos(1e4);

//100.000 numeros primos
calcularPrimos(1e5);

//1.000.000 numeros primos
calcularPrimos(1e6);