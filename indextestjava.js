// var bensin = 100; // NUMBER
// var name = "Lasse"; // STRING

// bensin = bensin - 10;

// bensin = bensin - 20;

// console.log(bensin);


// var checkout = false; // BOOLEAN

// var box;

// // var; // kn ändra variabeln
// // let; // likande var 
// // const; // kan inte ändra variabeln


// const word = "Andreas";
// const otherword = "Wallström";

// // FUNCTION
// function upperCase(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }
 
// upperCase(word);
// upperCase(otherword);


// console.log(box);
// console.log("hello, World!");
// console.log("hello. Tobbe!");

// const namn = "Anders";

// console.log("hello, " + namn);


// var fuel = 100;

// fuel = fuel - 20;

// console.log(fuel);


// const hejhej = "Tjena";
// const hejsan = "TJENARE";

// function lowerCase(hej){
//     const lowerCased = hej.toLowerCase();
//     console.log(lowerCased);
// }

// lowerCase(hejhej);
// lowerCase(hejsan);



// const bil = "Audi";

// document.write("din bil är " + bil);


// // IF, ELSE IF, ELSE
// const age = 18;

// if(age > 18){
//     console.log("Welcome");
// } 

// else if (age === 18){
//     console.log("pppuuuhhh!");
// }

// else {
//     console.log("Sorry");
// }


// //&&  // xxx and xxx both variable must be true
// // ||  // xxx or xxx one variable must be ture


// //ARRAY
// const schedule = ["wake up", "eat", "school", "eat", "sleep"]; // sting

// const phone = [123456789, 987654321] // number

// schedule.push("hej a new thing"); // push adds a vaule in the schedule 
// schedule.pop(); // pop removes a value in schedule
// // shift 
// // unshift

// console.log(schedule);
// console.log(phone);


// // OBJECT
// const user = {
//     name: "Anders",
//     age: 22,
//     purcheses: ["phone", "car", "laptop"],

//     sayName: function(){
//         console.log(this);
//     }
// };

// user.sayName();
// //console.log(user);

// function saymyAge(){
//     console.log(`my age is ${this}`);
// }

// saymyAge();

// document.write("<br>");

// document.write("Hejsan!");

// // THIS
// // console.log(this);


// // LOOPS //

// // FOR LOOP
// const names = ["ett namn", "två namn", "tre namn"]

// for(name of names) {
//     console.log(name);
//     if(name === "två namn") {
//     console.log(`det finns ${name}`);
//     break;
//     }
// }


// // WHILE LOOP
// let loading = 0;

// while(loading < 100){
//     console.log("website loading")

//     loading++;
// }



// let profile = {
//     name: 'Andreas',
//     age: 22,
//     mail: "lasse@gmail.com"
// };

// console.log(profile);



// const text = document.querySelector('.rubrik');
// const btn = document.querySelector('.send');

// btn.addEventListener('click', function(){
//     text.classList.toggle("btn");
// })

// text.classList.add("send") // tar alla classer i texten. för att sedan lägga till en class med "add"

// text.style.color = "red";
// text.style.backgroundColor = "green";



// koppla JS med HTML med bland annat inputs, buttons etc.
// const userList = document.querySelector(".name-list li");
// const input = document.querySelector(".list-input");
// const btn = document.querySelector(".Btn");

// btn.addEventListener('click', function() {
//     const newLi = document.createElement('Li');
//     const LiContent = document.createTextNode(input.value);
    
//     newLi.appendChild(LiContent);

//     userList.appendChild(newLi)
// })

// for (user of userList){
//     user.addEventListener('click', function () {
//         this.style.color = "red";
//     });   
// }



// const li = document.querySelectorAll("li");

// for (let i = 0; i < li.length; i++){
    
//     console.log(li[i]);
// }



// document.("ul").style.backgroundColor = "red";

//document.querySelector("ul").className ="invisible";

// const lista = document.querySelector('.ul-col');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function(){
//     console.log(lista.className)
//     if (lista.className==="visible"){

//         lista.className="invisible";
//     }
//     else {
//         lista.className="visible";
//     }
// })



// function test(x) { // function
//     const test=(x)=>{  //ARROW function
//     console.log("hej hej hallå");

//     if (x == null){
//         console.log("fuck off");
//     }
//     else {
//         console.log(x**x);
//     }
// }

// test(3);
// test(2);
// test(2);
// test();

