function ShowData(){
    const div = document.querySelector(".divfaktura")
   
    div.innerHTML= localStorage.getItem("data");
  }
  //DOMContentLoaded event väntar tills documentet laddas upp helt sedan anropar //functionen inuti den
  document.addEventListener("DOMContentLoaded", function (){
     ShowData();
  })

//   window.onload = function() {
//     if(divfaktura === 0) {
//         window.location.reload();
//     } else {

//     }
// }

// // const faktura = 

// for(let i in faktura){
//   console.log(faktura[i]);
//   const summa = faktura[i] + faktura[i] * .25;
//   console.log(summa)
// }

// // MAP
 
faktura.map(
   (i)=> {console.log(i)}
)