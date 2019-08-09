
//create variables
let words = ["ARSENAL", "BOURNEMOUTH", "BRIGHTNON", "BURNLEY", "CHELSEA", "EVERTON",
    "LEICESTER", "LIVERPOOL", "MANCHESTER", "NORWHICH", "SHEFFIELD",
    "SOUTHHAMPTON", "TOTTENHAM", "WATFORD", "WOLVERHAMPTON"];

let correctGuess = 0;
let wrongGuess = 0;
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
    letters.disabled = false;
    alphabets.appendChild(letters);
    letters.addEventListener('click', checkWord);
}

// randomize words 
let word = words[Math.floor(Math.random() * words.length)];

console.log(word);

// create '*' based on the length of the word

for (let i = 0; i < word.length; i++) {
    let hiddenWord = document.createElement('span');
    hiddenWord.className = "hiddenChar";
    hiddenWord.innerHTML = "_";
    blanks.appendChild(hiddenWord);
}

function checkWord(event) {
    let wrongGuess =0;
    let picked = event.target.value;
    this.disabled = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === picked) {
            document.getElementsByClassName('hiddenChar')[i].innerHTML = picked;
        }
        if (word[i] !== picked) {
            wrongGuess += 1;
            console.log(wrongGuess)
            document.getElementById('soccerBall').style.opacity = (1 - (wrongGuess/chances));
        }
    }
    // console.log('chances',chances)
    // if (chances < 1){
    //     alert("YOU LOSE");
    // }
}