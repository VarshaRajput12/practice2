const fa_star = document.querySelectorAll(".fa-star");
// const container = document.querySelector(".container");

// container.addEventListener("click", (e)=>{
//     if (e.target.classList.contains("fa-star")) {
//         e.target.classList.toggle("color");
       
//     }
// })

fa_star.forEach((star, i)=>{
    star.addEventListener("click", (e)=>{
        // console.log(i)
        fa_star.forEach((star, ind)=>{
            // console.log(ind)
            if(i >= ind){
                star.classList.add("color");
            }else{
                star.classList.remove("color");
                
            }
        })
    })
})
// fa_star.forEach((star, i)=>{
//     star.addEventListener("mouseover", (e)=>{
//         // console.log(i)
//         fa_star.forEach((star, ind)=>{
//             // console.log(ind)
//             if(i > ind){
//                 star.classList.add("color");
//             }else{
//                 star.classList.remove("color");
                
//             }
//         })
//     })
// })

