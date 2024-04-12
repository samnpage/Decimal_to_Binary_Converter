// In this project, you'll build a decimal and binary converter and learn about both number systems. You'll also learn about recursion by using it to perform the conversions.

// All of the HTML and CSS for this project has been provided for you.

// Elements
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    }

    result.innerText = binary;
};

const checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        alert("Please provide a decimal number");
        return 
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if(e.key === 'Enter') {
        checkUserInput();
    }
});