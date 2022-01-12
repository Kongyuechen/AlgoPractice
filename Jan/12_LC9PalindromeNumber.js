/*
Problem:
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
*/

/*
Intial Thoughts:
So how would I do this?
I think the best method I can think of currently is to have two pointers
checking if both the first number at the first pointer is the same as the
second number at the second pointer while moving the pointers towards the center.

Like so
1234
^  ^
is 1 and 4 equal? no --> Return false
121
^ ^
is 1 and 1 equal? yes --> Move the pointer towards the center and repeat check.
121
 ^
If pointer 1 and 2 equals to same position, return true.
*/

//Code
const testFalse = 12341;
const testEvenTrue = 12233221;
const testOddTrue = 1223221;

const palindrome = (integer) => {
  //Convert Int to String to count length of number to be used for pointer
  let intString = integer.toString();
  //Get Length of number
  let strLen =  intString.length();
  //Create 2 Pointers
  let pointer1 = 1;
  let pointer2 = strLen - 1

  for(let i = pointer1; i <= pointer2 ;i++){
    let firstEle = intString[i];
    for(let y = pointer2; y >= i; y--){
      let secondEle = intString[y];
      if(i === y) return true;
      if(firstEle !== secondEle) {
        return false
      }
    }
  }
  return true;
};

palindrome(testFalse);
