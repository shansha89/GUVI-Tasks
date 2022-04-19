/* ############## 1.PRINT ODD NUMBER IN AN ARRAY ############# */
const arr1 = [1,2,3,4,5,6,7,8,9,10];

let oddNumbers = (arr) => {

  for(let i of arr){
    if(i%2 != 0){
        console.log(i);
    }
  }
  
}

oddNumbers(arr1);

/* ############## 2. Convert all the strings to title caps in a string array ############# */
const arr2 = ["apple","orange","grapes","guva","banana"];

let stringUpper = (arr) => {

    for(let i of arr){
        console.log(i.toUpperCase());
    }
}
stringUpper(arr2);

/* ############## 3. Sum of all numbers in an array ############# */
const arr3 = [10,20,30,40,50];

let sum_of_array = (arr)=>{

    let sum = 0
    for(let i of arr){
        sum += i;
    }
    
    return sum;
}
console.log(sum_of_array(arr3));

/* ############## 4. Return all the prime numbers in an array ############# */
const arr4 = [1,2,3,4,5,6,7,8,9,10,11];

let getPrimeNumbers = (num) => {
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(arr4.filter(getPrimeNumbers));


/* ############## 5. Return all the palindromes in an array ########### */
const arr5 = ['appa','did','apple','amma','madam','orange'];
const palindrome = [];

let getPalindrome = (arr) => {

    for(let i=0; i<arr.length; i++){
      
       if(arr[i] == arr[i].toString().split('').reverse().join('')){
         palindrome.push(arr[i]);
       }
    }

    return palindrome;
}

console.log(getPalindrome(arr5));
