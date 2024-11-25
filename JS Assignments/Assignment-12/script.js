let userString = prompt("Enter a string:");
function isPalindrome(str) {
    let cleanString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanString === cleanString.split('').reverse().join('');
}
if (isPalindrome(userString)) {
    document.getElementById("output").innerHTML = `"${userString}" is a palindrome.`;
} else {
    document.getElementById("output").innerHTML = `"${userString}" is not a palindrome.`;
}
