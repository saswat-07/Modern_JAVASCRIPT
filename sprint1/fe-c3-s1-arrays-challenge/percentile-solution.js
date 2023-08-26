//const marks=[13,20,11,49,55,25,44,60,12,78];

const marks = [37, 85, 56, 70, 45, 78, 89, 68, 98, 23, 91, 63, 47];
//const marks = [45, 68, 31, 95, 82, 66, 71];
//function to sort the array of marks passed as parameter
function sortArray(marks) {
    
for (let i = 0; i < marks.length - 1; i++) {
  for (let [j, val] of marks.entries()) {     
    if (val > marks[j + 1]) {
      [marks[j], marks[j + 1]] = [marks[j + 1], marks[j]];
    }
  }
}

return marks;
}
console.log(`Before sorting : ${marks}`);
console.log(`After sorting : ${sortArray(marks)}`); 


//function to compute and return the percentile array
function calculatePercentileArray(marks) {
        
        let marksArray=sortArray(marks);
        let percentile = [];
      
        for (let i = 0; i < marksArray.length; i++) {
          let count = 0;
      
          for (let j = 0; j < marksArray.length; j++) {
            if (marksArray[j] < marksArray[i]) {
              count++;
            }
          }
      
          percentile[i] = Math.round(((count / marksArray.length)*10000) / 100);
        }

        
      return percentile;
}


console.log(`percentileArray : ${calculatePercentileArray(marks)}`); 


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
sortArray,
calculatePercentileArray
}