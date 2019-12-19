// function colortxt(){
//     let txt = document.getElementById("#text").value;

// }

const btn = document.querySelector(".bestall");

btn.addEventListener("click", ()=>{
    const data = document.querySelector(".number").value;
    const converteraData = Number(data);

console.log(converteraData);
const totalt = converteraData + (converteraData*.25);
// document.querySelector("data");
localStorage.setItem("data", totalt);
window.document.location ="./faktura.html";
})

// window.getComputedStyle(node_list[i]).display == "none"

// function showCheckbox(){  
//     var node_list = document.getElementsByClassName('number');
//     for (var i = 0; i < node_list.length; i++) 
//     {  
//         node_list[i].classList.toggle('check-hidden');
//     }
// }

// let bestall = document.getElementById(".bestall").value;

// console.log(bestall);


