
//create variables
let words = ["arsenal", "aston-villa", "bournemouth", "brighton", "burnley", "chelsea", "crystal-palace", "everton",
    "leicester-city", "liverpool", "manchester-city", "manchester-united", "norwich-city",
    "sheffield-united", "southhampton", "tottenham-hotspur", "watford", "westham-united", "wolverhampton"];
    

// randomize words 
let word = words[Math.floor(Math.random() * words.length)];

console.log(word);
// create '*' based on the length of the word

let hiddenWord= [];
  for (let  i = 0; i < word.length; i++){
      hiddenWord.push('*'); 
  }
 document.getElementById("blanks").innerHTML = hiddenWord

