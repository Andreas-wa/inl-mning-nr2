// // Shopping cart nr1

// let btnNike = document.querySelector(".btnN");
// let btnAdidas = document.querySelector(".btnA");
// let modal = document.querySelector(".modal");

// let total = document.querySelector(".totalt");


// btnNike.addEventListener("click", function () {
//     let nike;
//     nike = "Nike " +  1800;

//     let newElement = document.createElement("li");
//     newElement.innerHTML = nike;

//     modal.appendChild(newElement);
// });

// btnAdidas.addEventListener("click", function () {
//     let adidas;
//     adidas = "Adidas " + 1000;

//     let newElement = document.createElement("li");
    
//     newElement.innerHTML = adidas;
    
//     modal.appendChild(newElement);
// });

// gör en variabel för båda knapparna

// push, pop shopping cart

var kundvagn = [];
document.getElementById("modalText").innerHTML = kundvagn;

function addNikeFunc(){
  kundvagn.push("Nike " + 1800);
  document.getElementById("modalText").innerHTML = kundvagn;
} 
function removeNikeFunc(){
  kundvagn.pop();
  document.getElementById("modalText").innerHTML = kundvagn;
}

// denna function räknar ut antlet
// document.getElementById("demo").innerHTML = kundvagn.push();

