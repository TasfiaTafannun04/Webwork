document.addEventListener('scroll', () => {
    const g1strow = document.querySelector('#gal1strow');
    const ga1pos = g1strow.getBoundingClientRect().top;
    const screenheight = window.innerHeight;
    if (ga1pos < screenheight) {
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
    const parentb = document.querySelector('#displaybook');
    const book1pos = parentb.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (book1pos < screenHeight) {
        book1.classList.add('animate');
    }
});

document.addEventListener('scroll', () => {
    const book2 = document.querySelector('#book2');
    const parentb = document.querySelector('#displaybook');
    const book2pos = parentb.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (book2pos < screenHeight) {
        book2.classList.add('animate');
    }
});

document.addEventListener('scroll', () => {
    const book3 = document.querySelector('#book3');
    const parentb = document.querySelector('#displaybook');
    const book3pos = parentb.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (book3pos < screenHeight) {
        book3.classList.add('animate');
    }
});

document.addEventListener('scroll', () => {
    const momento = document.querySelectorAll('.momento');
    const momentoheight = window.innerHeight;
    momento.forEach(image => {
        const momentopos = image.getBoundingClientRect().top;
        if (momentopos < momentoheight) {
            image.classList.add('animate');
        }
    });
});

// var audio = document.getElementById("myAudio");
// var vbtn = document.getElementById("btn");
// document.addEventListener("DOMContentLoaded", () => {
//     vbtn.addEventListener("click", () => {
//         if (audio.muted) {
//             audio.muted = false;
//             vbtn.id = "btnm";
//         }
//         else {
//             audio.muted = true;
//             vbtn.id = "btn";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {

    var volume1 = document.getElementById("volumeadj");

    var audio = document.getElementById("myAudio");

    var vbtn = document.getElementById("btn");

    window.addEventListener("beforeunload", () => {

        localStorage.setItem("audioPlaying", !audio.paused);

    });

    document.body.addEventListener("click", () => {

        if (audio.paused) {

            audio.play();

        }

    }, { once: true });

    vbtn.addEventListener("click", () => {

        audio.muted = !audio.muted; // Toggle mute state

        vbtn.classList.toggle("muted"); // Toggle class to change background image

        console.log("Audio Muted:", audio.muted); // Debugging

    });

    volume1.addEventListener("input", () => {
        audio.volume = volume1.value;
    });
});

function playAudio() {
    if (audio.paused) {
        audio.play();
    }
    // Remove all event listeners after the first interaction
    document.removeEventListener("scroll", playAudio);
    document.removeEventListener("mousemove", playAudio);
    document.removeEventListener("keydown", playAudio);
    document.removeEventListener("click", playAudio);
}

document.addEventListener("scroll", playAudio, { once: true });
document.addEventListener("mousemove", playAudio, { once: true });
document.addEventListener("keydown", playAudio, { once: true });
document.addEventListener("click", playAudio, { once: true });
