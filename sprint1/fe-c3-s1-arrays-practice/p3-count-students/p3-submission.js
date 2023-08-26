
const marks=[13,20,11,49,55,25,44,60,12,78];

//Find the count of students who have scored marks>=40 from tha array of marks passed as parameter 
function findCount(marks){
    let count=0;
    for (i = 0; i < marks.length; i++) {
        //console.log(marks[i]); //traversing an array
        if (marks[i]>=40) {
            //console.log("^no."+count++);
            count++;
        }
        
    }
return count;
}
console.log(`the number of students having Marks >= 40 is ${findCount(marks)}`);

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findCount
}