//Write a function that takes a string and returns the first character of the string. Test your function on a few inputs, including the empty string.

var firstLetter = function (string) {
    return string.substring(0,1);
}
firstLetter("alphabet");

//Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.

var lastLetter = function (string) { 
    for (i = 0; i < string.length; i++){
        var letter = string.length - 1;
      console.log(string[letter]);
      }   
};
lastLetter("pizzazz");

