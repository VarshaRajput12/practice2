// var x = 21;
// var test = function () {
//   console.log(x);
//   let x = 33;
// };
// test();

//==========================================================

// function abc(){
//     console.log(arguments)
// }
// abc(1,2,3,4)

//======================================================================

// String.prototype.firstChar= function(){

//     return this.charAt();
// }

// let a = "test";

// console.log(a.firstChar(3))
//=============================================================
// let arr = [4,7,2, 29,8,9]

// // console.log(arr.sort((a,b)=>a-b))

// let newArr = arr.filter((ele)=>{
//     if(ele%2==0){
//         return ele;
//     }
// })

// console.log(newArr)
//===========================================================
//question
// for (var i = 0; i < 4; i++) {
//     function a(i){
//      setTimeout(() => console.log(i), 1000*i);
//     }
//     a(i)
// }
// try it with IIFE

//===================================================================

// let apiUrl = "https://jsonplaceholder.typicode.com/users/";

// async function fetchAPI(api) {
//   const result = await fetch(api);
//   const data = await result.json();
//   console.log(data);
// }

// fetchAPI(apiUrl);

//=======================================================================

// async function fetchAPI(){
//   const result = await fetch("https://jsonplaceholder.typicode.com/users/");
//   const data = await result.json();
//   console.log(data)
// };
// fetchAPI();

//==================================================================
//question
// let newFun = sampler("varsha", 2);
// newFun() //not execute
// newFun() // execute
// newFun() //not execute
// newFun() // execute

// function calling exicution depend on the num which we passed in the function param
//====================================================

// question

// const promise1 = new Promise((resolve, reject)=>{
//     console.log(1);
//     resolve("resolve1")
// })
// const promise2 =  promise1.then((res)=>{
//     console.log(res);
// })
// console.log("promise1:", promise1)
// console.log("promise2:", promise2)

//=====================================================

// add();
// (function greet(){
//     console.log("hello")
// })();

// function add(){
//     console.log("this is add function")
// }



//==========================================================

// if input is : "aircampus"
// output = "AIRCAMPUS"  using reduce

// let str = "aircampus";
// let str2 = str.split("");
// // console.log(str2)

// let output = str2.reduce((pre, next)=>{
//     let ans = pre+next;
//     return ans.toUpperCase()
// },"")
// console.log(output)

//=========================================================
