function calculateSum() {
var calculationInput = document.getElementById("calculationInput").value;

    
var isValidInput = /^[0-9,+,\s]*$/.test(calculationInput);

if (!isValidInput) {
    alert("Invalid input. Please enter only numbers, plus signs (+), commas (,), empty string, and space.");

    // Display error details
    displayErrorDetails(calculationInput);

    return;
}

var numbers = calculationInput.split("+");

var parsedNumbers = numbers.map(function(num) {
    return parseInt(num.replace(/,/g, ""));
});

var sum = parsedNumbers.reduce(function(total, num) {
    return total + num;
}, 0);

document.getElementById("result").innerText = "Result: " + sum.toLocaleString();
}

function displayErrorDetails(input) {
var errorDetails = "";
for (var i = 0; i < input.length; i++) {
    if (!/^[0-9,+,\s]*$/.test(input[i])) {
        errorDetails += "Invalid character at position " + (i + 1) + ": '" + input[i] + "'\n";
    }
}

alert(errorDetails);
}

function clearInput() {
    document.getElementById("calculationInput").value = "";
    document.getElementById("result").innerText = "";
}
