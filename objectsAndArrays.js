// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals

const animals = ["cat", "dog", "rabbit", "mouse"]; 
console.log(animals); 

// Exercise 2. Add the string "frog" to the array

animals.push("frog");
console.log(animals); 

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals.push("lizard", "turtle", "fish", "pinguin");
console.log(animals); 

// Exercise 4. Update the first item in the array to be "gorilla"

animals.shift(); //removes from front
console.log(animals); 
animals.unshift("gorilla"); //adds to front
console.log(animals); 

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

console.log(animals.length); //not saved as a var. 
const arrayLength = animals.length; //saved in a var 
console.log(arrayLength); 

// Exercise 6. Print the first item in the array

console.log(animals[0]); 

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

console.log(animals[animals.length-1]);

// Exercise 8. Remove the last item from the array

animals.pop(); 
console.log(animals); 

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

const assortedThings = ["shoe", "candy", "water", 1, 2, 3]; 
console.log(assortedThings); 

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

for(let i = 0; i < assortedThings.length; i++) {
  console.log("Item # " + (i) + " is " + assortedThings[i]); 
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function printNumSize(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0 && arr[i] <= 100){
      console.log(arr[i] + " small");
    }else if(arr[i] > 100) {
      console.log(arr[i] + " BIG");
    }else{
      console.log(arr[i] + " negative");
    }
  }
}
console.log(printNumSize([100, 103, -2])); 

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

const me = {
  name: "Joslyn",
  favoriteAnimal: "Dog",
  favoriteNumber: 7
}; 
console.log(me); 

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me.age = 27,
me.favoriteColor = "Green"; 

console.log(me); 

// Exercise 14. Update the favoriteAnimal value to something different

me.favoriteAnimal = "Giraffe"; 
console.log(me); 

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me.favoriteAnimal); //dot notation
console.log(me['favoriteAnimal']); //braket notation

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// I was able to complete the exercises with ease. The only tricky one was number 11. 


// 4 Additional Exercises: 

//Create an empty object user.
//Add the property name with the value John.
//Add the property surname with the value Smith.
//Change the value of the name to Pete.
//Remove the property name from the object.

const user = {
  name: "John",
  surname: "Smith"
}; 

user.name = "Pete"; 
delete user.name; 


// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
