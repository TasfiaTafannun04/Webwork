document.addEventListener('scroll', () => {
    const g1strow = document.querySelector('#gal1strow');
    const ga1pos = g1strow.getBoundingClientRect().top;
    const screenheight = window.innerHeight;
    if(ga1pos < screenheight){
        g1strow.classList.add('animate');
    }
});

document.addEventListener('scroll', () => {
    const g2ndrow = document.querySelector('#gal2ndrow');
    const ga2pos = g2ndrow.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (ga2pos < screenHeight) {
        g2ndrow.classList.add('animate');
    }
});