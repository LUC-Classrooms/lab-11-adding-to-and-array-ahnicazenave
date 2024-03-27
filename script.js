
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //create array with one space

function setup() { //set up sketch
  createCanvas(500, 300); //set the size of canvas
  dots[0] = new Dot(width/2, height/2); //initialize the dots array index 0 with a new instance of the Dot class
} //end of setup function

function draw() { //draw something on canvas
  background(200); //background color
  
  for(let i = 0; i < dots.length; i++){ //for loop for the Array
    dots[i].move(); //make dots move
    dots[i].display(); //make dots show on canvas
  } //end of for loop
  textSize(24); //set text size
  fill(100, 0, 200); //text color
  text("'dots' array length: " + dots.length, 100, 100); //text on screen showing array length

} //end of draw function

function mousePressed(){ //do when mouse pressed
  let obj = new Dot(mouseX, mouseY); //create new dot
  dots.push(obj); //add to dots array
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

} //end of mouse pressed function


function Dot(X, Y){ //beginning of dot constructor 
  
  this.x = X; //set the x
  this.y = Y; //set the y
  this.w = random (20, 50); //make dot width random
  this.sx = random(-5, 5); //set x speed
  this.sy = random(-5, 5); //set y speed
  this.r = random(0, 255); //red color level
  this.g = random(0, 255); //green color level
  this.b = random(0, 255); //blue color level
  
  this.display = function(){ //show dot
    fill(this.r, this.g, this.b); //set to random color
    ellipse(this.x, this.y, this.w, this.w); //draw circle
  } //end of drawing
  
  this.move = function(){ //move dot
    this.x += this.sx; //horizontal location
    this.y += this.sy; //vertical location
    
    if (this.x < 0 || this.x > width){ //if goes off screen horizontally
        this.sx *= -1; //change direction
    } //end of horizontal if statement
    if (this.y < 0 || this.y > height){ //if goes off screen vertically 
        this.sy *= -1; //change direction
    } //end of vertical if statement
  } //end of move function
    
} //end of dot constructor 
