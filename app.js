//task-1
// To exchange the values of two numbers without using Third variable and after exchange then Double of the values of two numbers.
let a = 5, b = 10;
// 2.add b to a
a = b + a
//3. Subtract original value of B from the updated A.
b = a - b
// 4. Subtract the updated value of B from A.
a = a - b
// 5. Now, A contains the original value of B, and B contains the original value of A.
console.log(a)
console.log(b)
// 6. Double the value of A.
a = a * 2
console.log(a)
// 7. Double the value of B.
b = b * 2
console.log(b)


//task-2

let percentage = 80;
if (percentage >= 40 && percentage < 50) {
    console.log("Buy a pen.");
}

else if (percentage >= 50 && percentage < 60) {
    console.log("Buy a Book.");
}
else if (percentage >= 60 && percentage < 70) {
    console.log("Buy a Bag.")
}

else if (percentage >= 70 && percentage < 80) {
    console.log("Buy a Watch");
}

else if (percentage >= 80 && percentage < 90) {
    console.log("Buy a Mobile");
}

else if (percentage >= 90 && percentage < 100) {
    console.log("Buy an Laptop");
}
else {
    console.log("Fail");

}

//switch case for task-2

let percent = 99;
switch (percent != null) {
    case (percent >= 50 && percent < 60):
        console.log("Buy a Book.");
        break;
    case (percent >= 60 && percent < 70):
        console.log("Buy a Bag.");
        break;
    case (percent >= 70 && percent < 80):
        console.log("Buy a Watch");
        break;
    case (percent >= 80 && percent < 90):
        console.log("Buy a Mobile");
        break;
    case (percent >= 90 && percent < 100):
        console.log("Buy an Laptop");
        break;
    default:
        console.log("Fail");
}


//task-3
// check if a number is an even or odd. then the following conditions must be satisfied.
//      a) "given Number is Even and to print double of the number"
//      b) "given Number is odd and to print adding by two"   
let number = 29;
if (number % 2 == 0) {
    console.log("given Number is Even")
    console.log("double of the number is:", number * 2);
}
else {
    console.log("given Number is odd")
    console.log("adding by two is :", number + 2);

}

//task -4
// Create a Simple Calculator using Conditions
// Steps :
// 1. Ask the user to enter the first number.
// 2. Ask the user to enter the operation (+, -, *, /).
// 3. Ask the user to enter the second number.
// 4. Based on the operation entered:
// 5. If it's addition (+), add the two numbers together.
// 6. If it's subtraction (-), subtract the second number from the first number.
// 7. If it's multiplication (*), multiply the two numbers together.
// 8. If it's division (/), divide the first number by the second number.
// 9. Display the result of the operation.
/*

let first_number =prompt("enter the first number.");
let operation =prompt("enter the operation");
let second_number =prompt("enter the second number");
let result;
switch(operation){
    case '+':
        result= first_number+second_number;
        break;
    case '-':
        result=second_number - first_number;
        break;
    case '*':
        result=first_number*second_number;
        break;
    case '/':
        result=first_number/second_number;
        break;
}
console.log("the result of the operation:"+ result);
*/

//task-5
// Write a program that uses a loop to calculate and display the sum of all numbers from 1 to 10.
// Steps :

// 1. Start with a variable sum set to 0.
// 2. Start a loop from 1 to 10.
// 3. Add the current loop variable to sum.
// 4. After the loop, sum will hold the sum of all numbers from 1 to 10.
// 5. Display the sum in the format "1+2+3+...+10 = sum".

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = i + sum;
}
console.log(sum);
//task-6
/*
Write a program that uses a loop to calculate and display the factorial of a given number.

Steps:
1. We first define the given number as givenNumber.
2. Then, we initialize the factorial variable to 1.
3. Next, we use for loop to iterate from the givenNumber down to 1.
4. each iteration, we multiply the factorial by the current value of i.
5. After the loop, the factorial variable holds the calculated factorial value.
6. Finally, we display the calculated factorial value using console.log( ).

Example : Given number is 5;   
                         5*4*3*2*1 = 120
*/


let factorial = 1;
let i = 5;
while (i >= 1) {
    factorial = factorial * i;
    i--;
}
console.log(factorial);

//task-7
/*
Write a program that uses a loop to print a multiplication table for a given Number up to a certain range.

Steps :
Step 1: Choose a number you want to create a multiplication table.
Step 2: Start counting from 1 up to a certain range (e.g., 10).
Step 3: For each number in the range, multiply it by the chosen number and write down the result.
Step 4: Repeat this process until you reach the desired range.

Example : Given Number is 5 
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5= 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/

let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num + "*" + i + "=" + num * i);
}

//task-8
/*
Write a program that uses a loop to find and display the common elements between two arrays of integers.

Steps:
Step 1: Imagine you have two lists of numbers.
Step 2: Pick a number from the first list.
Step 3: Look at each number in the second list to see if it matches the number you picked.
Step 4: If you find a match, it means the number is common to both lists.
Step 5: Repeat steps 2-4 for each number in the first list.
Step 6: Once you've checked all numbers in the first list, you've found all the common elements.
Step 7: Display the common elements you found.
*/
let list1 = [1, 2, 3, 4, 5]
let list2 = [1, 2, 3, 6, 7]
let common_num = [];

for (let i = 0; i < list1.length; i++) {
    let num1 = list1[i]
    for (let j = 0; j < list2.length; j++) {
        let num2 = list2[j]
        if (num1 == num2) {
            common_num.push(num1);

        }
    }
}
console.log(common_num);

//another method

