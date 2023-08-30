Problem: Calculate Factorial
Write a TypeScript function that calculates the factorial of a given positive integer n. The factorial of a positive integer n is the product of all positive integers from 1 to n.


  //Solution:

  function calculateFactorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(0)); // Output: 1
console.log(calculateFactorial(1)); // Output: 1
