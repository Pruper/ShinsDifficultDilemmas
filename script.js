const textDiv = document.querySelector("#text");
const choicesDiv = document.querySelector("#choices");
const resultsDiv = document.querySelector("#results");

let choicesMade = [];

let textQueue = [];
let isTyping = false;

function displayText(text, callback = null, color = "#FFFFFF") {
    textQueue.push({ text: text + "\n", callback });
    textDiv.style.color = color;

    if (color == "lime") choicesMade.push("same");
    if (color == "red") choicesMade.push("different");

    if (!isTyping) typeText();
}

INSTANT_TEXT = false;
function typeText() {
    if (textQueue.length === 0) {
        isTyping = false;
        return;
    }

    isTyping = true;
    let { text, callback } = textQueue.shift();

    if (INSTANT_TEXT) {
        textDiv.textContent += text + "\n";
        isTyping = false;
        if (callback) callback();
        typeText();
    } else {
        let index = 0;
        function typeCharacter() {
            if (index < text.length) {
                textDiv.textContent += text.charAt(index);
                index++;
                setTimeout(typeCharacter, 30);
            } else {
                textDiv.textContent += "\n";
                isTyping = false;
                if (callback) callback();
                typeText();
            }
        }
        typeCharacter();
    }
}

function clearText() {
    textDiv.textContent = "";
}

function gameOver(message) {
    clearText();
    displayText(message, () => {
        showChoices([{ text: "Restart", action: resetGame }]);
    });
}

function showChoices(options) {
    choicesDiv.innerHTML = "";
    options.forEach(option => {
        if (option.condition && !option.condition()) return;
        let btn = document.createElement("button");
        btn.textContent = option.text;
        btn.onclick = () => {
            clearText();
            choicesDiv.innerHTML = "";
            option.action();
        };
        choicesDiv.appendChild(btn);
    });
}

function resetGame() {
    choicesMade = [];
    resultsDiv.innerHTML = "";
    clearText();
    startGame();
}

startGame();