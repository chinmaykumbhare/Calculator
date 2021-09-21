let display = document.getElementById("display");
buttons = document.querySelectorAll("button");
let displayValue = "";

let history = [];
let log = document.getElementById("displayHistory");

//get the button that is clicked
for(btn of buttons) {
    //console.log(btn);
    //btn = btn.innerText;
    //console.log(btn);

    //get the button that is clicked
    btn.addEventListener('click', (b) => {
        //get text
        buttonVal = b.target.innerText;
        // console.log(buttonVal);

        //displayValue for operating
        //displayValue += buttonVal;

        //display text to textbox
        //display.value = displayValue;

        if(buttonVal === "^") buttonVal = "**";

        //clear
        if(buttonVal === "C") {
            display.value = "";
            displayValue = "";
        } else if(buttonVal === "=") {
            display.value = eval(displayValue);

            history.push(displayValue +"=" +display.value);
            // console.log(history);

            displayValue = "";
            //display.value = "";

            // log.innerHTML = "<ul>" +history +"<ul>";
            

        } else if(buttonVal === "LOGS") {
            let temp = document.getElementById("displayHistory");
            temp.remove();
            let ul = document.createElement("ul");
            ul.id = "displayHistory";

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

        // console.log(displayValue);
    })
}