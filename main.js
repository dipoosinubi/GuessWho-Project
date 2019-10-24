
//create variables
let words = ["ARSENAL","ASTON-VILLA","BOURNEMOUTH", "BRIGHTON", "BURNLEY", "CHELSEA","CRYSTAL-PALACE", "EVERTON",
    "LEICESTER-CITY", "LIVERPOOL", "MANCHESTER-UNITED","MANCHESTER-CITY","NEWCASTLE-UNITED"
    ,"NORWHICH-CITY", "SHEFFIELD-UNITED", "SOUTHHAMPTON", "TOTTENHAM-HOTSPUR", "WATFORD","WESTHAM-UNITED", "WOLVERHAMPTON"
];

let correctGuess = 0;
let wrongGuess = 0;
let chances = 6;
let blanks = document.getElementById("blanks");
let alphabets = document.getElementById("buttons");
let modal = document.getElementsByClassName('bg-modal');


//create alphabets to click on
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

// create placeholding underscore or hyphen based on the length of the word
for (let i = 0; i < word.length; i++) {
    let hiddenWord = document.createElement('span');
    hiddenWord.className = "hiddenChar";
    if (word[i] === "-") {
        hiddenWord.innerHTML = "-";
        correctGuess +=1 ;
        console.log(correctGuess)
    } else {
        hiddenWord.innerHTML = "_";
    }
    blanks.appendChild(hiddenWord);
}
// compare the clicked letter with the letters in the word and replace it's respective placeholder.
function checkWord(event) {
    let letterFound = false;
    let picked = event.target.value;
    this.disabled = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === picked) {
            document.getElementsByClassName('hiddenChar')[i].innerHTML = picked;
            letterFound = true;
            correctGuess += 1;
            console.log(correctGuess)
        } 
    }

    // if letter isn't found, count down the number of chances left and increase number of wrong guesses
    if (!letterFound) {
        wrongGuess += 1
    }
    let chancesLeft = (chances - wrongGuess)
    document.getElementsByClassName('Left')[0].innerHTML = chancesLeft;
    document.getElementById('sadMessi').style.opacity = wrongGuess / chances;

    // when chances is 0, display fail state
    if (chancesLeft <= 0) {
        document.getElementsByClassName('Left')[0].innerHTML = '0';
        modal[0].style.display = 'flex';
    }

    // when all words are found, display win state
    else if (correctGuess == word.length) {

        document.getElementsByClassName('Left')[0].innerHTML = '0';
        modal[0].style.display = 'flex';
        document.getElementById('fail').innerHTML = "YOU WIN! AWESOME!!!";
        document.getElementById('emoji').setAttribute("src", "images/1.png");
    }
};
// close modal and return to game
document.getElementsByClassName('close')[0].addEventListener('click', closeModal)

function closeModal() {
    modal[0].style.display = 'none';
};
function resetGame() {
    document.location.reload();
};