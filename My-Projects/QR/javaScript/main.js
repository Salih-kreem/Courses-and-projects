let input = document.querySelector("input");
let btn = document.querySelector("button");
let folderEmg = document.querySelector(".image");
let img = document.querySelector("img");
let div = document.createElement("p");

btn.onclick = function Qr() {
    window.onload;
    if(input.value === '') {
        img.src = "";
        div.textContent = "";
        div.append(document.createTextNode("Sorry The Box Input Is Empty"));
        folderEmg.appendChild(div);
    }else {
        div.remove();
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input.value}`;
        
    }
    input.value = '';
}


