const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");
const para3 = document.querySelector(".para3");


btn1.addEventListener("click", (e)=>{
   para1.classList.remove("hidden")
   para2.classList.add("hidden")
   para3.classList.add("hidden")

});
btn2.addEventListener("click", (e)=>{
   para2.classList.remove("hidden")
   para1.classList.add("hidden");
   para3.classList.add("hidden");

});
btn3.addEventListener("click", (e)=>{
   para3.classList.remove("hidden")
   para2.classList.add("hidden");
   para1.classList.add("hidden");

});