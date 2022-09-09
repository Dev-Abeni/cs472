let numbersArray = [1, 2, 3, 4];
let text = "jag testar";
let wordsArray = ["henry", "francisco", "charles"];

console.log(max(12, 22));
console.log(maxOfThree(72, 62, 54));
console.log(isVowel('e'));
console.log(sum(numbersArray));
console.log(multiply(numbersArray));
console.log(reverse(text));
console.log(findLongestWord(wordsArray));
console.log(filterLongWords(wordsArray, 5));

function max(x, y){
    if(x >= y){
        return x; 
    }else{
        return y;
    }
}

function maxOfThree(x, y, z){
    if(x > y && x > z){
        return x; 
    }else if(y > x && y > z){
        return y; 
    }else{
        return z;
    }
}

function isVowel(c){
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    if(vowels.includes(c)){
        return true; 
    }

    return false;
}

function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum;
}

function multiply(array){
    let multiply = 1; 
    for(let i = 0; i < array.length; i++){
        multiply *= array[i];
    }

    return multiply;
}

function reverse(word){
    let reversedText = ""; 
    for(let i = word.length - 1; i >= 0; i--){
        reversedText += word.charAt(i);
    }

    return reversedText;
}

function findLongestWord(array){
    let length = 0;
    let max = array[0]; 
    for(let i = 0; i < array.length; i++){
        if(array[i].length >= max.length){
            max = array[i]; 
            length = max.length;
        } 
    }
    
    return length;
}

function filterLongWords(array, num){
    let filtered = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].length > num){
            filtered.push(array[i]);
        }
    }

    return filtered;
}

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem !== 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);

let mappedArray = a.map(multiplyBy10);
console.log(mappedArray)
function multiplyBy10(num){
    return num * 10; 
}

let filteredArray = a.filter(filter);
console.log(filteredArray);
function filter(num){
    return num === 3;
}

console.log(products(a));
function products(array){
    return array.reduce((a, b) => a * b);
}

// Tets
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

let numbersArrayForTest = [12, 21, 32, 10, 87]; 
let textForTest = "hello";
let wordsArrayForTest = ["book", "laptop", "car", "phone"];
let arrayForStream = [2, 3, 2, 4, 6];
let map = 
  
console.log("Expected output of max(21, 20) should be 21 => " + max(21, 20));
console.log("Expected output of maxOfThree(12, 11, 23) should be 23 => " + maxOfThree(12, 11, 23));
console.log("Expected output of isVowel('a') should be true => " + isVowel('a'));
console.log("Expected output of sum(numbersArrayForTest) should be 162 => " + sum(numbersArrayForTest));
console.log("Expected output of multiply(numbersArrayForTest) should be 7015680 => " + multiply(numbersArrayForTest));
console.log("Expected output of reverse(textForTest) should be olleh => " + reverse(textForTest));
console.log("Expected output of findLongestWord(wordsArrayForTest) should be 6 => " + findLongestWord(wordsArrayForTest));
console.log("Expected output of filterLongWords(wordsArrayForTest, 4) should be laptop,phone => " + filterLongWords(wordsArrayForTest, 4));
console.log("Expected output of arrayForStream.map(multiplyBy10) should be 20,30,20,40,60 => " + arrayForStream.map(multiplyBy10));
console.log("Expected output of arrayForStream.filter(filter) should be 3 => " + arrayForStream.filter(filter));
console.log("Expected output of products(arrayForStream) should be 288 => " + products(arrayForStream));