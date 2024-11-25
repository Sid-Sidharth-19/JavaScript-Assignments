let num = parseInt(prompt("Enter a number:"));
let outputDiv = document.getElementById("table-output");
let output = '';
for (let i = 1; i <= 10; i++) {
    output += `${num} x ${i} = ${num * i}<br>`;
}
outputDiv.innerHTML = output;
