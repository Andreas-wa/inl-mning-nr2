
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    console.log(scrolled);

    if (scrolled === scrollable){
        alert("Grattis! Du har tagit dig förbi hela sidan!");
    }
}); 