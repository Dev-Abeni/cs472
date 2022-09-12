let arrayOfNUmbers = [1,3,5,3,3]; 
let arrayOfStrings = ["Bob", "Henry", "Charles"]; 

console.log("The sum of the values in the array is: " + sum(arrayOfNUmbers)); 
console.log("The product of the values in the array is: " + multiply(arrayOfNUmbers));
console.log("The reversed order of the array is: " + reverse(arrayOfStrings));

let filteredWords = arrayOfStrings.filter(filterLongWords); 
console.log("The longest names in the list are: " + filteredWords);

function sum(array){
    return array.reduce((x, y) => x + y); 
}

function multiply(array) {
    return array.reduce((x, y) => x * y);
}

function reverse(array){
    return array.reverse();
}

function filterLongWords(word){
    return word.length > 3;
}