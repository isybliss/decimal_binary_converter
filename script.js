const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
//Call stack example
/*
const countDownAndUp = (number) => {
    console.log(number);
    if (number === 0) {
        console.log("Reached base case");
        return;
    } else {
        countDownAndUp(number - 1);
        console.log(number);
    }   
};

countDownAndUp(3);
*/
const decimalToBinary = (input) => {
    if (input === 0) {
        return "0";
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
    /*
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0) {
        result.innerText = "0";
        return;
    }
    
    while (input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }

    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);
    result.innerText = remainders.reverse().join("");
    */
   /*
   let binary = "";

   if (input === 0) {
    binary = "0";
   }

   while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
   }
   result.innerText = binary;
   */
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
});


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