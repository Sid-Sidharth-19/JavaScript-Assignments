let array = [5, 3, 8, 1, 2];
let ascendingOrder = [...array].sort((a, b) => a - b); 
let descendingOrder = [...array].sort((a, b) => b - a);
document.getElementById("output").innerHTML = 
    `Original Order: [${array.join(', ')}] <br>
    Ascending Order: [${ascendingOrder.join(', ')}] <br>
    Descending Order: [${descendingOrder.join(', ')}]`;
