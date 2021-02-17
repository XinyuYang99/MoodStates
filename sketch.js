
/***********************************************************************************
  SimpleStateMachine - TEMPLATE
  by Scott Kildall

  Template:

  (1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
  (2) Add custom drawing code to drawSplash(), drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
  (3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

  Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
  The way it works — you don't need to know this for the template use
  * array of images gets loaded at startup
  * drawFunction is a VARIABLE that points to a function varible name
  * drawOne(), drawTwo(), etc. are set to be functions.
  * the the keys 1-5 will change the drawFunction variable
  * starts with drawSplash and waits for a mousePressed event
  * adds a key, 's' to return to the splash screen

------------------------------------------------------------------------------------
  Notes:
  - a more advanced state machine with use array-indexing variables for each of
    images the draw functions, but this is just for illustrative purposes

  - even more advanced will be to put the draw functions into an array, would
    be helpful for randomizing, go to the next function, etc

  - next step after that would be to put interfaces into an array that maps to
    the functions


***********************************************************************************/

// Array of images
var images = [];

var strings = [];
var midX;
var startY;
var lineHeight = 24;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/one.png');
  images[1] = loadImage('assets/two.png');
  images[2] = loadImage('assets/three.png');
  images[3] = loadImage('assets/four.png');
  images[4] = loadImage('assets/five.png');
  images[5] = loadImage('assets/splash.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  midX = width/2;
  startY = 60;
  // Center our drawing object
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);


  // set to one for startup
  drawFunction = drawSplash;

}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(0,0,0);
   text("Good morning! What a wonderful day!", width/2, height - 5* gTextOffset);
   text("State One", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(240,120,0);
   text("Missing all of you!", width/2, height - 5* gTextOffset);
   text("State Two", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(40,230,120);
   text("Lunch is so delicious!", width/2, height - 5* gTextOffset);
   text("State Three", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(255,255,178);
   text("Expecting! Waiting meesages from you!", width/2, height - 5* gTextOffset);
   text("State Four", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(230,50,50);
   text("Sad! No one sent me a message. Heart broken!", width/2, height - 5* gTextOffset);
   text("State Five", width/2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
  image(images[5],width/2, height/2);
  text("Click to continue", width/2, height - gTextOffset);
}


drawInstructure = function() {
  loadArray();
  image(images[0],width *1 /6, height/2,width/7,width/7);
  image(images[1],width *2 /6, height/2,width/7,width/7);
  image(images[2],width *3 /6, height/2,width/7,width/7);
  image(images[3],width *4 /6, height/2,width/7,width/7);
  image(images[4],width *5 /6, height/2,width/7,width/7);

}



function loadArray() {
  strings[0] = "press number 1-5 to see a mood";
  strings[1] = "";
  strings[2] = "press 's' back to the beginning";
  strings[3] = "";
  strings[4] = "press 'i' back to this page";
  strings[5] = "";
  strings[6] = "Or you can click the image";
  strings[7] = "";
  fill(255);
  for( let i = 0 ; i < strings.length; i++ ) {
    text( strings[i], midX, startY + (i * lineHeight) )
  }
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  }

    if( key === '1' ) {
      drawFunction = drawOne;
    }
    else if( key === '2' ) {
      drawFunction = drawTwo;
    }
    else if( key === '3' ) {
      drawFunction = drawThree;
    }
    else if( key === '4' ) {
      drawFunction = drawFour;
    }
    else if( key === '5' ) {
      drawFunction = drawFive;
    }
    else if( key === 's' ) {
      drawFunction = drawSplash;
    }
    else if( key === 'i' ) {
      drawFunction = drawInstructure;
    }
  
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstructure;
  }
  else if ( drawFunction === drawInstructure) {
    if (mouseY >= (height *1 /2 - width *1 /14) && mouseY <= (height *1 /2 + width *1 /14)) {
      if (mouseX > (width *1 /6 - width *1 /14), mouseX < (width *1 /6 + width *1 /14) ) {
        drawFunction = drawOne;
      }
      else if (mouseX > (width *2 /6 - width *1 /14), mouseX < (width *2 /6 + width *1 /14) ) {
        drawFunction = drawTwo;
      }
      else if (mouseX > (width *3 /6 - width *1 /14), mouseX < (width *3 /6 + width *1 /14)) {
        drawFunction = drawThree;
      }
      else if (mouseX > (width *4 /6 - width *1 /14), mouseX < (width *4 /6 + width *1 /14)) {
        drawFunction = drawFour;
      }
      else if (mouseX > (width *5 /6 - width *1 /14), mouseX < (width *5 /6 + width *1 /14)) {
        drawFunction = drawFive;
      }
    }
  }

}