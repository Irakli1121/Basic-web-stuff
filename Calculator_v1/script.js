let table = document.getElementById("calcTable");
let display = document.getElementById("display");
let displayNumsString = display.textContent;
let result = 0;
let calculation = 0;
let pressedOperator = false;

let first = 0;
let operation = "";
let second = 0;
let expression = "";

table.addEventListener('click', (e) => {
    displayNumsString = display.textContent;
    result = displayNumsString;
    if (e.target.classList.contains("numButton")){
        console.log(e.target.id);
        displayNumsString = display.textContent;
        result = displayNumsString;
        console.log(displayNumsString);
        if (displayNumsString.length >= 9){
            console.log("only 9 digits");
        } else {
            if (display.textContent === '0'){
                display.textContent = e.target.id;
            } else {
                display.textContent += e.target.id;
            }
        }
    } else if (e.target.classList.contains("calcButtons")){
        console.log(e.target.id);
        let displayNums = parseFloat(displayNumsString);
        result = displayNums;
        console.log(result);
        if (e.target.id === "Clear"){
            display.textContent = 0;
            pressedOperator = false;
            first = 0;
            second = 0;
            operator = "";

        } else if (e.target.id === "decimal"){
            display.textContent += ".";
        } else if (e.target.id === "add"){
            operator = e.target.id;
            display.textContent = "";
            if (pressedOperator === false){
                first = result;
            } else {
                second =result;
                calculation = operationFunc(first, operator, second);
                first = calculation;
            }
        
            
            pressedOperator = true;
        } else if (e.target.id === "subtract"){
           operator = e.target.id;
            display.textContent = "";
            if (pressedOperator === false){
                first = result;
            } else {
                second =result;
                calculation = operationFunc(first, operator, second);
                first = calculation;
            }
        
            
            pressedOperator = true;
        } else if (e.target.id === "multiplication"){

            operator = e.target.id;
            display.textContent = "";
            if (pressedOperator === false){
                first = result;
            } else {
                second = result;
                calculation = operationFunc(first, operator, second);
                first = calculation;
            }
        
            
            pressedOperator = true;
        } else if (e.target.id === "division"){
            
            operator = e.target.id;
            display.textContent = "";
            if (pressedOperator === false){
                first = result;
            } else {
                
                second =result;
                calculation = operationFunc(first, operator, second);
                first = calculation;
            }
        
            
            pressedOperator = true;
        }  else if (e.target.id === "equals") {
            if (pressedOperator === true){
                second = result;
                calculation = operationFunc(first, operator, second);
                display.textContent = calculation;
                first = calculation;
                pressedOperator = false;
            }
            } else {
            console.log("Work in progress");
        }
    }
})


function operationFunc(firstOperand, operation, secondOperand){
    let operationSymbol;
    switch(operation){
        case "add":
            operationSymbol = "+";
            break;
        case "subtract":
            operationSymbol = "-";
            breakl
        case "multiplication":
            operationSymbol = "*";
            break;
        case "division":
            operationSymbol = "/";
            break;
    }
    let answer ="(" + firstOperand + operationSymbol + secondOperand + ")";
    console.log(answer);
    console.log(eval(answer));
    return eval(answer); 
}
