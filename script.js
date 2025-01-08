const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];
};

const checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
};

convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
})


//NOTES
/**
 * falsy values equate to false and include: undefined, null, 0 and empty string "".
 * instead of checking if a value equal a falsy value, use the logical NOT operator "!" to check if the value itself is falsy
 
        const num = 0;
        console.log(num === 0); // true
        console.log(!num); // true

 * e is a common parameter name for the event object

 * parseInt() is used to check and normalize numbers in JavaScript.
 * it converts a string into an integer or whole number or Nan(Not a Number).
 * 
 * isNaN() is used to check if the string or number taken as an argument is a number or not.
 * it returns true if it is not a number
 */