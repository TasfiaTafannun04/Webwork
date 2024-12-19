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

document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('#intro');
    const intpos = intro.getBoundingClientRect().top;
    const screenheight = window.innerHeight;
    if (intpos < screenheight) {
        intro.classList.add('animate');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const col8 = document.querySelector('#col-8');
    const col8pos = col8.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (col8pos < screenHeight) {
        col8.classList.add('animate');
    }
});

document.addEventListener('scroll', () => {
    const book1 = document.querySelector('#book1');
    const book1pos = book1.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (book1pos < screenHeight) {
        book1.classList.add('animate');
    }
});

document.addEventListener('scroll', () => {
    const book2 = document.querySelector('#book2');
    const book2pos = book2.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (book2pos < screenHeight) {
        book2.classList.add('animate');
    }
});

document.addEventListener('scroll', () => {
    const book3 = document.querySelector('#book3');
    const book3pos = book3.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (book3pos < screenHeight) {
        book3.classList.add('animate');
    }
});