let list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let list4 = [2, 4, 5, 7, 11, 15];
let common = [];
for (let i = 0; i < list3.length; i++) {
    for (let j = 0; j < list4.length; j++) {
        if (list3[i] == list4[j]) {
            common.push(list3[i])
        }
    }
}
console.log(common)

//task -9
/*
Write a program that uses a loop to check if a given number is prime or not.

Steps :
1. We start with the given number num (assumed as 17).
2. We assume initially that the number is prime (isPrime is set to true).
3. We check if the number is less than 2, which is a special case for prime numbers. If it is, we set isPrime to false.
4. If the number is greater than or equal to 2, we loop from 2 up to the square root of the number.
5. In each iteration, we check if the current number divides the given number evenly (with no remainder). If it does, we set isPrime to false and break out of the loop.
6. After the loop, we display the result indicating whether the number is prime or not.
*/

function checkPrime(prime_num) {
    let isPrime = true;

    if (prime_num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(prime_num); i++) {
            if (prime_num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(prime_num + " is a prime number.");
    } else {
        console.log(prime_num + " is not a prime number.");
    }
}

let prime_num = 17;
checkPrime(prime_num);


//task-10
/*
Write a program that uses a loop to reverse and display the elements of an array.

1. We start with the given array [1, 2, 3, 4, 5].
2. We initialize an empty array "reversedArray" to store the reversed elements.
3. We loop through each element of the original array in reverse order using a for loop 4. starting from the last index (array.length - 1) down to 0.
5. Inside the loop, we add each element to the beginning of the "reversedArray" using the push() method.
6. After looping through all elements of the original array, we display the "reversedArray", which contains the elements of the original array in reverse order.
*/

let array = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = 0; i < array.length; i++) {
    reversedArray.push(array.length - i);
}
console.log(reversedArray);
//task-11
/*
Write a program that uses a loop to find and display the largest number in an array of integers.
Steps:
1. we have an array called numbers containing integers.
2. Start by assuming that the first number in the array is the largest one.
3. Iterate through the array starting from the second number.
4. For each number in the array, compare it with the current largest number.
5. If the current number is greater than the current largest number, update the largest number to be the current number.
6. After iterating through all numbers in the array, the largest number will be stored in a variable called max.
7. Display the value of max.
*/

const numbers = [10, 5, 20, 8, 15];

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }

}
console.log(max);

//task-12
/*
Given an array of objects representing users, update the age of a user with a specific ID.
const users = [
  { id: 1, name: "A", age: 25 },
  { id: 2, name: "B", age: 30 },
  { id: 3, name: "C", age: 22 }
];
Steps :
1. We start with the given array of user objects users.
2. We specify the "userIdToUpdate" variable to store the ID of the user we want to update
3. We loop through each user object in the array and check if the id property matches the "userIdToUpdate"
4. If a user with the specified ID is found, we update its age property to the new age (Example: 35).
5. If no user with the specified ID is found, we display a message indicating that the user does not exist
6. Finally, we display the updated array of user objects 
*/

const users = [
    { id: 1, name: "A", age: 25 },
    { id: 2, name: "B", age: 30 },
    { id: 3, name: "C", age: 22 }
];

let userIdToUpdate = 2;
let userUpdated = false;

for (let i = 0; i < users.length; i++) {
    if (users[i].id === userIdToUpdate) {
        users[i].age = 35;
        userUpdated = true;
        break;
    }
}
if (!userUpdated) {
    console.log("User with ID", userIdToUpdate, "does not exist.");
}
else {
    console.log("Updated array of user objects:", users);

}



//task-13
/*
Write a code on Fibonacci Series using Function.

Steps:
Step 1: Begin with two numbers, 0 and 1, which are the starting numbers of the Fibonacci sequence.
Step 2: Print the first number, which is 0.
Step 3: Repeat the following steps for the desired number of terms:
Step 3.1: Add the two previous numbers to get the next number in the sequence.
Step 3.2: Update the first number to the second number's value.
Step 3.3: Update the second number to the newly calculated number.
Step 3.4: Print the updated first number, which is the next number in the Fibonacci sequence.
*/

let numTerms=5;
let num_1=0;
let num_2=1;
console.log(num_1);
for(i=1;i<numTerms;i++){
    let next_num=num_1+num_2; //Add the two previous numbers to get the next number in the sequence.
    num_1=num_2;              //Update the first number to the second number's value.
    num_2=next_num;           //Update the second number to the newly calculated number.
    console.log(num_1);       //Print the updated first number
}



//task -14
/*
Write a function called "isPalindrome" that takes a string as an argument and returns true if the string is a palindrome and false otherwise.
Note : Palindrome means reads the same backward as forward.
Steps:
1. We define a function isPalindrome that takes a string str as input.
2. Inside the function, we initialize variables start and end to represent the start and end indices of the string.
3. We use a while loop to iterate through the string while the start index is less than the end index.
4. Inside the loop, we compare characters at the start and end.
5. If the characters are not the same, we return false, indicating that the string is not a palindrome.
6. If all characters are the same and the loop completes without returning false, we return true, indicating that the string is a palindrome.
7. We test the function with example strings to verify.
*/
function isPalindrome(str){
    //initialize variables
    let start=0;
    let end=str.length-1;
    // while loop to iterate through the string while the start index is less than the end index.
    while(start<end){
        //Inside the loop, we compare characters at the start and end.
        if(str[start]!=str[end]){
            return false; //If the characters are not the same, we return false, indicating that the string is not a palindrome.
        }
        start++;
        end--;

    }
   return true; //we return true, indicating that the string is a palindrome.
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));


