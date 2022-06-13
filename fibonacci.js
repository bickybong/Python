// Time complexity is O(2^n-1) => O(2^n)

function fib(n){
    if (n===0) return 0;
    if (n===1) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(4))