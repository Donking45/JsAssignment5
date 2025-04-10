
var name = "Kingsley"
var age = 29
var nationality = "Nigerian"

// Output the embedded values in a sentence
console.log(`I am a ${nationality} by name ${name}, i am ${age} years old.`)


var Quote ="The only thing we have to fear is fear itself";

var upperCaseString = Quote.toUpperCase()
console.log(upperCaseString) // Outputs the uppercase of the above sentence

var Qword = "THE ONLY THING WE HAVE TO FEAR IS FEAR ITSELF"

var lowerCaseString = Qword.toLowerCase()
console.log(lowerCaseString) // Prints the lowercase 

var word = "javascript";
var reversedWord = word.split('').reverse().join('');
console.log(reversedWord)  // outputs the reversed word

var item1 = 10.99;
var item2 = 5.50;
var item3 = 20.00;

var totalPrice = item1 + item2 + item3;

console.log(`The total price of the items is $${totalPrice.toFixed(2)}.`) //Output the total price

var test1 = 80;
var test2 = 75;
var test3 = 90;
var test4 = 85;
var test5 = 95;

var average = (test1 + test2 + test3 + test4 + test5) / 5;
console.log(`The average test score is ${average}.`);// Outputs the average test score


var favoriteFoods = ["coconutRice", "whiteSoup", "jollofRice", "fishSoup", "iceCream"];

console.log(`First favorite food: ${favoriteFoods[0]}`); // Outputs the first item
console.log(`Last favorite food: ${favoriteFoods[favoriteFoods.length - 1]}`); // Outputs the last item


var favoriteFoods = ["coconutRice", "whiteSoup", "jollofRice", "fishSoup", "iceCream"];

// Add one at the beginning
favoriteFoods.unshift("noodles");

// Add one at the end
favoriteFoods.push("chickenPepperSoup");

console.log("Updated favorite foods list:", favoriteFoods); //Output the result


var jssOne = ["Ada", "Bola", "Chidi", "Damilola", "Emeka", "Fatima", "Grace", "Henry", "Ifeoma", "John"];
console.log(jssOne);

var jssTwo = ["Kemi", "Lekan", "Musa", "Ngozi", "Ola", "Peace", "Queen", "Rita", "Samuel", "Tunde"];
console.log(jssTwo);

var jssThree = ["Uche", "Victoria", "Wale", "Xavier", "Yetunde", "Zainab", "Aisha", "Benson", "Cynthia", "David"];
console.log(jssThree);