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
console.log(addNumbers(1, 3)); // when i do not input a number, it gitve me a reference error that the non-number if undefined





