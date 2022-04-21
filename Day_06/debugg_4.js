/* ############################################
    URL: https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d
################################################ */

// Find the culprits and nail them — debugging javascript

// Fix the code to get the largest of three.
// aa = (f,s,t) => {
//     let f,s,t;
//     console.log(f,s,t);
//     if(f>s &&f>t){
//     console.log(f)}
//     else if(s>f && s>t){
//     console.log(s)}
//     else{
//     console.log(t)}
//    }
//    aa(1,2,3);
let f,s,t;
aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);


// Fix the code to Sum of the digits present in the number
// let n = 123;
// console.log(add(n));
// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }
let n = 123;
console.log(add(n));
function add(n) {
    let sum = 10;
    for (var i = 0; i < 1; i++) {
        sum += n
    }
    return sum;
}


// Fix the code to Sum of all numbers using IIFE function
// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i <= arr.length; i++);{
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {

    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
})(arr);


// Fix the code to gen Title caps.
// var arr = [“guvi”, “geek”, “zen”, “fullstack”];
// var ano = function(arro) {
//  for (var i = 0; i <= arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano();
var arro = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
    for (var i = 0; i < arro.length; i++) {
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}
ano(arro);


// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<=num;i++){
//  if(num%i===0)
//  {
//  return true;
//  }
//  }
//  return num===1;
// });
// console.log(myPrime);
const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    for(let i=2;i<num;i++){
    if(num%i===0){
  return false;
  }
  }
  return num;
 }); 
console.log(myPrime);


// Fix the code to sum the number in that array
// const num = [10, 20, 30, 40,50,60,70,80,90,100]
// const sum = (a, b) =>
//  a + b
// const sum = num.reduce(sum)
// console.log(sum);
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let sum = (a, b) =>
    a + b
sum = num.reduce(sum)
console.log(sum);


// Fix the code to rotate an array by k times and return rotated array using IIFE function
// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  arr = {};
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 //arr = {};
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})(arr);


 // Fix the code to gen Title caps.
// var arr = [“guvi”, “geek”, “zen”, “fullstack”];
// (function() {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
//  }
// })();
var arr = ["guvi", "geek", "zen", "fullstack"];
(function () {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
})(arr);


// print all odd numbers in an array using IIFE function
// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//  console.log(arr[i]);
//  }}
// })();
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(arr);


// Fix the code to reverse.
// (function(str){
//  str1 = str.split(“ “).reverse().join(“”);
//  console.log(str1);
// })(“abcd”)

(function (str) {
    str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd")


// Fix the code to remove duplicates.
// var res = function(arr){
//  for(var i=0; i < arr.length; i++){
//  newArr = [];
//  if(newArr.indexOf(arr[i]) == -1) {
//  newArr.push(arr[i]);
//  } }
//  console.log(newArr)
// }
// res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])
var res = function (arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {

        if (newArr.includes(arr[i].toLowerCase())) {
            continue
        }
        newArr.push(arr[i]);

    }
    console.log(newArr)

}
res(["guvi", "geek", "guvi", "zen", "duplicate", "geeK"])


// Fix the code to give the below
// Sum of odd numbers in an array
// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(s);
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.filter(function (c) {
    if (c % 2 != 0) {
        return c;
    }
}).reduce((a, c) => a + c);
console.log(s);