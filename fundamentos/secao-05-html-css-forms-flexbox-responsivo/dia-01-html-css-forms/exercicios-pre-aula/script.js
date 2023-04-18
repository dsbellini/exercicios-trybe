// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


function naoAbreLink (event) {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', naoAbreLink) 

function naoFunfaCheckbox (event) {
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', naoFunfaCheckbox) 

INPUT_TEXT.addEventListener('keypress', (event) => {
    const character = event.key
    if (character !== 'a') {
        event.preventDefault() 
    }
});