/*//array! hooray?

//creating arrays, can be written
//on multiple lines!
const myArray = [10,20,30];
console.log(myArray);//(3) [10, 20, 30]

//uses indexes starting from 0
console.log(myArray[0]);

//changing values in arrays
myArray[0] = 99;
console.log(myArray[0]);

//arrays can hold any type of value
//and any combination as well
const myArray2 = [1, 'hello', true, { name: 'socks'}, [1,2]];
console.log(myArray2);

//arrays are objects
console.log(typeof[1,2]);
//Array.isArray tests for array
//rather than object
console.log(Array.isArray([1,2]));

//arrays have a length method
console.log(myArray.length);

//push adds a value to the end
myArray.push(100);
console.log(myArray);//[99, 20, 30]-> [99, 20, 30, 100]

//splices remove values from arrays
//takes index and amount of values
myArray.splice(0,1);//removing 1 value at index 0
console.log(myArray);//[99, 20, 30, 100]->[20, 30, 100]


//while loops


let i = 1;
//code in () is loop condition
//i is loop variable
//i++ is increment step
//the times a loop is ran are iteratios
//loops create a scope
while(i<=10){
  console.log(i);
  i++;
}

//for loops also exist in js
//loop variable, condition, and 
//increment step are all created
//() of a for loop
for(i=1;i<=10;i++){
  console.log(i);
}

let ranNum = 0;
while(ranNum<0.5){
  ranNum = Math.random();
  console.log(ranNum);

}


//looping through arrays
const todoList = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];

for(i = 0; i<todoList.length;i++){
  console.log(todoList[i]);
}


//accumulator pattern will accumulate 
//the results of the values in an array
const numArray = [1,1,3];
let total = 0;
for(i=0; i<numArray.length;i++){
  const num = numArray[i];
  numArray[i]= num*2;
}
console.log(numArray);
*/
//arrays are also references!
//so copies are copies of pointers, not values
const array1 = [1,2,3];
const array2 = array1.slice();
array2.push(4);
console.log(array1,array2);
//slice, though copies values
//deconstructing
const [firstValue,secoondValue] = [1,2,3];
console.log(firstValue,secoondValue);

for(let i=1;i<=10;i++){
  if(i===3)
    continue;//continue will call the loop again
    //which skips the code below it
  if(i%3===0)
    continue;
  console.log(i);
  if(i===8)
    break;//break lets you stop a loop early
}
let i = 1;
while(i<=10){
  if(i%3===0){
    i++;
    continue;
    //have to increment before continue
    //to avoid infinite loop
  }
  console.log(i);
  i++;
}
function doubleArray(nums){
  const numsDoubled = [];

  for(let i = 0; i<nums.length;i++){
    const num = nums[i]*2;
    if(num === 0){
      return numsDoubled;//loop will stop when
      //it sees the number zero
    }
    numsDoubled.push(num);
  
  }
  return numsDoubled;
}
console.log(doubleArray([1,2,3]));

