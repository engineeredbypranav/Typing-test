//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog. Sphinx of black quartz, judge my vow.Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!`
;
let checkarray = sentences.trim().split(" ");

let btn = document.getElementById("start-btn");
let inputvalue = document.getElementById("input");
let sentencespan = document.getElementById("sentence");
let timer = document.getElementById("timer");   
let result = document.getElementById("result");
let retry = document.getElementById("retry-btn");
let starttime , endtime , timetaken ;
let accuracy = document.getElementById("accuracy");
let speed  = document.getElementById("speed");

function starttimer() {
    
    let time = 30;
    starttime = Date.now();
    let timerId = setInterval(() => {
        timer.innerHTML = time;
        time--;
        if (time <= 0) {
            endtime = Date.now();
            let typedvalue = inputvalue.value;
            clearInterval(timerId);
            inputvalue.setAttribute("disabled", "disabled");
            btn.disabled = false;

            inputvalue.value = "";
            timer.innerHTML = "";
            result.style.display = "block";
            calculatescore(typedvalue);
            
        }
        },1000);

}


function calculatescore(typedvalue) {
    
    
    
    
    let typedwords = typedvalue.trim().split(" ") ;
    let sentencearray = sentences.trim().split(" ");
    let words = typedwords.length;
    
    let correctwords = 0;
    for (let i = 0; i < words; i++) {
        if (sentencearray[i] == typedwords[i]) {
            correctwords++;
        
    }}
    console.log(correctwords);
     timetaken = (endtime - starttime) / 1000;
     
     let accurateness = (correctwords / words) * 100;
     
     

     let wpm = Math.round(words/timetaken * 60);
     speed.innerHTML = wpm;
     accuracy.innerHTML= "";
     accuracy.innerHTML = Math.round(accurateness);;

}

retry.addEventListener ("click", () => {

    result.style.display = "none";
    inputvalue.removeAttribute("disabled");
    inputvalue.value = "";
    btn.disabled = true;
    starttimer();
} ) ;


btn.addEventListener ("click", () => {

    inputvalue.removeAttribute("disabled");
    sentencespan.innerHTML = sentences;
    btn.disabled = true;
    

    starttimer();
    
} ) ;