console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('--------------');
console.log('Question 2');

function helloName( name ) {
  if (name === 'Joshua') {
    return 'Hello '+name+", nice to meet you."  
  } else if (name === 'Brooke') {
    return 'Hello '+name+ ", you're pretty cool."
  } else {
    return 'Hello '+name
  }
}

// Remember to call the function to test
console.log('helloName - Should say "Hello, Joshua, nice to meet you." ---', helloName ('Joshua'));
console.log("helloName - Should say 'Hello, Brooke, you're pretty cool.' ---", helloName('Brooke'));
console.log('helloName - Should say "Hello, Alex" ---', helloName ('Alex'));
console.log('helloName - Should say "Hello, Steven" ---', helloName ('Steven'));



// 3. Function to add two numbers together & return the result
console.log('--------------');
console.log('Question 3');

function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber
  return answer
}

console.log('addNumbers - Should state 36 (30+6):', addNumbers(30,6));
console.log('addNumbers - Should state 12 (9+3):', addNumbers(9,3));



// 4. Function to multiply three numbers & return the result
console.log('--------------');
console.log('Question 4');

function multiplyThree( num01, num02, num03 ){
  let multiplication = num01 * num02 * num03
  return multiplication
}

console.log('Should state 6 (1*2*3):', multiplyThree(1,2,3));
console.log('Should state 24 (2*3*4):', multiplyThree(2,3,4));
console.log('Should state 60 (3*4*5):', multiplyThree(3,4,5));
console.log('Should state -120 (4*5*-6):', multiplyThree(4,5,-6));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('--------------');
console.log('Question 5');

function isPositive( number ) {
  if ( number > 0 ){
    console.log(number, 'is a positive number');
    return true;
  } 
  console.log(number, 'is NOT a positive number');
  return false
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true:', isPositive(3) );
console.log( 'isPositive - should say false:', isPositive(0) );
console.log( 'isPositive - should say false:', isPositive(-3) );



// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('--------------');
console.log('Question 6');

function getLast( array ) {
  let last_item= array[array.length-1]
  return last_item
}

let arrayTest1_numbers = [10,20,30,40,50];
let arrayTest2_animals = ['dog', 'cat', 'fish', 'hedgehog', 'dolphin'];
let empty_array=[]

console.log('getLast - Should say 50:', getLast(arrayTest1_numbers));
console.log('getLast - Should say dolphin:', getLast(arrayTest2_animals));
console.log('getLast - Should say undefined:', getLast(empty_array));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('--------------');
console.log('Question 7');

function find( Searching_array, value_to_find ){
  for (let i=0; i<Searching_array.length; i++) {
    if (value_to_find === Searching_array[i]) {
      console.log(value_to_find, 'is a part of', Searching_array, ' at array.length='+ i);
      return true 
    } 
  }
  console.log(value_to_find, 'is not a part of', Searching_array);
  return false
}

console.log('find - should say true:', find(arrayTest1_numbers,50));
console.log('find - should say false:', find(arrayTest1_numbers,60));
console.log('find - Should say true:', find(arrayTest2_animals,'dog'));
console.log('find - Should say false:', find(arrayTest2_animals,'bird'));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('--------------');
console.log('Question 8 (Stretch Goals)');

function isFirstLetter(letter, string) {
  let firstChar = string.charAt(0);
  if (letter === firstChar) {
    return true
  }
  return false
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );



// 9. Function to return the sum of all numbers in an array
console.log('--------------');
console.log('Question 9 (Stretch Goals)');

let arrayTest2_numbers = [20,30,40,-90];

function sumAll(array) {
  let sum = 0
  let x=0
  // TODO: loop to add items
  while (x < array.length) {
    sum += array[x]
    x++
  }
  return sum
}

console.log('sumAll - Should say 150:', sumAll(arrayTest1_numbers));
console.log('sumAll - Should say 0:', sumAll(arrayTest2_numbers));



// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('--------------');
console.log('Question 10 (Stretch Goals)');

function newPositive_array(array){
  let newPositive=[]
  let x=0
  while (x<array.length){
    if (array[x] > 0) {
      newPositive.push(array[x])
      x++
    } else {
      x++
    }
  }
  return newPositive
}

console.log('--First test for Question 10--');
let Neg_Pos_array = [-5, 5, -4, 4, -3, 3, -2, 2, -1, 1, 0];
console.log('New Neg_Pos_array equals:',Neg_Pos_array);
console.log('newPositive_array - Should say [5, 4, 3, 2, 1]:', newPositive_array(Neg_Pos_array));
console.log('Confirming Neg_Pos_array is not changed, should equal [-5, 5, -4, 4, -3, 3, -2, 2, -1, 1, 0]:',Neg_Pos_array);

console.log('--Second test for Question 10--');
let Neg_array = [-5, -4, -3, -2, -1];
console.log('New Neg_array equals:',Neg_array);
console.log('newPositive_array - Should be an empty array:', newPositive_array(Neg_array));
console.log('Confirming Neg_array is not changed, should equal [-5, -4, -3, -2, -1]:',Neg_array);



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
console.log('--------------');
console.log('Question 11 (Stretch Goals)');
