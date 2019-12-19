///// navSlide/navbar funktionen//////
const navSlide = () => {
    // gör en variabel för classen "burger".
    const burger = document.querySelector('.burger');
    // gör en variabel för classen "nav-link".
    const nav = document.querySelector('.nav-link');
    // gör en variabel föt alla individuella länkar i li (listan) "nav-link". 
    const navLink = document.querySelectorAll('.nav-link li');

    // när man trycker på burgar menyn kommer "nav active" funktionen att aktiveras 
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    
        /////Animation för link//////
        // link är vardera länkar i listan, index gör det möjligt att sätta en delay för vardera länk.
        // if = om animationen har spelats kommer den inte att animera.
        navLink.forEach((link,index) =>{
            if (link.style.animation){
                link.style.animation = '';
                // men om den inte hittar ett värde så kommer den att spela upp animationen. 
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 10}s`;
            }
        });
        // burger menus toggle funktion
        burger.classList.toggle('toggle');
    });
}
navSlide();

// /// kommer att kalla på allt inuti funktionen "navSlide"
// navSlide();

// function ShowData(){
//     const div = document.querySelector(".divfaktura")
   
//     div.innerHTML= localStorage.getItem("data");
//   }
//   //DOMContentLoaded event väntar tills documentet laddas upp helt sedan anropar //functionen inuti den
//   document.addEventListener("DOMContentLoaded", function (){
//      ShowData();
//   })

//functionen "VAGNBTN" är kopplad med klassen "kund" knappen
let vagnBtn = document.querySelector(".kund");
// 
let vagn = document.querySelector(".modal_bg");
// 
let exit = document.querySelector(".modal___exit");

vagnBtn.addEventListener("click", function(){
        // när man trycker på "kundvagn" kommer bg_active att vissas
    vagn.classList.add("bg_active");
});

exit.addEventListener("click", function(){
    // när man trycker på "exit" kommer bg_active att försvinna
    vagn.classList.remove("bg_active");
});

