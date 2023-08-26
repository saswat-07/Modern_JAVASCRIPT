## Practice

This practice comprises of 4 exercises.

### Problem Statements

#### Practice 1 - Create an Object

The administration of Grey River University wants to keep a record of all the students who have joined in their freshman year. To track the record of all their students' basic information, the University wants to develop a program.​

​Write a JavaScript program to create an object called student that has the following properties: firstName, lastName, age, email, phoneNum, and address.

- Declare and initialize an object called student with the following properties: firstName, lastName, age, email, phoneNum, and address.​
- Create a function which takes the student object as parameter.
- Display each property value inside the function in the format given below:

```
Displaying student property values
firstName: John
lastName: Britto
age: 15
email: john@gmail.com
phoneNum: 258963654
address: Park Avenue street, New York
```
Provide solution code in file `p1-submission.js`.

This file is located inside the folder `p1-create-object`.

#### Practice 2 - Calculate Average Marks of the Class

A professor at Grey River University wants to calculate the average marks scored in Geography by the students in their Freshman year. ​

You need to write a JavaScript program to calculate the average marks of the class.

- Steps to perform this task:

    1. Declare and initialize an array of size 10 with some random marks ranging between 0 and 100.
    2.  Initialize a sum variable with value 0.​
    3. Using a for loop, traverse the array and calculate the sum with each value traversed.​
    4. Calculate the average marks.​
        `averageMarks = sum / 10;​`
    5. Return the average marks.

Provide solution code in file `p2-submission.js`.

This file is located inside the folder `p2-average-marks`.

#### Practice 3 - Calculate the Number of Students Whose Marks >= 40 

A team of recruiters from an MNC has conducted a written test for college placements at Grey River University. They want to calculate the number of students having Marks >= 40. ​

Write a JavaScript program to calculate the count of students.

- Steps to perform this task:
    1. Declare and initialize an array of size 10 with some random marks ranging between 0 and 100.​
    2. Initialize a count variable with value 0.​
    3. Using a for loop, traverse the array and check whether each value traversed is greater or equal to 40.​
    4. Increment the count if the condition evaluates to be true.​
    5. Return the count after the loop terminates.

Provide solution code in file `p3-submission.js`.

This file is located inside the folder `p3-count-students`.

#### Practice 4 - Sort the Given Marks in the Ascending Order

The team of recruiters want to sort the marks scored by the students at Grey River University in ascending order. This will help them shortlist the qualified students easily. ​

​You need to write a JavaScript program to sort the given marks in ascending order.

- Declare and initialize an array of size 10 with some random marks ranging between 0 and 100.
- Use the bubble sort technique to sort the array values.​
    - Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.​
- Use nested loops to sort the list using bubble sort.​
- Return the soretd array.

Provide solution code in file `p4-submission.js`.

This file is located inside the folder `p4-sort-marks`.

#### Submission Instructions

1. This is a test enabled practice, hence, the solution will have to ungdergo automated evaluation process.
    - For automated evaluation, the solution should be first tested locally and then on hobbes.
2. Steps to test the code locally:
    1. Ensure the solution code is provided in the specified files only.
    2. From the command line terminal, set the path to the folder containing cloned boilerplate code.
    3. Run the command `npm install` to install the dependencies.
    4. Run the command `npm run test` to test the solution locally.
    5. Ensure all the test cases are passing locally and then push the solution to git for automated testing on `hobbes`.
3. Steps to test the code on hobbes:
    1. Open the submission page at `https://codereview.stackroute.niit.com/#/submission`.
    2. Submit the solution.
    3. For the failed test cases, refactor the code locally and submit it for re-evaluation.