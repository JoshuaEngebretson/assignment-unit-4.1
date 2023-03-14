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
    console.log('Hello', name+ ', nice to meet you.');    
  } else if (name === 'Brooke') {
    console.log('Hello', name+ ", you're pretty cool."); 
  } else {
    console.log('Hello', name);
  }
}

// Remember to call the function to test
console.log('Question 2 Test - The above message should say "Hello, Joshua, nice to meet you."', helloName ('Joshua'));
console.log("The above message should say 'Hello, Brooke, you're pretty cool.'", helloName('Brooke'));
console.log('The above message should say "Hello, Alex"', helloName ('Alex'));
console.log('The above message should say "Hello, Steven"', helloName ('Steven'));



// 3. Function to add two numbers together & return the result
console.log('--------------');
console.log('Question 3');

function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber
  return answer
}

console.log('Should state 36 (30+6):', addNumbers(30,6));
console.log('Should state 12 (9+3):', addNumbers(9,3));



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
console.log('Should state 120 (4*5*6):', multiplyThree(4,5,6));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('--------------');
console.log('Question 5');

function isPositive( number ) {
  if ( number > 0 ){
    console.log(number,'is a positive number');
    return true;
  } else if (number === 0) {
    console.log(number, 'is neither positive or negative');
    return false
  }
    console.log(number, 'is a negative number');
    return false;
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
  let _last_item= array[array.length-1]
  return _last_item
}

let arrayTest = [11,21,31,41,51]
let arrayTest2_animals =['dog', 'cat', 'fish', 'hedgehog', 'dolphin']
let arrayTest3=[]
console.log('Testing - Should say 50:', getLast(arrayTest));
console.log('Testing - Should say dolphin:', getLast(arrayTest2_animals));
console.log('Testing - Should say undefined:', getLast(arrayTest3));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('--------------');
console.log('Question 7');

function find( value, array ){
  for (let i=0; i=array.length-1; i++) {
    if (!array.length === true) {
      console.log('This is an empty array, as such', value, 'is not included.');
      return false
    } else {
      console.log('The value of this array at', value, 'is', array[value]);
      return true
    }
  }
}

console.log('Above should say 21, side should say true:', find(1,arrayTest));
console.log('Above should say dog, side should say true:', find(0,arrayTest2_animals));
console.log('Above should say undefined and "This is an empty array, as such (3) is not included", side should say false:', find(3,arrayTest3));



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
  else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );



// 9. Function to return the sum of all numbers in an array
console.log('--------------');
console.log('Question 9 (Stretch Goals)');

function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}



// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('--------------');
console.log('Question 10 (Stretch Goals)');



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
console.log('--------------');
console.log('Question 11 (Stretch Goals)');
