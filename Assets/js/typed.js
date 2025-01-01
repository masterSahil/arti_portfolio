const textArray = ["Full Stack Developement", "Android Developement", "Flutter Developement"];
const typingSpeed = 150; 
const erasingSpeed = 30; 
const delayBetweenWords = 500; 
const targetElement = document.getElementById("typing-effect");

let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    if (!isErasing) {
        targetElement.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isErasing = true;
            setTimeout(typeEffect, delayBetweenWords);
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    } else {
        targetElement.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isErasing = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, delayBetweenWords);
        } else {
            setTimeout(typeEffect, erasingSpeed);
        }
    }
}

typeEffect();
