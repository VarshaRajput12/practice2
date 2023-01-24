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
