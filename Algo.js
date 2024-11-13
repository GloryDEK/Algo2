///Fibonacci Sequence

function fibonacci(n){
    const fib = [0, 1]; // declaration de la variable
    for(let i = 2; i < n; i++){ // boucle et initiation a 2
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;  // retourne la valeur selon application de la suite de fibonacci
}

// console.log(fibonacci(7));
console.log(fibonacci(20));