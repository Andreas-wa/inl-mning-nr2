// // var namn; // variable declaration //

// // namn ="Andreas"; // tilldelat värde till variabeln //

// // var efterNamn;

// // efterNamn="Wallström"; // börja inte med stor bokstav ("camel case") //
// // efternamn="wallstrlm"; // dessa två är två olika variablar //



// // // skapa en variabel med namnet age //
// // // tilldela värde //
// // var alder;
// // alder ="22 år";


// // var siffra = 12;
// // var siffradecimalTal =12.34;
// // var text = "någon text";
// // var textSiffra = "50"; // allt som är inom "xxx" är text, dessa kallas för String
// // var boolText = "true"; 
// // var boolsVärden = true;
// // var boolsVärden2 = false;


// // // logas in i consolen med namn //
// // console.log(namn);

// // // vissas på dokumentet //
// // document.write(namn);


// // console.log(alder);
// // document.write(alder);

// // variabeln - hur gammal personen är 
// var age = 18;

// // om personen är 18 år kommer consol skriva ut "du är myndig"

// if (age > 18) {
//     console.log("Du är myndig");
// }

// // en = betyder tilldelning medans två "==" jämnförelse mellan värderna 
// // else if körs bara om åvan inte stämmer.

// // annars om...
// else if (age === 18) {
//     console.log("Du är precis myndig");
// } 

// // if(true) {
// //     console.log("körs");
// // }

// // annars...
// else {
//     console.log("Du är inte myndig!!");
// }

// // räknar från 10 ner till 0 med minus 1.
// // for (var i = 10; i>=0; i-=1){
// //     console.log(i);
// // }

// // while(10==10){
// //     console.log("haha ");
// // }



//     // lista med värdena 12, 34, 44, 95, andreas, test
//     // var lista = [12, 34, 44, 95, "Andreas", "test"];
//     // document.write(lista[2] + " ");
//     // document.write(lista[5] + " ");
//     // document.write(lista[6]);
//     // document.write(lista.length);

//     // // for loop
//     // // (i=0)börjar på 0, (i<lista.length) hur långa listan är, (i++) vad den ökar eller minskar med.
//     // for (var i = 0; i < lista.length; i++) {
//     //     console.log(i);
//     //     console.log(lista[i]);
//     // }

// //           nyckel:"värden", nyckel:"värden", 
// var object = {namn:"Andreas", age:22, yrke:"skola", isEmployed:true}

// console.log(object.namn);
// console.log(object.age);
// console.log(object.yrke);
// console.log(object.isEmployed);


// var elev = {namn:"Andreas", klass:"WIE19S", webbutveckling:true}

// console.log(elev.namn);
// console.log(elev.klass)
// console.log(elev.webbutveckling)

// // let nr = 100;
// // console.log(nr);

// // nr = 200; console.log(nr);

// // // let nr= 200;

// // const number_2 = 2000; console.log(number_2);

// // // number_2 = 3000;

// // let number_3 = prompt("hej, skriv en siffra");
// // let number_4 = prompt("mata in den andra siffran");

// // let konnum_1 = Number(number_3);
// // let konnum_2 = Number(number_4);

// // console.log(Number(konnum_1) + Number(konnum_2);


// // function efternamntillfunktionen(var){

// //     här kan ske olika räkningar
// // }

// // console.log(nanvar)
// // let nanvar="när";
// // console.log(nanvar)
// // let nanvar=("")



// alert2(); // funktion anropning
// function alert2(){
//     console.log("meddellande från funktion");

// }

// alert2(); // eller call a funktion



// function VisaMsg(){
//     console.log("hej från funktionen");
// }

// VisaMsg();

// function add(Number, number2){
//     console.log(Number+number2);
// }

// add(20,40);

// function add(number3,number4,number5){
//     console.log(number3*number4*number5);
// }

// add(2, 10, 2);

// // multify(3,4,5)

// // räknar ut moms
// // function utR(varde, moms){
// //     console.log(varde * 0.25);
// // }

// // urR(200, moms);

// function utR (varugrupp){
//     let totalt = varugrupp- (varugrupp * 0.25);
//     console.log(totalt);
//     return totalt;
// }

// let first=utR(2000);
// let second=utR(3000);

// console.log("totalt kostnader" + (first+second));


// // räknasak();
// const räknasak = function(){
//     console.log("den räknar något");
// }

// räknasak();

// let p = document.querySelector("p");
//     console.log(p);
// p.textContent = "hejhej";
// p.style.color = "röd";

