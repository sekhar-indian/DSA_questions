/* 4.(9. Palindrome Number 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

var isPalindrome = function(x) {
    // let v=x;
    // let r=0;
    // while(v>0){
    //     const l=v%10;
    //     r=r*10+l
    //     v=Math.floor(v/10);
        
   
    // }
    //  return x==r;

    var s=x.toString();
    var t=s.split("").reverse().join("");
    return s==t;
   
   };