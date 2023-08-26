const marks=[13,20,11,49,55,25,44,60,12,78];
//Sort the marks from an array of marks passed as parameter
function sortMarks(marks){
let temp=0;
    for ( i = 0; i < marks.length; i++) {
        for (j =0;j < marks.length-i-1;j++) {
            if (marks[j]>marks[j+1]) {
            temp=marks[j];
            marks[j]=marks[j+1];
            marks[j+1]=temp;
            }
        
        }
    
    }
return marks;
}
console.log(`Before conversion, the array is ${marks}`);
console.log(`After Conversion, the sorted array is ${sortMarks(marks)}`);

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    sortMarks
}
