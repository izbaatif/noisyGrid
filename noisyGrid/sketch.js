var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();

}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here
  for(var i=0; i<25; i++)
  {
    for(var j=0; j<25; j++)
    {

      push()
      
        var mapping = map(mouseX , 0, width , 100, 500); //Maps using mouseX and gets the value to be divided by frame count
        var n = noise( i/50 , j/50 , frameCount/mapping); //Generates the noise
        var pinkColor = color(250, 0, 120);
        var purpleColor = color(50, 0, 105)
        var fillC = lerpColor( pinkColor , purpleColor , n); //Lerps the color between red and green with noise as amt
        noStroke();
        fill(fillC);
        rect(stepSize*i , stepSize*j , stepSize, stepSize); //Draws rectangles

      pop();

    }
  }
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // your code here
  for(var i=0; i<25; i++)
  {
    for(var j=0; j<25; j++)
    {
      //maps rotation speed by mouseX
      var mappingC = map(mouseX, 0, width, 100, 500)
      var cn = noise( i/10 , j/10 , frameCount/mappingC);
      var mapcn = map(cn, 0, 1, 0, 720);

      //Decides fill color of lines
      var filln = map(cn, 0, 1, 0, 255);

      //Decides the length of each line
      var lenn = map(cn, 0, 1, 0, 10);


      push()
        strokeWeight(2);
        stroke(filln);
        translate(stepSize*i + stepSize/2 , stepSize*j + stepSize/2 ); //Translates to center of each line
        rotate(radians(mapcn));
        line(lenn/2, -stepSize/2 , lenn/2, stepSize/2) // Draws the vertical lines
      pop();
        
    }
  }
}