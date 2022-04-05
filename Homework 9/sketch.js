var bodyX = 200;
var bodyY = 185
var bodyDirection =3;

var headX =250;
var headY=100;
var headDirection =3;

var size = 24;
var count = 0;
var sizeDirection = 3;

var pointX = 220;
var pointY = 75;
var pointDirection = 4;

var mouthX = 250;
var mouthY = 100;
var mouthDirection = 1;
function setup()
{
     createCanvas(500, 600);
        
}
 function draw()
 {
 
     background(120);

textSize(size);
fill('red');
size+= sizeDirection;
count++;
if(count > 5)
{
     sizeDirection *=-1;
     count = 0;
}
text("Jack Spring", 10,80);

// head
fill('rgba(0,255,0, 0.25)');
circle(headX,headY,125);
headX+=headDirection;
if(headX >= 418 || headX <= 82)
{
     headDirection *= -1;
}

// eyes
strokeWeight(10);
fill(0);
point(pointX,75);
pointX+=pointDirection;
if(pointX >= 418 || pointX <=82)
{
     pointDirection *= -1;
}
point(285,75);

// nose
point(245,90);

// mouth
ellipse(250, mouthY, 45, 30)
mouthY += mouthDirection;
if(mouthY <= 0 || mouthY >= 450)
{
     mouthDirection *= -1;
}


// hair
fill(255, 204, 0)
line(250,250,250,150);
line(250,10,360,100);
line(250,10,280,100)
// body
fill('#222222');
rect(200,bodyY,100,150);
bodyY += bodyDirection;
if(bodyY <= 0 || bodyY >= 450)
{
     bodyDirection *= -1;
}

// decoration
fill(255);
triangle(220,320,250,220,280,320)
fill('red')
triangle(240,300,230,240,260,300)
// right arm
rect(300,195,50,10);

rect(350,195,10,80)
// left arm
rect(150,195,50,10);
rect(150,195,10,50)
// left leg
rect(200,335,10,150);
// right leg
rect(290,335,10,150);

fill('red');
textSize(14);
text("Band T-Shirt",210,230 );


}