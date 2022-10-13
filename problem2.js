//Given an array of string count the overall total number of characters
var array = ["Chetan","Raviraj","Sanket"];
var sum = 0;
for  (let i = 0; i<=array.length-1;i++){
  sum+=array[i].length;
}
console.log(sum);