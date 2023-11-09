/* 3.count of number of digitd of a number
34252=5
*/

function f(n){
    n=Math.floor(n);
    let count=0;
    while(n>0){
      count++;
      n=Math.floor(n/10);
 
    }
    return count;
  }
  
  console.log(f(55))