// let h1 =document.createElement("h1");
// // console.log(h1);

// const body = document.querySelector("body");
// body.appendChild(h1).textContent= "hej h1"



// const div = document.createElement("div"); //skapar div
// // console.log("div");
// const p_1 = document.createElement("p"); // skapar p

// p_1.textContent = "ppppppppppppp!"; // skriver ut vad p ska vara

// div.appendChild(p_1); // <body> <p> </p> </body>

// body.appendChild(div); //<body> <div> </div> </body>


// function vatCount(){
//     const varupris = document.querySelector("#pris").value;
//     console.log(varupris);
//     console.log(varupris*.25);

// }
  
// const btn = document.querySelector(".btn");
// btn.addEventlistener("click", vatCount);


// const pass = document.createElement(".btn");


// function checkPassword(){ 
//     const password1 = document.querySelector("#password1").value; // det som skrivs i lösen1.
//     const password2 = document.querySelector("#password2").value; // det som skrivs i lösen2.
//     const h1 = document.createElement("h1");
//     const body = document.querySelector("body");
//         body.appendChild(h1);

//     //är lösen1 och lösen2 lika.
// if (password1 === password2){
//     // console.log("stämmer"); //ja, samma. (skriver i console)
//     h1.textContent="välkommen"; // skriver i dokumentet
// }

// else if () {
//     h1.textContent="inget skrivet"
// }

// else { 
//     // console.log("stämmer inte"); //nej, inte samma. (skriver i console)
//     h1.textContent="fel lösenord. försök igen" // skriver i dokumentet
// }
// }

// // knappen blir kopplad till knappen.
// const btn = document.querySelector(".btn");
// // kopplar knappen med lösen1 och 2.
// btn.addEventListener("click", checkPassword);

// const div = document.querySelector("div");
// div.innerHTML = "<h1>"+ "hej hej"+ "</h1>";

// function knappen() {
// const knapp = document.getElementById("test");
// knapp.innerHTML = "hejhej";
// }

// function knapp() {
// const shit = document.getElementById("testar");
// shit.innerHTML = "javashit";
// }



// var myvariable = false // this is a comemnt

// var words = "this is"; //this is a variable
// var morewords = " a sentence ";
// var sentence = words + morewords; //combines variable words + morewords
// document.write(sentence)

//     document.write("<br>");

// var num1 = 5;
// var num2 = 5;
// var total = num1 + num2;
// document.write(total);

//     document.write("<br>");

// var alpha = "ABCDEFG" // variable with a string at the end
// var length = alpha.length;
// document.write(length); // discreibes how many letters there's in alpha

//     document.write("<br>");

// var a = new Array(4); // this is an array
// a[0] = "car"; 
// a[1] = "dog";
// a[2] = "can";
// a[3] = "cat";
// document.write(a[0]); // this decides what array will show in the document

//     document.write("<br>");

// function sayHello(who){ 
//     document.write(" hello, " + who);
// }
// sayHello("bob ");
//     document.write("<br>");
// sayHello("mary ");

//     document.write("<br>");

// var a = 11; // making a variable with the value 11 (or whatever i change it to).
// if (a > 10) { // if a is greater then 10.
//     alert(a + " jaaa!"); // alert on the document " the a variable and the " jaaa!" "
// } 
// else { // if it is NOT greater then 10.
//     alert("nooo!"); // alert on the dockument "nooo!".
// }

// document.write("<br>");


// for (i = 0; i < 4; i++) { // for loop thats starts att "0"; ends at "4"; increses with 1 (++).
//     document.write("this is irteration " + i + "<br>"); // writes the iteration utill it hits 3 (0(1),1(2),2(3,3(4)).
// }



const btn = document.querySelector("button");

const lista = []

function saveRekord(){
    
const namn = document.querySelector("#fornamn").value;
const num = document.querySelector("#num").value;

const person ={
namn,
num
}

// hämtar div'n
const namnDiv = document.getElementById("hallå");

namnDiv.innerHTML ="<li>Fornamn :" +  person.namn.toUpperCase() + "</li>" +
"<li> Efternamn: "+ person.num+ "</li>";

//console.log(lista)
lista.push(person);

localStorage.setItem("namn", JSON.stringify(lista));

const get = localStorage.getItem("namn");
// const parse = JSON.parse(get);

for (const property in lista){

    console.log(JSON.parse(get));

}


// console.log(get);

}
 
// localStorage.setItem('fornamn', 'num');
// let number = localStorage.getItem('num');

btn.addEventListener("click", saveRekord)

