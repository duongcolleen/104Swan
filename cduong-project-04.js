//Name: Colleen Duong
//Section: D
//Andrew ID: cduong@andrew.cmu.edu
//Project-04: String Art

function setup() {
    createCanvas(400, 300);
}

function draw() {
  background(244, 174, 163);

  //Variables
  var x; //x-coordinate
  var y = 100;

//I wanted the lines to be close together so I made the range pretty small


//The Head of a Flamingo
  for(var x = 0; x < 20; x+=2){ //Range: 0 to 20
    stroke(255);

    curve(100, 200, 200, 100, 200, x+20, 73, 61);   //Same y2, y3,and x3 values to make sure that the emerging lines connect at the same point to make a coherent bird head shape
    curve(200, 400, 100, 100, 200, x+20, 73, 10);
  }


//Flamingo Wing1
  for(var x = 0; x < 60; x+=2){ //Range: 0 to 60
    noFill();
    stroke(255);

    curve(0, 0, 200, 100, 400, x+20, 73, 61); //Same x2, y2, and y3 as the head of the flamingo to make sure that the wings connected in the same place as the neck
  }

//Flamingo Wing2
  for(var x = 0; x < 30; x+=2){ //Range: 0 to 30 (I wanted this wing to be shorter than the one that's closer)
    noFill();
    stroke(255);

    curve(200, 0, 200, 100, 350, x+20, 73, 61); //Same x2, y2, and y3 as the head of the flamingo to make sure that the wings connected in the same place as the neck
  }

//Flamingo Body
  for(var x = 0; x < 100; x+=2){ //Range: 0 to 100 (Bigger range because the body is bigger)
    noFill();
    stroke(255);

    curve(400, 0, 200, 100, 300, x+120, 400, 0); //Same x2 and y2 as the head of the flamingo to make sure that the wings connected in the same place as the neck
    curve(400, 0, 500, 180, 300, x+120, 200, 400);
}

//BowTie
  for(var x = 0; x < 10; x+=2){ //Range: 0 to 10
    noFill();
    stroke(0);

    line(199, 100, x+180, x+y);
    line(199, 100, x+215, x+y);
  }

//Orange Water
      for(var x = 0; x < 400; x+=4){ //Range: 0 to 400 (I wanted the river to be gigantic and I made the value in between each x to be larger to spread out the lines more so they wouldn't merge into a solid shape)
        noFill();
        stroke(243, 204, 143);

        curve(400, 400, 20, 200, 390, x+300, 400, 400);
      }

//Blue Water
  for(var x = 0; x < 400; x+=6){ //Range 0 to 400 (To make the water look somewhat multi colored I put blue on top and put a different x+= value so it wouldn't completely overlap)
    noFill();
    stroke(183, 221, 239);

    curve(400, 400, 20, 200, 390, x+300, 400, 400);
  }


}
