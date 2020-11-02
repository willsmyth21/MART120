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

    // mouse click
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

    
    //setup
    function setup()
    {
        createCanvas(600,650);
    }
    function draw()
    {
        //background
        background(200,88,21);
        stroke(100,100,0);
        fill(100,100,0);
        // topborder
        rect(0,0,width,10);
        // leftborder
        rect(0,0,10,height);
        // bottomborder
        rect(0, height-10,width, 10);
        // rightborder
        rect(width-10,0,10,height-50);
        
        // exit
        textSize(25);
        text("EXIT---->", width-110,height-20)

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

        
        //circle character
        fill(255,233,21);
        circle(circleX,circleY,50);
       
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
     
        // click for square
        fill(69,169,255);
        square(mouseShapeX, mouseShapeY, 75);

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
// function for click for square
    function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}