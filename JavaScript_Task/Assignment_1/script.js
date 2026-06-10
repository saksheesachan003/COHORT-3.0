//// <---------------------------------- Array -------------------------------------- >

/// Easy :) Find Expensive Product ( create new array prices grater than 300 )
/// Concept :) Filter Method

const array = [100,250,500,150,700];
let arr =[];

array.filter(price => {
    if(price> 300) arr.push(price);
})
console.log("Expensive Product",arr);



/// Moderate :) Student Average ( Calculate the average marks of all students )
/// Concept :) Reduce, Length

let marks= [80,90,70,85,95];
let totalMarks = marks.reduce((acc, currentvalue) => {
    let total = acc + currentvalue;
   return  total;
},0)
let avg =  totalMarks/marks.length;
console.log("Student Average",avg);



/// Hard :) Most Frequent Number ( Find the number that appears the most )
/// Concept :) Loops, Object For Counting, Problem Solving

let numbers= [1,2,3,2,4,2,5,1,1,1];
let count = {};

for(let i = 0; i < numbers.length; i++){
}





