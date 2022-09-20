let words;
let bannedWords = ["not", "hell"];
text = { word: "hell of a woman!" };
let filteredWord;

let array = [6,4,0, 3,-2,1];
let sortedArray = [];

function filter(bannedWords, text) {
  for (i = 0; i < bannedWords.length; i++) {
    if (text.word.includes(bannedWords[i])) {
      filteredWord = text.word.replace(bannedWords[i] + " ", "");
    }
  }

  return filteredWord;
}

console.log(filter(bannedWords, text));

function bubbleSort(array) {
  let min = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] <= min) {
      sortedArray.unshift(array[i]);
      min = array[i];
    }
  }

  console.log(sortedArray);
}

bubbleSort(array);

var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};
var Student = function () {};
Student.prototype = new Person();
Student.prototype.learn = function (subject) {
  console.log(this.name + " just learned " + subject);
};
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function () {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
  return `${this.name} is now teaching ${subject}`;
};

var teacher = new Teacher();
teacher.initialize("Bob", 38);
console.log(teacher.teach("Biology"));
