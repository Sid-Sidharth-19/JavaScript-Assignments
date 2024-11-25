let userString = prompt("Enter a string:");
function splitString(str) {
    return str.split(' ');
}
let resultArray = splitString(userString);
document.getElementById("output").innerHTML = `Array: [${resultArray.join(', ')}]`;
