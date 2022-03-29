function setup()
{
     createCanvas(500, 600);
        
}
 function draw()
 {
 
     background(120);

textSize(20)
fill('red')
text("Jack Spring", 10,80);

// head
fill('rgba(0,255,0, 0.25)');
circle(250,75,125);

// eyes
strokeWeight(10);
fill(0);
point(220,75);
point(285,75);

// nose
point(245,90);

// mouth
ellipse(250, 100, 45, 30)

// hair
fill(255, 204, 0)
line(250,250,250,150);
line(250,10,360,100);
line(250,10,280,100)
// body
fill('#222222');
rect(200,185,100,150);

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