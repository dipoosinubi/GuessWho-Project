
//create variables
let words = ["arsenal", "aston-villa", "bournemouth", "brighton", "burnley", "chelsea", "crystal-palace", "everton",
    "leicester-city", "liverpool", "manchester-city", "manchester-united", "norwich-city",
    "sheffield-united", "southhampton", "tottenham-hotspur", "watford", "westham-united", "wolverhampton"];

// creates word letters to choose from.
let alphabets = document.getElementById("buttons");
    for (var i=65; i<91; i++) {
      var letters = document.createElement("input");
      letters.type = "button";
      letters.value = String.fromCharCode(i);
      alphabets.appendChild(letters);
    }

// randomize words 
let word = words[Math.floor(Math.random() * words.length)];

console.log(word);


// create '*' based on the length of the word
let blanks = document.getElementById("blanks")
let hiddenWord = [];
for (let i = 0; i < word.length; i++) {
    hiddenWord.push('*');
}

blanks.innerHTML = hiddenWord

