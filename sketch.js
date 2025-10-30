let lastCircleTime = 0;
let circleInterval = 1000; // 1 second in milliseconds

function setup() {
    createCanvas(800, 600);
    background(255, 255, 0); // Yellow background
}

function draw() {
    // draw circles with a red outline and no fill; 
    // start with one per second, but increase frequency over time
    let elapsedMS = millis();

    // print the current val of elapsedMS to the canvas
    //fill(0);
    //textSize(16);
    //text("Elapsed Time: " + nf(elapsedMS) + " milliseconds", 10, height - 10);
  
    // Adjust circle interval to increase frequency over time; max 10 per second
    circleInterval = max(circleInterval-elapsedMS*.0001, 100);

    // Check if it's time to draw a new circle
    if (elapsedMS - lastCircleTime >= circleInterval) {
        // Draw a random red circle
        drawRandomCircle();
        // Update the last circle time
        lastCircleTime = elapsedMS;
    }
}

function drawRandomCircle() {    
    // Set circle to have a 2px red outline, and no fill
    stroke(200 + random(75), random(250), random(25)); // Red outline
    strokeWeight(2);
    noFill();
    
    // Random position and size
    let x = random(width);
    let y = random(height);
    let diameter = random(20, 80);
    
    // Draw the circle
    circle(x, y, diameter);
}

