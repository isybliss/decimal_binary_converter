const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
    {
        inputVal: 5,
        addElDelay: 1000,
        msg: "decimalToBinary(5) returns '10' + 1 (5 % 2). Then it pops off the stack.",
        showMsgDelay: 15000,
        removeElDelay: 20000
    },
    {
        inputVal: 2,
        addElDelay: 1500,
        msg: "decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 10000,
        removeElDelay: 15000
    },
    {
        inputVal: 1,
        addElDelay: 2000,
        msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 5000,
        removeElDelay: 10000
    },
];
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
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

/**
 * add paragraphs to the animation
 * update the text of each paragraph
 * then remove the paragraphs
 */
const showAnimation = () => {
    result.innerText = "Call Stack Animation";
    animationData.forEach((obj) => {
        //add paragraphs
        setTimeout(() => {
           animationContainer.innerHTML += `
           <p id="${obj.inputVal}" class="animation-frame">
                decimalToBinary(${obj.inputVal})
           </p>
           `; 
        }, obj.addElDelay);
        //update paragraphs' text
        setTimeout(() => {
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay);
        //remove paragraphs
        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);
    });
    setTimeout(() => {
        result.textContent = decimalToBinary(5);
    }, 20000);
};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    if (inputInt === 5) {
        showAnimation();
        return;
    }
    result.textContent = decimalToBinary(inputInt);
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
 * textContent reveals the content of an element including the hidden text while 
 * innerText reveals only the visible content of an element
 * 
 * String() is used to convert values to string
 * 
 * setTimeout() takes two arguments: a callback function and a number representing the time in milliseconds
 * to wait before executing the callback function.
 * setTimeout() function is asynchronous /async, meaning that it doesn't stop the execution of the rest of your code.
 * You can start an async operation and other parts of your code will still work while that operation is running.
 * imagine setting baking time...instead of sitting in front of the oven waiting for the entire time,
 * u can do other like plate washing while waiting for the timer to go off. async code works in same way.
 */