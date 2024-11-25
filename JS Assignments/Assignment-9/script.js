let array = [1, 2, 3, 4, 5];
document.getElementById("output").innerHTML = `Original Array: [${array.join(', ')}]<br>`;
let reversedArray = array.reverse();
document.getElementById("output").innerHTML += `Reversed Array: [${reversedArray.join(', ')}]`;