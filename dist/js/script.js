const typedTextSpan = document.querySelector(".wow");

const textList = ["Art that will see your worth.", "Your style.", "Your visual."];
const txtDelay = 200;
const removeDelay = 100;
const insertTxtDelay = 500;

let textListIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textList[textListIndex].length) {
        typedTextSpan.textContent += textList[textListIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, txtDelay);
    } else {
        setTimeout(erase, insertTxtDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textList[textListIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, removeDelay);
    } else {
        textListIndex++;
        if(textListIndex >= textList.length) textListIndex = 0;
        setTimeout(type, txtDelay + 800);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, insertTxtDelay + 150);
})