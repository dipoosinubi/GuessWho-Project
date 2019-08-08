
//create variables
let words = ["ARSENAL", "BOURNEMOUTH", "BRIGHTNON", "BURNLEY", "CHELSEA", "EVERTON",
    "LEICESTER", "LIVERPOOL", "MANCHESTER", "NORWHICH", "SHEFFIELD",
    "SOUTHHAMPTON", "TOTTENHAM", "WATFORD", "WOLVERHAMPTON"];

let correctGuess;
let wrongGuesses;
let chances = 6;
let pickedLetter = [];

let blanks = document.getElementById("blanks");
// creates word letters to choose from.
let alphabets = document.getElementById("buttons");


for (let i = 65; i < 91; i++) {
    let letters = document.createElement("input");
    letters.type = "button";
    letters.className = "clickMe";
    letters.value = String.fromCharCode(i);
    alphabets.appendChild(letters);
    letters.addEventListener('click', checkWord);
}

// randomize words 
let word = words[Math.floor(Math.random() * words.length)];

console.log(word);

// create '*' based on the length of the word

for (let i = 0; i < word.length; i++) {
    let hiddenWord = document.createElement('span');
    hiddenWord.innerHTML = "_";
    hiddenWord.value = String.fromCharCode(i)
    blanks.appendChild(hiddenWord);
}

function checkWord() {
    let picked = this.innerHTML;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === picked) {
            document.getElementsByClassName('span')[i].innerHTML = picked;
            correctGuess += 1;
        } else if (word[i] !== picked) {
            chances -= 1;
        }
    }
}