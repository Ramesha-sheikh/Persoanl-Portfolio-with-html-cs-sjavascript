document.addEventListener("DOMContentLoaded", () => {
    const textDisplay = document.querySelector(".typing-text");
    const phrases = ["Front-End Developer", "Programmer", "Web Developer","Web Designer"];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    function loop() {
      isEnd = false;
      textDisplay.innerHTML = currentPhrase.join('');

      if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
          textDisplay.innerHTML = currentPhrase.join('');
        }

        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop(phrases[i][j]);
          j--;
          textDisplay.innerHTML = currentPhrase.join('');
        }

        if (j == phrases[i].length) {
          isEnd = true;
          isDeleting = true;
        }

        if (isDeleting && j === 0) {
          currentPhrase = [];
          isDeleting = false;
          i++;
          if (i === phrases.length) {
            i = 0;
          }
        }
      }
      const speedUp = Math.random() * (80 - 50) + 50;
      const normalSpeed = Math.random() * (300 - 200) + 200;
      const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
      setTimeout(loop, time);
    }

    loop();
  });


// Hamburger Menu
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
