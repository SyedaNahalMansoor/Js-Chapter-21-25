                                                 ///Chapter : 17-20///
// Q : Declare and initialize an empty multidimensional array.(Array of arrays);
// Ans : [ [] , [] , [] ];

// Q : Declare and initialize a multidimensional array representing the following matrix:
// Ans : var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// Q : Write a program to print numeric counting from 1 to 10.
// Ans : for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// };

// Q : Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// Ans : var tableNum = +prompt("Enter the number of table which you want to multiply");
// var tableLeanght = +prompt("Enter the leanght of table");
// document.write("<b>Multiplication Table of " + tableNum + " (Length: " + tableLeanght + " )</b><br>");
// for (var i = 1; i <= tableLeanght; i++ ) {
//     document.write(tableNum + " x " + i + " = " + (tableNum * i) + " <br> ");
// };

// Q : Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”].
// Ans : var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// };
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// };

// Q : Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// Ans : document.write("<b>a. Counting:</b><br>");
// for (i = 1; i <= 15; i++) {
//     document.write(i + " , ");
// };
// document.write("<br>");
// document.write("<b>b. Reverse Counting:</b><br>");
// for (i = 10; i >= 1; i--) {
//     document.write(i + " . ");
// };
// document.write("<br><br>");
// document.write("<b>c. Even:</b><br>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// };
// document.write("<br><br>");
// document.write("<b>d. Odd:</b><br>");
// for (var i = 1; i < 20; i += 2) {
//     document.write(i + ", ");
// };
// document.write("<br><br>");
// document.write("<b>e. Series:</b><br>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// };

// Q : You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not. Example:
// Ans : var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to our bakery! What you want to order.");
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery ");
//         break;
//     }
// };
// if (!found) {
//     alert(" We are sorry. " + userInput + " is not available at our Bakery! ");
// };

// Q : Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].
// Ans : var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     };
// };
// alert(A + " The largest number is : " + largest);
// document.write("<h1>Array items:</h1>" + A + "<br>");
// document.write("<h1>The largest number is : </h1>" + largest);

// Q : Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12];
// Ans : var A = [24 , 53 , 78 , 91 , 12];
// var smallest = A[0];
//  for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     };
// };
// alert(A + " The smallest number is : " + smallest);
// document.write("<h1>Array items:</h1>" + A + "<br>");
// document.write("<h1>The smallest number is : </h1>" + smallest);

// Q : write a program to print multiples of 5 ranging from 1 to 100.
// Ans : document.write("<h2>Multiples of 5 (1 to 100):</h2>");
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + "<br>");
//     };
// };
 
                                                    ///Chapter : 21-25///

// Q : Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// Ans : var firstName = prompt(" Enter your first name ");
// var lastName = prompt(" Enter your last name ");
// var fullName = (firstName + lastName);
// alert(" Welcome! " + fullName);

// Q : Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
// Ans : var userInput = prompt("Enter your favourite Mobile Model!");
// var inputLenght = userInput.length;
// document.write("Your favourite Mobile Model is : " + userInput + "<br>");
// document.write("String lenght : " + inputLenght);

// Q : Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// Ans : var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("<h3>String: " + word + "</h3>");
// document.write("<h3>Index of n " + index + "</h3>");

// Q : Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// Ans : var word = "Hello World!";
// var index = word.lastIndexOf("l");
// document.write("<h3>String: " + word + "</h3>");
// document.write("<h3>Last Index of l : " + index + "</h3>"); 

// Q : Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// Ans : var word = "Pakistani";
// var index = word.charAt(3);
// document.write("<h3>String: " + word + "</h3>");
// document.write("<h3>Character at index 3 " + index + "</h3>");

// Q :Repeat Q1 using string concat() method.
// Ans : var firstName = prompt(" Enter your first name ");
// var lastName = prompt(" Enter your last name ");
// var fullName = firstName.concat("" + lastName);
// alert(" Welcome! " + fullName);

// Q : Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// Ans : var city = "Hyderabad" ;
// var replacedCity = city.replace("Hyder" , "Islam");
// document.write(" City : " + city + "<br>");
// document.write(" Replaced City : " + replacedCity );

// Q : Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.var message = “Ali and Sami are best friends. They play cricket and football together.”;
// Ans : var message = "Ali and Sami are best friends. They play cricket and football together.";
// var updatedMessage = message.replace(/and/g, "&");
// document.write("<h1> Original Message : </h1>" + message);
// document.write("<h1> Updated Message : </h1>" + updatedMessage);

// Q : Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// Ans : var str = "472";
// var num = Number(str);
// document.write("<h2>Value: " + str + " | Type: " + typeof str + "</h2>");
// document.write("<h2>Value: " + num + " | Type: " + typeof num + "</h2>");

// Q : Write a program that takes user input. Convert and show the input in capital letters.
// Ans : var userInput = prompt("Enter any of your's favourite dry fruit name");
// var upperCase = userInput.toUpperCase();
// document.write("User Input : " + userInput + "<br>");
// document.write("Upper Case : " + upperCase);

// Q : Write a program that takes user input. Convert and show the input in title case.
// Ans : var userInput = prompt("Enter a word or sentence:");
// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("<h2>User Input: " + userInput + "</h2>");
// document.write("<h2>Title Case: " + titleCase + "</h2>");

// Q : Write a program that converts the variable num to string.var num = 35.36 ;Remove the dot to display “3536” display in your browser.
// Ans : var num = 35.36;
// var result = num.toString().replace(".", "");
// document.write("<h2>Original Number: " + num + "</h2>");
// document.write("<h2>Number after removing dot: " + result + "</h2>");

// Q : You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
// Ans : var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to our bakery! What you want to order.");
// var searchItem = userInput.toLowerCase();
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery ");
//         break;
//     }
// };
// if (!found) {
//     alert(" We are sorry. " + userInput + " is not available at our Bakery! ");
// };

// Q : Write a program to convert the following string to an array using string split method. var university = “University of Karachi”;Display the elements of array in your browser.
// Ans : var university = "University of Karachi";
// var universityArray = university.split("");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// };

// Q : Write a program to display the last character of a user input.
// Ans : var userInput = prompt("Enter any word or sentence:");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write("<h2>User Input: " + userInput + "</h2>");
// document.write("<h2>Last Character: " + lastChar + "</h2>");

// Q : You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// Ans : var text = "The quick brown fox jumps over the lazy dog";
// var lowerText = text.toLowerCase();
// var words = lowerText.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     };
// };
// document.write("<h2>Text: " + text + "</h2>");
// document.write("<h2>Number of occurrences of 'the': " + count + "</h2>");

Q : 


