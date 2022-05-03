var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);
    
    createBorders(10);

    textSize(11);
    text("EXIT", width-50,height-50);

//the character
drawCharacter();
characterMovement();

fill(4,150,61);
circle(shapeX, shapeY, 10);

shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

shapeX += shapeXSpeed;
shapeY += shapeYSpeed;

if(shapeX > width)
{
    shapeX = 0;
}
if(shapeX < 0)
{
    shapeX = width;
}
if(shapeY > height)
{
    shapeY = 0;
}
if(shapeY < 0)
{
    shapeY = height;
}

if(characterX > width && characterY > width-50)
{
    fill(0);
    stroke(6);
    textSize(26);
    text("You Win!", width/2-50, height/2-50);
}
fill(120,132,159);
circle(mouseShapeX, mouseShapeY, 25);
}
function characterMovement()
{
if(keyIsDown(w))
{
    characterY -= 7;
}
if(keyIsDown(s))
{
    characterY += 7;
}
if(keyIsDown(d))
{
    characterX += 7;
}
if(keyIsDown(a))
{
    characterX -= 7;
    console.log("movement: " + characterX);

}
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}
function drawCharacter()
{
    fill(24,55,134);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-50);
    
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
