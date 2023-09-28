                            // Chapter (21 to 25)

// Question 1:-
// var firstname= prompt("What is your first name")
// var lastname= prompt("What is your last name")
// var result= ("Assalam Alaikum sir/mam " +firstname +" " +lastname)

// document.write (result)

// Question 2:-
// var fvrtmodel= prompt("What is you favourite phone model")
// var length= fvrtmodel.length

// document.write ("Your favourite phone model is " +fvrtmodel +"<br>")
// document.write ("Length of String is: " +length)

// Question 3:-
// var pk= "Pakistani"
// var index= pk.indexOf("n")

// document.write ("String: " +pk +"<br>")
// document.write ("Index of 'n': " +index)

// Question 4:-
// var h= "Hello World"
// var result= h.lastIndexOf("l")

// document.write ("String: " +h +"<br>")
// document.write ("Last index of 'l': " +result)

// Question 5:-
// var h= "Pakistani"
// var result= h.charAt(3)

// document.write ("String: " +h +"<br>")
// document.write ("Character at index 3: " +result)

// Question 6:-
// var firstname= prompt("What is your first name")
// var lastname= prompt("What is your last name")
// var result= firstname.concat(" " +lastname)

// document.write ("Assalam Alaikum sir/mam " +result)

// Question 7:-
// var city= "Hyderabad"
// var Replacement= "Islam"
// var replace= city.replace("Hyder",Replacement)

// document.write ("City: " +city +"<br>")
// document.write ("After Replacement: " +replace)

// Question 8:-
// var message= "Ali and Sami are best friends. They play cricket and football together."
// var result= message.replace("and", "&")

// document.write (message +"<br>")
// document.write (result)

// Question 9:-
// var string= "472"
// var number= parseInt(string)

// document.write ("Value: " +string +"<br>" +"Type: " ,typeof string +"<br><br>")
// document.write ("Value: " +number +"<br>" +"Type: " ,typeof number)

// Question 10:-
// var x= prompt("Type anything in small letters that converts into capital letters")
// var text= x.toUpperCase(prompt)

// document.write (text)

// Question 11:-
// var x= prompt("Type anything in capital letters that converts into small letters")
// var text= x.toLowerCase(prompt)

// document.write (text)

// Question 12:-
// var num= "35.36"
// var result= num.replace(".", "")

// document.write (result)

// Question 13:-
// function validateUsername(username) {
//     var specialSymbols = /[@.,!]/;
//     var isValid = !specialSymbols.test(username);
//     return isValid;
//   }
//   var username = prompt("Enter your username:");
//   var isValid = validateUsername(username);
//   if (isValid) {
//     alert("Welcome, " +username +"!");
//   } else {
//     alert("Please enter a valid username.");
//   }

// Question 14:-
// function searchItem(array, item) {
//     item = item.toLowerCase();
//     for (let i = 0; i < array.length; i++) {
//       const arrayItem = array[i].toLowerCase();
//       if (arrayItem === item) {
//         return i;
//       }
//     }
//     return -1;
//   }
//   const items = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
//   const item = prompt("Enter an item in our SUFI Bakery.");
//   const index = searchItem(items, item);
//   if (index !== -1) {
//     document.write("The " +item +" is found at index " +index +" in our bakery.");
//   } else {
//     document.write("We are sorry " +item +" is not in our bakery.");
//   }

// Question 15:-
// function validatePassword(password) {
//     var hasAlphabetsAndNumbers = /[a-zA-Z0-9]+/.test(password);
//     var startsWithNumber = /^[0-9]+/.test(password);
//     var isAtLeast6CharsLong = password.length >= 6;
//     return hasAlphabetsAndNumbers && !startsWithNumber && isAtLeast6CharsLong;
//   }
//   var password = prompt('Enter a password:');
//   var isValid = validatePassword(password);
//   if (isValid) {
//     document.write("The password is valid");
//   }
//   else{
//     document.write("Enter a valid password")
//   }

// Question 16:-
// var university = "University of Karachi"
// var result= university.split(" ")

// document.write (result)

// Question 17:-
// var input= prompt("Type any text and it will be displayed and give you last character of text you type.")

// document.write ("Your Input: " +input +"<br>")
// if(input){
//     var lastchar= input.slice(-1)
//     document.write ("Your input last character: " +lastchar)
// }
// else{
//     alert ("You didn't type any text")
// }

// Question 18:-
// function countOccurences(str, word){
//     var words= str.split(' ')
//     var count= 2

// for (var i=0; i<words.lenght; i++){
//     if (words[i].toLowerCase() === word.toLowerCase()){
//         count++;
//     }
// }

// return count;
// }

// var str= "The quick brown fox jumps over the lazy dog"
// var word= "the"
// var count= countOccurences(str, word)

// document.write ("The word '" + word + "' occurs " + count + " times in the string.")