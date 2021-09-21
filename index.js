//variables
let display = document.getElementById("display");
buttons = document.querySelectorAll("button");
let displayValue = "";

let history = [];
let log = document.getElementById("displayHistory");

//code
for(btn of buttons) {

    //get the button that is clicked
    btn.addEventListener('click', (b) => {
        //get text
        buttonVal = b.target.innerText;

        //handle exponent
        if(buttonVal === "^") buttonVal = "**";

        //clear
        if(buttonVal === "C") {
            display.value = "";
            displayValue = "";
        } else if(buttonVal === "=") {
            display.value = eval(displayValue);

            history.push(displayValue +"=" +display.value);

            displayValue = "";    

        } else if(buttonVal === "LOGS") {
            let temp = document.getElementById("displayHistory");
            temp.remove();
            let ul = document.createElement("ul");
            ul.id = "displayHistory";

            //logs
            history.forEach(element => {
                let li = document.createElement("li");
                li.innerText = element;
                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        } else if(buttonVal === "<-") {
            //backspace
            displayValue = displayValue.slice(0, displayValue.length -1);
            display.value = displayValue;
        } else {
            displayValue += buttonVal;
            display.value = displayValue;
        }
    })
}