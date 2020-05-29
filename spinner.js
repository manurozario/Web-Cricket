var outcomes = ["B","6","1","Wide","4","2","LBW","Catch", "Run Out", "NB", "0", "3"];
function spinner() {
    //  Reset after every button click
    for(var i = 1; i <= 8; i++) {
        document.getElementById("circle").innerHTML="";
    }
    
    randomize(outcomes);
    
    for(var i = 0; i < outcomes.length; i++) {
        document.getElementById("circle").innerHTML += 
        '<li id="arc"> <a class="wheel-btn" onclick="findContent(this.innerHTML)"><div class="text" id="wheeltxt">'+ outcomes[i] +'</div></a></li>';    
    }
    


}

function randomize(Array) {
    Array.sort(() => Math.random() -0.5);
}

//  Retrieves text from the wheel when clicked
function findContent(input) {
    document.getElementById("result").innerHTML = "";
    var str = "";
   
   for(var i = 32; i < input.length; i++) {
       if(input.charAt(i) === '<') {
           break;
       }
       str+= input[i];
    
   }
   //console.log(str);
   document.getElementById("result").innerHTML = str;
   game(str);
}

function game(input) {
    if(input == "0" || input == "1" || input == "2" || input == "3" ||  input == "4" || input == "6") {
        calculateRuns(input);
    }
    else if(input == "LBW" || input == "Catch" || input == "B" || input == "Run Out") {
        calculateWickets(input);
    }
    else {
        calculateExtras(input);
    }
}

function calculateRuns(runs) {
    alert(runs);
}

function calculateWickets(wickets) {
    alert(wickets);
}

function calculateExtras(extras) {
    if(extras == "NB") {
        alert(extras);
    }
    else { // Wide
        alert(extras);
    }
}

// Create another array full of Xs to show to player which will be visible
// when the p;ayer is batting. After the 