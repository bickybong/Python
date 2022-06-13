// Time complexity O(n!)

function f(n){
    if (n===0){
        console.log("end")
        return 1
    }

    for (let i=0; i<n; i++){
        f(n-1);
    }
}

console.log(f(5))