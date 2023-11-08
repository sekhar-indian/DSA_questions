/* 2.sum of digits of a Number
 124=1+2+4=7 */

function sum(n){
    sum=0;
    while(n>0){
        sum+=n%10;
        n=Math.floor (n/10);
    }
    return sum;
}

console.log(sum(134));