//RETURN
//return går att användas i en funsction eller en ifsats


// const div = document.createElement("div");
// div.textContent="test div";
// console.log(div);

// const ul =document.querySelector("ul");
// ul.appendChild(div);
// const li =document.querySelector("li");


// ul.removeChild(div);
// document.querySelector("ul").innerHTML="<li>" + div + "</li>";


//faktura hjälp

function rakna() {
const produkt = document.querySelector("#produkt").value;
const moms = document.querySelector("#pris").value;
    console.log(Number(produkt*moms));
    document.querySelector("ul").innerHTML="<li>" + (Number(produkt*moms)) + "</li>";
    // document.querySelector("ul").textContent="produkt";
    // alert(produkt*moms);
    // return produkt*moms;
}


const btn2 = document.querySelector(".rakna");
btn2.addEventListener("click", rakna);


const produkt1 = rakna(1000, .25);
const produkt2 = rakna(2000, .25);
console.log("totalt kostnad :" + (produkt1+produkt2));




// function person(e) {
//     e.preventDefault();
//     console.log(e);
//     const text = document.querySelector("#text").value;
//     const tel = document.querySelector("#tel").value;
//     const mail = document.querySelector("#mail").value;

//     const div = document.createElement("div");
//     const body = document.querySelector("body");
//     div.innerHTML="<li>" + text + "</li>" + "<li>" + tel + "</li>" + "<li>" + mail + "</li>";
//     body.appendChild(div);
//     // div.append(li);

//     // MIN Version
//     // document.querySelector("ul").innerHTML ="<li>" + (text + tel + mail) + "</li>";

//     // ul.appendChild(person);
//     // console.log(text + tel + mail);
// }

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", person);


// position meddelande
window.navigator.geolocation.getCurrentPosition(
    (position) =>{console.log(position);},
    (err)=>{console.log(err)}
)


const person= {
    namn:"andreas",
    age: 22,
    lön: 10000,
}
console.log(person.age);

person.bonus = 1000;
    console.log(person);
    console.log(person.lön);

const andreaslön = (person.lön);
    console.log(andreaslön);
    console.log(person);

    const nylön = new Object ();
    nylön.namn = "yeet!",
    nylön.age = "23",
    nylön.lön = person.lön + person.bonus,
    console.log(nylön);


// ARRAY med en Object.keys
console.log(Object.keys(person));

// const objex = {
//     person2 : {
//         namn: "lasse",
//         age: 40,
//     },
//     person3 : {
//         namn: "anders",
//         age: 32,
//     }
// }
// console.log(objex.person2.person3);


const employee = {
    namn:"Danish",
    id:01,
    timlön:300,
    arbetatTimmar:100,
    countSalary: function(){
        console.log(this.timlön * this.arbetatTimmar)
        console.log(this)
       //what the hack is this?
       //this refererar till objektet 
       // motsvarande till employee.timlön
       
    }
  }

employee.countSalary();
  
// DELETE const employee namn
delete employee.namn;


//ARRAY
const bilar = ['Audi', 'Volvo', 'Bmw'];
const count = 0;
const antal = 0;
console.log(bilar[1, 2]);

bilar.push('VW');

console.log(bilar);

const lista = bilar.pop();
console.log(lista);

const skor = ['nike', 'adidas', 'newbalance', 'puma'];

for (let i = 0; i < skor.length; i++) {
    const listaSkor = skor[i];
    console.log(listaSkor)
    // console.log(listaSkor);
}

for(let i in skor) {
    // console.log(i);
    const typ = i + " " + skor[i];
    console.log(typ);
}


// typ.lista(
//     (i)=>{console.log(i);} 
// );


const obj2= {
    namn: "Steven",
    age: 24,
    id: 10,
}

Object.keys(obj2).map(
    (i)=> {
        console.log(i);
    }
)

Object.values(obj2).map(
    (i)=> {
        console.log(i);
    }
)

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  // 

  function users(userName, pass, time){
    this.userName = userName;
    this.pass= pass;
     this.time = time;
     
  this.count=function(){
     console.log("månadslön", this.time);
     }
 }
  
 var chef = new users ("Lasse", "***", 100);
 var worker = new users ("Anders", "*", 90);
 chef.count();

// kan skriva "worker.count()" för att få fram worker lön 
 

  function myFunction() {
    window.print();
  }