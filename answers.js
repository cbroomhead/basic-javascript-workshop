//Write a function that takes a string and returns the first character of the string. Test your function on a few inputs, including the empty string.

var firstLetter = function (string) {
    return string.substring(0,1);
}

console.log(firstLetter("alphabet"));


//Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.

var lastLetter = function (string) { 
    for (i = 0; i < string.length; i++){
        var letter = string.length - 1;
      }   
      console.log(string[letter]);
};
lastLetter("pizzazz");

//Write a function that takes a string and a number, and returns the character at the position represented by the number. 
//The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

var stringNumber = function (string, number) {
    return string[number];
};
console.log(stringNumber("alphabet", 3));

//Write a function that takes two numbers and adds them together. 
//Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.

var addNumbers = function (num1, num2){
    return (num1 + num2);
};
console.log(addNumbers(1, 3)); // when i do not input a non-number, it gitve me a reference error that the non-number if undefined

//Write a function that takes two numbers and multiplies them together. 
//Test your function on a few inputs. Write in your comments what happens when you pass something other than a number to your function.
var multNumbers = function (num1, num2){
    return (num1 * num2);
};
console.log(multNumbers(3,4));// when i do not input a non-number, it gitve me a reference error that the non-number if undefined


//Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. 
//If the string is ‘subtract’, return the difference. 
//If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.
var numberOperation = function (num1, num2, strg){
    if (strg === 'add'){
        return (num1 + num2);
    }
    else if (strg === 'substract'){
        return (num1 - num2);
    }
    else if (strg === 'mult'){
        return (num1 * num2);
    }
    else if (strg === 'div'){
        return (num1, num2);
    }
    else {
        return 0;
    }
};

console.log(numberOperation(2, 4, "add"));

//Write a function that takes a string and a number, and returns the string repeated that many number of times. 
//Test your function with various inputs.
var howManyTimes = function (strg, num){
  for (var i = 1;  i < strg.length; i++){
      console.log(strg) * 3;
  }  
};
howManyTimes("cool", 3);

//Write a function that takes a string, and returns the reverse of that string. 
//For example, if you pass the function the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string.
var reverse = [];
var reverseString = function (strg){
    var i = strg.length - 1;
    for ( i ; i >= 0; i--){
        reverse.push(strg[i]);
    }
};
reverseString("hello");
console.log(reverse.join(""))

//Write a function that takes a number and returns the factorial of a number. 
//The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.

var operation = 1;
var i = 1;
var factorial = function(number) {
while ( i <= number){
    operation = operation * i;
    i++;
}
    console.log(operation);
};
factorial(5); //looks like the factorial of a negative number is always 1

//factorial with for loop
var factorial2 = function(num){
    var operation = 1;
    if(num === 0){
        return 1;
    }
    for (var i = 1; i <= num; i++){
        operation = operation * i;
    }
    return operation;
    
};
console.log(factorial2(5));


//Write a function that takes a phrase as a string, and returns the longest word in that phrase. 
//If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.
var longestString = function (strng){
    var result = strng.split(" ");
    var len = '';
    for (i = 0 ; i < result.length; i++){
        if (result[i].length > len.length){
            len = result[i];
        }
    }
    return len;
};
console.log(longestString ("This bootcamp is hurting my brain!"));

//Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
//For example, if you pass your function "hello world", it should return "Hello World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", 
//it will also return "Hello World". Test your function of a few inputs.

var capitalizeAllWords = function (strng){
    var result = strng.toLowerCase().split(" ");
       for(i = 0; i < result.length; i++){
            result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
       }
       return result.join(" ");
};

console.log(capitalizeAllWords("this bootcamp is hurting my brain!"));

//Write a function that takes an array and returns the largest number of the array. Test your function on a few inputs.
var largestNumber = function (array) {
    var lar = 0;
    for (var i = 0 ; i < array.length; i++){
        if (array[i] > lar){
            lar = array[i];
        }
    }
return lar;
};

console.log(largestNumber([10, 232, 65]));

//Write a function that takes an array, and returns a filtered array. 
//The filtered array should only contain the truthy values from the initial array. 
//Hint: there is an array method called filter that can help you with this :)
var arrayFiltered = function (array){
    var filtered = array.filter(function(ele){
    if(ele){
        return ele;
    }
    })
      return filtered;
};
console.log(arrayFiltered([0, true, false, 23, "", null, 1]));

