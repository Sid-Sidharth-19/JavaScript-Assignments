let userString = prompt("Enter a string:");
let searchChar = prompt("Enter a character to search for:");
function countCharacterOccurrences(str, char) {
    let matches = str.match(new RegExp(char, 'g'));
    return matches ? matches.length : 0;
}
let occurrences = countCharacterOccurrences(userString, searchChar);
document.getElementById("output").innerHTML = `Occurrences of '${searchChar}': ${occurrences}`;
