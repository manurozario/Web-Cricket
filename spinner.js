function spinner() {
    //  Reset after every button click
    for(var i = 1; i <= 8; i++) {
        document.getElementById("span"+i).innerHTML="";
    }
    var outcomes = ["B","6","1","Wide","4","2","LBW","Catch"];
    randomize(outcomes);
    for(var i = 0; i < outcomes.length; i++) {
        document.getElementById("span"+(i+1)+"").innerHTML+=
        '<button id="wheel'+ i + '" onclick="checkValue()"'+
        "><b>"+outcomes[i]+
        "</b></button>";
        
    }
    document.getElementById("polygon-set-1").style.cursor = "pointer";
    document.getElementById("polygon-set-2").style.cursor = "pointer";
    // document.getElementById("span1").innerHTML+="<b>"+outcomes[0]+"</b>"
    // document.getElementById("span2").innerHTML+="<b>"+outcomes[1]+"</b>"
    // document.getElementById("span3").innerHTML+="<b>"+outcomes[2]+"</b>"
    // document.getElementById("span4").innerHTML+="<b>"+outcomes[3]+"</b>"
    // document.getElementById("span5").innerHTML+="<b>"+outcomes[4]+"</b>"
    // document.getElementById("span6").innerHTML+="<b>"+outcomes[5]+"</b>"
    // document.getElementById("span7").innerHTML+="<b>"+outcomes[6]+"</b>"
    // document.getElementById("span8").innerHTML+="<b>"+outcomes[7]+"</b>"
    

}

function randomize(Array) {
    Array.sort(() => Math.random() -0.5);
}

// When wheel buttons are clicked the value is retrieved 
function checkValue() {
    
    console.log("button works!");
}

