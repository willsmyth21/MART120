    // circleX and circleY to move circle character
    var circleX = 100;
    var circleY = 100;

    // key codes per letter
    var w = 87; 
    var s = 83;
    var a = 65;
    var d = 68;

    var size = 33;
    var count = 15;
    var sizeDirection = 5;

   // create a shape when the mouse is clicked
    var mouseShapeX;
    var mouseShapeY;

    // square obstacle
    var sqobstacleX = 50;
    var sqobstacleY = 50;
    var sqobstaclediameter = 25;

    // circle obstacle
    var x = 50;
    var y = 50;
    var diameter = 50;

    // array
    var myshapeX = 50;
    var myshapeY = 50;
    var myshapeXs = [];
    var myshapeYs = [];
    var myshapeDiameters = [];
  var myshapeXSpeeds = [];
  var myshapeYSpeeds = [];

    //setup
    function setup()
    {
        createCanvas (600,600)
        for (var i = 0; i < 50; i++) {
            myshapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            myshapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            
              myshapeXs[i] = getRandomNumber (200);
            myshapeYs[i] = getRandomNumber(350);
            myshapeDiameters[i] = getRandomNumber (50);
        }

       

    }
    function draw()
    {
        fill (255,100,130)
        for(var i = 0; i < myshapeXs.length; i++)
        {
            circle(myshapeXs[i],myshapeYs[i],myshapeDiameters[i]);
          myshapeXSpeeds[i] = Math.floor(Math.random() *     (Math.floor(Math.random() * 5)) + 1);
        myshapeYSpeeds[i] = Math.floor(Math.random() *   (Math.floor(Math.random() * 5)) + 1);

        } 
       // move shape
        myshapeXs[i] += myshapeXSpeeds[i];
        myshapeYs[i] += myshapeYSpeeds[i];
      
        // out of bounds
        if (myshapeXs[i] > width) {
            myshapeXs[i] = 0;
        }
        if (myshapeXs[i] < 0) {
            myshapeXs[i] = width;
        }
        if (myshapeYs[i] > height) {
            myshapeYs[i] = 0;
        }
        if (myshapeYs[i] < 0) {
            myshapeYs[i] = height;
        }

        //background
        background(200,88,21);
        stroke(100,100,0);
        fill(100,100,0);
        
        // call createBorders function
        createBorders();

        // call createCharacter function
        createCharacter ();

        // call characterMovement function
        characterMovement ();
        
        // call exit function
        exit ();
       
        // call youWin function
        youWin ()

        // call squareobstacle function
        squareObstacle ()

        // call circleObstacle function
        circleObstacle ()
       
        // call circle click function
        clickCircle ()

        
     // function border
    function createBorders ()
{
    // topborder
    rect(0,0,width,10);
    // leftborder
    rect(0,0,10,height);
    // bottomborder
    rect(0, height-10,width, 10);
    // rightborder
    rect(width-10,0,10,height-50);
}

    // function for character
    function createCharacter ()
{
    //circle character
    fill(255,233,21);
    circle(circleX,circleY,50);
}

    // function for keyboard movements
    function characterMovement ()
{
// keys
if(keyIsDown(w))
{
    circleY -= 10;   
}
    if(keyIsDown(s))
{
    circleY += 10;   
}
    if(keyIsDown(a))
{
    circleX -= 10;   
}
    if(keyIsDown(d))
{
    circleX += 10;   
}
}
    // function for exit
    function exit ()
{
     // exit
     textSize(25);
     text("EXIT---->", width-110,height-20)
}

    // function for win
    function youWin ()
    {
        // leaves exit
         if(circleX > width && circleY > width-50)
         {
             fill(255,255,155);
             stroke(5);
             textSize(size);
             text("CONGRATULATIONS! YOU WIN!", width/6-50, height/2-50);
     
             size+= sizeDirection;
             count++;
             if(count > 25)
         {
             sizeDirection *=-1;
             count = -4;
         }
             
     }
    }

    // function for square obstacle
    function squareObstacle ()
{
     // square obstacle
     fill(100,255,100);
     square(sqobstacleX,sqobstacleY,sqobstaclediameter);

     if(sqobstacleX <= width)
     {
         sqobstacleX+=21;
     }
     else
     {
         sqobstacleX = 2;
     }
     if(sqobstacleY <= height)
     {
         sqobstacleY+=5;
     }
     else
     {
         sqobstacleY = 50;
     }
     if(sqobstaclediameter <= 21)
     {
         sqobstaclediameter+=21;
     }
     else
     {
         sqobstaclediameter = 100;
     }

    }

 // function for circle obstacle
 function circleObstacle ()
 {
    // circle obstacle
    fill(255,100,255);
    circle(x,y,diameter);

if(x <= 350)
{
    x+=2;
} 
else if(x == 15 || x <= width)
{
    x+=2;
    console.log("second else if for x");
}
else if(x > width)
{
   x = 50;
}


if(y <= 50)
{
    y+=3;
}

else if(y == 50 || y <= height)
{
    y+=1; 
    console.log("second else if for y");
}
else if(y > 100)
{
    y = 33;
}
if(diameter <= 100)
{
    diameter+=2;
}
  
else if(diameter == 100 || diameter <= 100)
{
    diameter +=1;
    console.log("second else if for diameter");
}
else if(diameter > 200)
{
    diameter = 50;
}
 }

} 
  
function clickCircle ()
// create the shape based on the mouse click
{
    fill(255,130,140);
circle(mouseShapeX, mouseShapeY, 50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}