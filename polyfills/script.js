// polyfill for map

// map returns new array

// let arr = [1,2,3,4]

// let arr2 = arr.map((ele)=>{
//     return ele*2;
// })

// console.log(arr2)

// Array.prototype.myMap = function(callback){
//   const newArr = []; //because map returns new array
//   for(let i = 0; i < this.length; i++){
//     newArr.push(callback(this[i],i,this))
//   }
//   return newArr;
// }

//  let arr2 = arr.myMap((ele)=>{
//     return ele*2;
// })

// console.log(arr2)


//===================================================

// polyfill for forEach
//  let arr = [1,2,3,4]

// let arr2 = arr.map((ele)=>{
//     return ele*2;
// })

// console.log(arr2)

// Array.prototype.myMap = function(callback){
//   for(let i = 0; i < this.length; i++){
//     push(callback(this[i],i,this))
//   }
//   return newArr;
// }

//  let arr2 = arr.myMap((ele)=>{
//     return ele*2;
// })

// console.log(arr2)

//======================================================================================================================
// polyfill for filter

// filter returns new array
// let arr = [1, 2, 3, 4, 5, 6];

// let arr2 = arr.filter((ele)=>{
//     if(ele%2 == 0){
//         return ele;
//     };
// })

// console.log(arr2)

// Array.prototype.myFilter = function (callback) {
//   const newArr = []; //because filter returns new array
//   for (let i = 0; i < this.length; i++) {
//     if(callback(this[i], i, this)){
//         newArr.push(this[i])
//     };
//   }
//   return newArr;
// };

// let arr2 = arr.myFilter((ele) => {
//   if (ele % 2 == 0) {
//     return ele;
//   }
// });

// console.log(arr2)

//=============================================================================================================


//polyfills for call, apply and bind



//call
// let obj = {
//     name: "Varsha",
//     surName: "Rajput"
// }

// function fullname(age, city){
//     console.log(`${this.name} ${this.surName} my age is ${age} i'm from ${city}`)
// }

// Function.prototype.myCall = function(content = {}, ...args){
// if(typeof this !== "function"){
//     throw new Error(`${this} is not callable`)
// }
// content.fn = this;
// content.fn(...args)

// }

// fullname.call(obj, 21, "delhi");
// fullname.myCall(obj, 21, "delhi");

//===================================================================================

//apply

// let obj = {
//   name: "Varsha",
//   surName: "Rajput",
// };

// function fullname(age, city) {
//   console.log(`${this.name} ${this.surName} my age is ${age} i'm from ${city}`);
// }

// Function.prototype.myApply = function (content = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error(`${this} is not callable`);
//   }
//   if(!Array.isArray(args) ){
//     throw new Error(`CreatListFromArrayLike called on non-object`);
//   }
//   content.fn = this;
//   content.fn(...args);
// };

// // fullname.apply(obj, [21, "delhi"]);
// fullname.myApply(obj, [21, "delhi"]);



//bind

let obj = {
  name: "Varsha",
  surName: "Rajput",
};

function fullname(age, city) {
  console.log(`${this.name} ${this.surName} my age is ${age} i'm from ${city}`);
}

Function.prototype.myBind = function (content = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} cannot be bound as it is not callable`);
  }
  
  content.fn = this;
  return function(){
    return content.fn(args,...args)
  }
};

// fullname.apply(obj, [21, "delhi"]);
fullname.myBind(obj, 21, "delhi");