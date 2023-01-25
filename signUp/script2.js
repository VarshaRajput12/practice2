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
//      setTimeout(() => console.log(i), 1000*i);
// };

// try it with IIFE

//===================================================================

// let apiUrl = "https://jsonplaceholder.typicode.com/users/";

// async function fetchAPI(api) {
//   const result = await fetch(api);
//   const data = await result.json();
//   console.log(data);
// }

// fetchAPI(apiUrl);

//==================================================================
//question
// let newFun = sampler("varsha", 2);
// newFun() //not execute
// newFun() // execute
// newFun() //not execute
// newFun() // execute
// let flag = 0;
// let fun = (a = "varsha", b = 3) => {
//      flag++;
// //   console.log(b, flag);
//   if (flag == b) {
//     console.log(a);
//     flag = 0;
//   }
//   return;
// };
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();

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

// call apply bind  (Explicit binding)

// const animals = [{species: "Lion", name: "king"}, {species: "whale", name: "Queen"}];

// //make use of this function to print animals from that array of object

// function printAnimals(i){
//     this.print = function(){
//         console.log(`${i} ${this.species} : ${this.name}`)
//     }
//     this.print();
// }
// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i)
// }

//===============================================================

//Append an aaray to another array

// const arr1 = ["a", "b"]
// const arr2 = [1, 2, 3]

// arr1.push.bind(arr1, arr2)
// console.log(arr1())

// using apply find max/min in an array

// const arr = [4, 5, 9,100, 1, 25, 15];

// console.log(Math.max.apply(null, arr)); 
// console.log(Math.min.apply(null, arr)); 

// output base questions=======================

// function fun(){
//     console.log(this); // here the context of bind is fixed so it points to the window object
// }

// let user = {
//     g: fun.bind(null)
// }
// user.g();


// -------------------------------------

//bind chaining

// function fun(){
//     console.log(this.name);
// }

// fun = fun.bind({name: "john"}).bind({name: "ann"})

// fun() // once a function is bound to a perticular object if will always bound to that object (bind chaining does't exist)

//-----------------------------
// function checkPassword(success, failed) {
//     let password = prompt("password?", "");
//     if (password == "varsha") {
//         success();
//     } else {
//         failed();
//     }
// }

// let user = {
//     name : "Varsha Rajput",
//     loginSuccessful(){
//         console.log(`${this.name} logged in`)
//     },
//     loginFailed(){
//         console.log(`${this.name} failed to logged in`)
//     },

// };

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))


//================================================================

// let str = "i love my india";
// let str2 = "aeiou"

// function toUpperCase(str){
//     let len = str.length;
//     let newStr = ""

//     for(let i = 0 ; i<len ; i++){
//         if( str[i] == "a" ||  str[i] == "e" || str[i] == "i" ||  str[i] == "o" || str[i] == "u"){
//           newStr+= str[i].toUpperCase()
//         }else{
//            newStr+= str[i];
//         }
//     }return newStr
// }

// console.log(toUpperCase('i love my india'))


// let result = str.split('').map(function(ele){
//     return (str2.indexOf(ele) > -1) ? ele.toUpperCase():ele;
// })
// console.log(result.join(""))