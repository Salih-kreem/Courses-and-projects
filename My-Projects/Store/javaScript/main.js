let image = document.querySelector(".imgimg")
        setInterval(() => {
            
            let rand = Math.floor(Math.random() * 4 + 1);
            
            image.src = `./images/header${rand}.png`;
        },5000)


let menu = document.querySelector("#menu");
let ul = document.querySelector("ul");
menu.addEventListener("click", () => {
    ul.classList.toggle("active")

})

// ----------------Qustion------------
// --------------One---------------
let icon1 = document.querySelector(".one .he .icon");
let i1 = document.querySelector(".one .he .icon i");
let content1 = document.querySelector(".one .answer p");

icon1.addEventListener("click", () => {
    content1.classList.toggle("content");
    if(i1.className == "fa-solid fa-angle-down"){
            i1.className = "fa-solid fa-angle-up"
        }else {
            i1.className = "fa-solid fa-angle-down"
        }
});

// --------------two---------------
let icon2 = document.querySelector(".two .he .icon");
let i2 = document.querySelector(".two .he .icon i");
let content2 = document.querySelector(".two .answer p");

icon2.addEventListener("click", () => {
    content2.classList.toggle("content");
    if(i2.className == "fa-solid fa-angle-down"){
            i2.className = "fa-solid fa-angle-up"
        }else {
            i2.className = "fa-solid fa-angle-down"
        }
});

// --------------three---------------
let icon3 = document.querySelector(".three .he .icon");
let i3 = document.querySelector(".three .he .icon i");
let content3 = document.querySelector(".three .answer p");

icon3.addEventListener("click", () => {
    content3.classList.toggle("content");
    if(i3.className == "fa-solid fa-angle-down"){
            i3.className = "fa-solid fa-angle-up"
        }else {
            i3.className = "fa-solid fa-angle-down"
        }
});

// --------------four---------------
let icon4 = document.querySelector(".four .he .icon");
let i4 = document.querySelector(".four .he .icon i");
let content4 = document.querySelector(".four .answer p");

icon4.addEventListener("click", () => {
    content4.classList.toggle("content");
    if(i4.className == "fa-solid fa-angle-down"){
            i4.className = "fa-solid fa-angle-up"
        }else {
            i4.className = "fa-solid fa-angle-down"
        }
});

// --------------five---------------
let icon5 = document.querySelector(".five .he .icon");
let i5 = document.querySelector(".five .he .icon i");
let content5 = document.querySelector(".five .answer p");

icon5.addEventListener("click", () => {
    content5.classList.toggle("content");
    if(i5.className == "fa-solid fa-angle-down"){
            i5.className = "fa-solid fa-angle-up"
        }else {
            i5.className = "fa-solid fa-angle-down"
        }
});


