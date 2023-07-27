//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseStr (inputString) {
    let reverseStr = "";

    for(let i = inputString.length-1; i >= 0; i--){
        reverseStr += inputString[i];

    }

    return reverseStr

}

console.log(reverseStr("hello world"));


//Task 2 : Create a function that takes an array of numberbers as input and returns the sum of all positive numberbers in the array. 

const arr = [1,2,3,-2, 4,5,6, -3,-4];
const totalOfPositiveValues = arr.reduce(
    (pre, current) => {
        if(current > 0){
           return pre + current
        }
        else return pre
    },0
  );

  console.log(totalOfPositiveValues);


  //Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function mostFrequent(arr){
    const frequencyMap = {}
        let maxElement = arr[0];
        let maxCount = 1;
        for(let i = 0; i < arr.length; i++){
            const element = arr[i];
            if(frequencyMap[element]){
                frequencyMap[element]++;
            }else{
                frequencyMap[element]=1;
            }
            if(frequencyMap[element] > maxCount){
                maxElement = element;
                maxCount = frequencyMap[element]
            }
        }
        return maxElement;
    }

    const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
    const result = mostFrequent(array);
    console.log(result);


   // Task 4: Implement a simple JavaScript calculator. The calculator should take two numberbers and an operator (+, -, *, /) as input and return the result of the operation.
    

   function calculator(number1, operator, number2) {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      case '/':
        if (number2 !== 0) {
          return number1 / number2;
        } else {
          throw new Error("Division by zero is not allowed.");
        }
      default:
        throw new Error("Invalid operator. Please use +, -, *, or /.");
    }
  }
  
  
  const number1 = 7;
  const operator = '+';
  const number2 = 3;
  
  const result2 = calculator(number1, operator, number2);
  console.log(result2); 


  //Task 5: Create a program that generates a random Pass of a specified length. The Pass should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
  
  function generateRandomPass(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let Pass = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      Pass += allCharacters[randomIndex];
    }
  
    return Pass;
  }
  

  const PassLength = 8;
  const randomPass = generateRandomPass(PassLength);
  console.log(randomPass); 


//Task 6: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentNumeral = romanNumeral[i];
      const nextNumeral = romanNumeral[i + 1];
  
      if (romanNumeralsMap[currentNumeral] < romanNumeralsMap[nextNumeral]) {
        result -= romanNumeralsMap[currentNumeral];
      } else {
        result += romanNumeralsMap[currentNumeral];
      }
    }
  
    return result;
  }
  

  const romanNum = "IV";
  console.log(romanToInt(romanNum)); 
  
  
 // Task 7: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

 function secondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("The array should have at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("There is no second smallest element in the array.");
    }
  
    return secondSmallest;
  }
  
  // Example usage:
  const myArray = [1,3,4,5,6,7];
  const secondSmallestElement = secondSmallest(myArray);
  console.log(secondSmallestElement); 
  