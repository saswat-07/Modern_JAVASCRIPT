## Compute a Percentile Array

### Problem Statement

When marks of a subject are given to the students, they are not enough to relate with one another. A student might get 75/100 in a subject, but that only tells his/her marks and not the marks relative to his/her peers. This is where percentiles will help. ​

Write a JavaScript program that calculates the percentile chart for the marks obtained by the students on a​ recently conducted exam.

### Percentile Definition

- Percentile is a number where a certain percentage of scores falls below that number.  ​
- Examples:​
    - Stella is the fourth tallest person in a group of 20. 80% of people are shorter than Stella and that means Stella is at the 80th percentile.​
    - John is studying in a class has 30 students and has secured 58/100 in a subject. 60% of the students have secured lesser marks than him. That mean John's marks is at 60th percentile.​
    - Refer to this [link](https://www.mathsisfun.com/data/percentiles.html) for a better understanding of percentile.​
    - Refer to this [link](https://www.cuemath.com/percentile-formula/) for percentile calculation.

The solution for this challenge should be written in `percentile-solution.js` file.

#### Tasks

The solution to this challenge can be performed in 3 steps.​

- Step 1: Sort the array passed as parameter using JavaScript function to get the sorted mark values.​
- Step 2: Compute and generate the percentile array using JS function.​
​   -step-2:
   - Call the function to sort the array of marks passed and store the result in a variable.
   - Declare an empty array to store the percentile values.​
   - Use nested loops to calculate percentile for each student by iterating the sorted array.
       - In the outer loop, iterate through each student to calculate percentile. ​
            - In the inner loop, find the number(count) of students who have scored less than each iterated student by comparing their marks.​
      - Use the count for calculating the percentile for the iterated student.​
            `percentile[i] = (count / 13) * 100;​`
    - Return the computed percentile array.​
        - The computed percentile marks must be rounded to 2 digits using the Math.round() predefined method.​
   

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