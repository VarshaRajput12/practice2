// var x = 21;
// var test = function () {
//   console.log(x);
//   let x = 33;
// };
// test();

// function abc(){
//     console.log(arguments)
// }
// abc(1,2,3,4)
// String.prototype.firstChar= function(){
//     return this.charAt(0)
// }

// let a = "test";

// console.log(a.firstChar())

// let arr = [4,7,2, 29,8,9]

// // console.log(arr.sort((a,b)=>a-b))

// let newArr = arr.filter((ele)=>{
//     if(ele%2==0){
//         return ele;
//     }
// })

// console.log(newArr)

// for (var i = 0; i < 4; i++) {
//     function a(i){
//      setTimeout(() => console.log(i), 1000*i);
//     }
//     a(i)
// }
// try it with IIFE

// let apiUrl = "https://jsonplaceholder.typicode.com/users/";

// async function fetchAPI(api) {
//   const result = await fetch(api);
//   const data = await result.json();
//   console.log(data);
// }

// fetchAPI(apiUrl);


const container = document.querySelector(".mainContainer");
const signup = document.querySelector(".signup");
const fa_xmark = document.querySelector(".fa-xmark");

signup.addEventListener("click", (e) => {
 container.style.display = "grid";
 
});
fa_xmark.addEventListener("click", (e) => {
  container.style.display = "none";
});