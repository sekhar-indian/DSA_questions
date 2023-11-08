////1.sum n natural numbers
function sum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(sum(10));

/*function sum(n){
    
    return n*(n+1)/2;
}

console.log(sum(10)); */