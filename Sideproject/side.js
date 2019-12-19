function bgChanger() {
    // console.log("working");
    if(this.scrollY > this.innerHeight / 0.6){
        document.body.classList.add("sec___color");
    } else{
        document.body.classList.remove('sec___color');
    }
}

window.addEventListener("scroll", bgChanger);
