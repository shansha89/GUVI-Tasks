/* ############## 1.PRINT ODD NUMBER IN AN ARRAY ############# */

// ANONYMOUS FUNCTION
const arr1 = [1,2,3,4,5,6,7,8,9,10];

let oddNumbers = function(arr){
  
   for(let i of arr){
       if(i%2 != 0){
           console.log(i);
       }
   }
  
}
oddNumbers(arr1);

// IIFE FUNCTION
(function(){
    var arr1 = [1,2,3,4,5,6,7,8,9,10];
    for(let i of arr1){
        if(i%2 != 0){
            console.log(i);
        }
    }
})();

/* ######### 2.Convert all the strings to title caps in a string array ########### */
// ANONYMOUS FUNCTION
const arr2 = ["apple","orange","grapes","guva","banana"];

let stringUpper = function(arr){

    for(let i of arr){
        console.log(i.toUpperCase());
    }
}
stringUpper(arr2);

// IIFE FUNCTION

(function(arr){
    for(let i of arr){
        console.log(i.toUpperCase());
    }
})(arr2);

/* ############## 3. Sum of all numbers in an array  ############# */

//ANONYMOUS FUNCTION
const arr3 = [10,20,30,40,50];

let sum_of_array = function(arr){

    let sum = 0
    for(let i of arr){
        sum += i;
    }
    
    return sum;
}
console.log(sum_of_array(arr3));

//IIF
(function(arr){

    let sum = 0;
    for(let val of arr){
        sum += val;
    }
    console.log("Sum of Array = "+sum);
})(arr3);

/*################# 4. Return all the prime numbers in an array ################### */

//ANONYMOUS FUNCTION
const arr4 = [1,2,3,4,5,6,7,8,9,10,11];

let getPrimeNumbers = function(num) {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(arr4.filter(getPrimeNumbers));

  //IIFE
var primNumber = arr4.filter(function(num) {
    for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
});

console.log(primNumber);

/*################# 5. Return all the palindromes in an array ################### */

//ANONYMOUS FUNCTION
const arr5 = ['appa','did','apple','amma','madam','orange'];
const palindrome = [];

let getPalindrome = function(arr){

    for(let i=0; i<arr.length; i++){
      
       if(arr[i] == arr[i].toString().split('').reverse().join('')){
         palindrome.push(arr[i]);
       }
    }

    return palindrome;
}

console.log(getPalindrome(arr5));

//IIFE FUNCTION

(function(arr){

    for(let i=0; i<arr.length; i++){
        
      if(arr[i] == arr[i].toString().split('').reverse().join('')){
        console.log(arr[i]);
      }
   }
  
  })(arr5);

/*################# 6. Return median of two sorted arrays of the same size  ################### */

//ANONYMOUS FUNCTION
const arr6 = [1,3,5,7,9];
const arr7 = [2,4,6,8,10];

let median = function(arr6,arr7,n){

  let i = 0;
  let j = 0;
  let count;
  let m1 = m2 = -1;

  for(count = 0; count <= n; count++){

    if(i == n){
       m1 = m2;
       m2 = arr7[0];
       break;

    }else if(j == n){
      m1 = m2;
      m2 = arr6[0];
      break;
    }

    if (arr6[i] <= arr7[j])
    {
        m1 = m2; 
        m2 = arr6[i];
        i++;
    }
    else
    {
        m1 = m2; 
        m2 = arr7[j];
        j++;
    }

  }//END FOR

  return (m1 + m2)/2;
}//END FUNCTION

var n1 = arr6.length;
var n2 = arr7.length;

if(n1 == n2){
  console.log( median(arr6,arr7,n1));
}

//IIFE FUNCTION
const arr6 = [1,3,5,7,9];
const arr7 = [2,4,6,8,10];

var n1 = arr6.length;
var n2 = arr7.length;

( function(arr6,arr7,n){

  let i = 0;
  let j = 0;
  let count;
  let m1 = m2 = -1;

  for(count = 0; count <= n; count++){

    if(i == n){
       m1 = m2;
       m2 = arr7[0];
       break;

    }else if(j == n){
      m1 = m2;
      m2 = arr6[0];
      break;
    }

    if (arr6[i] <= arr7[j])
    {
        m1 = m2; 
        m2 = arr6[i];
        i++;
    }
    else
    {
        m1 = m2; 
        m2 = arr7[j];
        j++;
    }

  }//END FOR

  console.log((m1 + m2)/2);
})(arr6,arr7,n1);//END FUNCTION

/* ################# 7. Remove duplicates from an array  ################### */

//ANONYMOUS FUNCTION
const arr8 = ['c','java','python','java','php','c'];

let removeDuplicates = function(arr){
  return arr.filter((value, 
    index) => arr.indexOf(value) === index);
}

console.log(removeDuplicates(arr8));

//IIFE
const arr9 = ['c','java','python','java','php','c'];

(function(arr){
  console.log( arr.filter((value, 
    index) => arr.indexOf(value) === index));
})(arr9);

/* ################# 8. Rotate an array by k times  ################### */

//ANONYMOUS FUNCTION
const arr10 = [4,5,3,2,1];
let k = 3;

const rotateArray = function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}

console.log(rotateArray(arr10,k));

//IIFE
const arr11 = [4,5,3,2,1];
let k = 3;

(function(nums, k){
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
}

console.log(nums);
})(arr11,k);


