function scrollAppear() {
    var introText = document.querySelector('.effectTxt');
    var introPos = introText.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.5;

    if(introPos < screenPos){
        introText.classList.add('effectAppear');
    }
}

window.addEventListener('scroll',scrollAppear);