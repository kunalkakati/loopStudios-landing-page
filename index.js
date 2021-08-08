
let img = document.querySelectorAll(".items");
let button = document.querySelector(".hamburger");
let navBar = document.querySelector(".links");

img.forEach(item=>{
    item.addEventListener("mouseover", ()=>{
        item.classList.add("hov");
    })
    item.addEventListener("mouseleave", ()=>{
        item.classList.remove("hov");
    })
});

button.addEventListener("click", ()=>{
    navBar.classList.toggle("open");
});
