let userString = prompt("Enter a string:");
function countVowels(str) {
    let vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
}
let vowelCount = countVowels(userString);
document.getElementById("output").innerHTML = `Number of vowels: ${vowelCount}`;
