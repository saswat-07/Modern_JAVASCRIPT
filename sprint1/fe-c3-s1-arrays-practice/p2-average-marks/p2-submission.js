const marks=[13,20,11,49,55,25,44,60,12,78];

//Calculate the average of array of marks passed as parameter
function calculateAverage(marks) {
let sum=0;
    for(i=0;i<marks.length;i++){
        //console.log(marks[i]); //traversing an array
        sum += marks[i];
    }
const averageMarks=sum/marks.length;
return averageMarks;
}
console.log(`The Average marks of the class is ${calculateAverage(marks)}`)
// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateAverage
}