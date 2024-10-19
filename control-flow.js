//Assignment 1: Input Validation Program for only numbers Between 50 and 100
function inputValidation() {
    let userInput;


    do{ 
        userInput = parseInt(prompt("Enter a number between 50 and 100:"));
        if (userInput < 50 || userInput > 100 ||  userInput.trim === "" || isNaN(userInput)) {
        userInput = parseInt(prompt("Please try again!\nEnter a number between 50 and 100"));
        }
    }while (userInput < 50 || userInput > 100) {
        console.log(`Congratulations, correct choice! ${userInput} is a valid range betwwen 50 and 100.`);
    
    }

    console.log("THE END")

}

//Assignment 2: FIZZBUZZ Program showing numbers 1 to 100
function FizzBuzz() { 
    for (i= 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        } else if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }

    }
    console.log("***************** THE END **********************");

}


//Assignment 3: Multiplication Table Of Numbers Between 2 and 9
function timesTable() {
    const userInput = parseInt(prompt("Enter a number between 2 and 9:"));
    let result = "";
    
    if (userInput.trim === "" || userInput === null || userInput === undefined || isNaN(userInput) || typeof userInput !== "number") {
        alert("Number must be an integer");
        console.log("Number must be an integer")
        return;
    } else if (userInput < 2 || userInput > 9) {
        alert("Number must be between 2 and 9");
        console.log("Number must be between 2 and 9");
    } else {
        for (i = 1; i <= 20; i++) {
            result += `${userInput} * ${i}  =  ${userInput * i}\n` ;
        }
        console.log(result);
    }

    console.log("******************THE END *********************");

    
} 



inputValidation();
FizzBuzz();
timesTable();
console.log("THANK YOU")