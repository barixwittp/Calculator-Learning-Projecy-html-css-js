
let input = document.querySelector(".inputs");
let buttons = document.querySelectorAll("button");
let string = "";
let history = document.querySelector(".history");
let counts =1;
let modeoa = document.querySelector(".mode") 
let body = document.querySelector("body")
let modeoa1 = document.querySelector(".mode1") 


modeoa.addEventListener("click",()=>{
    body.classList.remove("active1")
        body.classList.add("active")
        
})

modeoa1.addEventListener("click",()=>{
    body.classList.remove("active")

    body.classList.add("active1")

})

function addHistoryItem(expression, result) {
    let newHistory = document.createElement("p");
    newHistory.textContent = `(${counts}) ${expression} = ${result}`;
    history.appendChild(newHistory);
    counts++;

    
}

let arr = Array.from(buttons)

arr.forEach(button =>{

    let beepSound = new Audio('beep.mp3');

    button.addEventListener("click",(e)=>{

        // console.log("baric")

        

        if(e.target.innerHTML == '='){
            beepSound.play();
            let expression = string;
            string = eval(string)
            input.value = string;
            addHistoryItem(expression, string);            

        }else if(e.target.innerHTML == "AC"){
            beepSound.play();
            string="";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            beepSound.play();

            string = input.value.substring(0,input.value.length-1)
            input.value = string
        }else{
            string += e.target.innerHTML;
            input.value=string;
        }




    })

})

