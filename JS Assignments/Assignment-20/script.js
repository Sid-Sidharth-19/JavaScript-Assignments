function replaceWord() {
    let inputString = document.getElementById("inputString").value;
    let wordToReplace = document.getElementById("wordToReplace").value;
    let replacementWord = document.getElementById("replacementWord").value;
    if (inputString === "" || wordToReplace === "" || replacementWord === "") {
        alert("Please fill all the fields.");
        return;
    }
    if (!inputString.includes(wordToReplace)) {
        alert(`The word "${wordToReplace}" was not found in the string.`);
        return;
    }
    let regex = new RegExp(wordToReplace, 'g');
    let updatedString = inputString.replace(regex, replacementWord);
    document.getElementById("output").innerHTML = `Updated string: "${updatedString}"`;
}
