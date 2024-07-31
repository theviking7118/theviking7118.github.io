// script.js
const typedTextSpan = document.getElementById('typed-text');
const cursorSpan = document.getElementById('cursor');

const textArray = ["Hello!", "Welcome to my Portfolio!", "Hope You Liked this!"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about');
  
    const revealSection = () => {
      const windowHeight = window.innerHeight;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 50 ) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealSection);
  
    // Call revealSection on load to handle the case when sections are in view on initial load
    revealSection();
  });