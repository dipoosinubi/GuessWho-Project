let words = ["arsenal", "aston-villa", "bournemouth", "brighton", "burnley", "chelsea", "crystal-palace", "everton", 
"leicester-city", "liverpool", "manchester-city", "manchester-united", "norwich-city", 
"sheffield-united", "southhampton", "tottenham-hotspur", "watford", "westham-united", "wolverhampton"]

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    console.log(words[6]);

//create buttons for each letter
function createLetters() {
    let newLet = document.createElement('li');
}

function addAlphabets(event){
    event.preventDefault();
    //append li element ul
    document.querySelector('ul').appendChild(createLetters());
}