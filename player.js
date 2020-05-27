function Player(name, runs, target, wickets, overs) {
    this.name = name;
    this.runs = runs;
    this.target = target;
    this.wickets = wickets;
    this.overs = overs;

}
function hide() {
    // Hide name input
    var x = document.getElementById("formbox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    // Show spin button game starts
    document.getElementById("spin-btn").style.display = "block";
    
    startGame();    

}

function startGame() {
    // Create player and stats 
    var p1 = new Player(document.getElementById("title").value, 0, randomTarget(), 0, 5);
    
    // Initiallizing stats in HTML
    document.getElementById("score").innerHTML += "<h2>"+p1.name+"</h2>" + "Target to beat: " + p1.target;
    
    var score = document.getElementById("runs");
    var over = document.getElementById("overs");
    score.innerHTML = p1.runs + "/" + p1.wickets;
    over.innerHTML = 0.0;

    var player = document.getElementById("stats").style.display = "block";
    

    // Add name to screen with runs, overs, wickets and target. 
    // Start Game
    // Game Mechanics
    //alert(p1.target);
}

//  Generates a target for the player
function randomTarget() {
    return (Math.floor(Math.random() * (40-16)));
}