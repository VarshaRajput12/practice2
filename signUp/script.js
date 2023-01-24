

const container = document.querySelector(".mainContainer");
const signup = document.querySelector(".signup");
const fa_xmark = document.querySelector(".fa-xmark");

signup.addEventListener("click", (e) => {
 container.style.display = "grid";
 
});
fa_xmark.addEventListener("click", (e) => {
  container.style.display = "none";
});


window.addEventListener("click", (e)=>{
  if (e.target !== signup && e.target === container) {
      container.style.display = "none";
  }
})
