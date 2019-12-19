// gör variabel till inkomst, kostnad, add, remove, button, osv. alla värden som ska användas/förändras.
let summa = document.querySelector(".totalSumma___text");
// let laggtill = document.querySelector(".inputs___laggtill");
let budget = 0;
summa.innerHTML = budget;
// koppla ihop "+" från selactorn med inkomst och "-" med kostnader
document.querySelector(".inputs___laggTill").addEventListener("click", eller);

// if function som gör att om option är + så ska den skicka pengar in -
// - annars kommer den att skicka pengar ut.
function eller() {
    // x = väljer vilken "select" index man ska använda sig av.
    let x = document.getElementById("addRemove").selectedIndex;
    // y = är värdet av "select".
    let y = document.getElementById("addRemove").options;
    // detta är text inputen.
    let inputTxt = document.getElementById("inputs___text").value;
    // detta är nummer input.
    let inputNr = document.getElementById("inputs___nummer").value;

    // om värdet är mindre än 0 kommer den att skriva ut dei kostnad p-tagen
    if(x > 0){
        document.getElementById("kostnad___text").innerHTML = inputTxt + " -" + inputNr;
        // gör lista för inkomst inuti UL
        let kostnadUl = document.getElementById("UtgifterSumma___text");
        let kostnadLi = document.createElement("li");
        kostnadUl.appendChild(kostnadLi);
        kostnadLi.innerHTML = inputTxt + " " + inputNr;
        console.log("Minus");
        
        // detta skirver ut i summan för varje "minus". 
        converteraData = Number(inputNr);
        let newSum = budget - converteraData;
        newbudget = Number(newSum);
        budget = newbudget;
        console.log(converteraData);

        summa.innerHTML = budget + "kr";
    } else {
        document.getElementById("inkomst___text").innerHTML = inputTxt + " " + inputNr;
        // gör lista för kostnad inuti UL
        let inkomstUl = document.getElementById("InkomstSumma___text");
        let inkomstLi = document.createElement("li");
        inkomstUl.appendChild(inkomstLi);
        inkomstLi.innerHTML = inputTxt + " " + inputNr;
        console.log("Plus");
        
        // detta skirver ut i summan för varje "minus". 
        converteraData = Number(inputNr);
        let newSum = budget + converteraData;
        newbudget = Number(newSum);
        budget = newbudget;
        console.log(converteraData);

        summa.innerHTML = budget + "kr";
    }
}