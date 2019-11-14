/*sounds:
https://freesound.org/people/Tristan_Lohengrin/sounds/340485/
https://freesound.org/people/Jagadamba/sounds/254282/
https://freesound.org/people/HaraldDeLuca/sounds/170220/
https://freesound.org/people/reznik_Krkovicka/sounds/324277/
https://freesound.org/people/Lutana/sounds/347749/
https://freesound.org/people/gellski/sounds/288878/
https://freesound.org/people/kwahmah_02/sounds/254250
https://freesound.org/people/breo2012/sounds/269099/
https://freesound.org/people/bareform/sounds/218721/
https://freesound.org/people/metamorphmuses/sounds/38709/
*/
let player;
let playerImage;
let playerRight1;
let playerRight2;
let playerLeft1;
let playerLeft2;
let playerWidth = 46;
let playerHeight = 81;
let planetX = 0;
let planetY = 0;
let planetWidth = 300;
let planetHeight = 300;
let backgroundImage;
let textBoxImage;
let testImage;
let menuImage1;
let menuImage2;
let menuImage3;
let menuImageArray = [];
let menuArrayIndex = 0;
let currentMenuImage;
let endscreenImage;
let textSpeech = "YOU ARE VERY HUNGRY.";
let pixelFont;
let playerX=200;
let playerY=130;
let playerVX = 0;
let playerVY = 0;
let playerSpeed = 10;
let planet1;
let planet1Image;
let planet1Array = [];
let planet1ArrayIndex = 0;
let currentP1ArrayImage;
let planet2Array=[];
let planet3Array = [];

let planet1Appear = true;
let planet1Event = false;

let planet2;
let planet2Image;
let planet2Appear = true;
let planet2Event = false;

let planet3;
let planet3Image;
let planet3Appear = true;
let planet3Event = false;

let gameState = 0;
let landState = 0;

let dog;
let dogImage;
let firstDogAppear = true;
let secondDogAppear = false;
let dogX;
let dogVX;
let dogY;
let dogVY;
let dogSpeed = 10;

let planetCount = 0;


let walkSound;
let backgroundSound;
let eatSound;
let textSound;

let angle = 0;
let radius = playerWidth/2;

let planetsArray = []
let currentPlanetsArray;
let currentPlanetsArrayIndex = 0;

let menWidth = 100;

function preload() {
resourceSetup();
}

function setup() {
  createCanvas(1300, 750);
  callPlanets();
}

function resourceSetup() {

  playerRight1 = loadImage("assets/images/rightman.png");
  playerLeft1 = loadImage("assets/images/leftman.png");
  playerImage = playerRight1;

  backgroundImage = loadImage("assets/images/newbackground.png");

  pixelFont = loadFont("assets/fonts/vt323.regular.ttf");

  menuImage1 = loadImage("assets/images/newmenu1.png");
  menuImage2 = loadImage("assets/images/newmenu2.png");
  menuImageArray.push(menuImage1);
  menuImageArray.push(menuImage2);

  endscreenImage = loadImage("assets/images/endscreen.png");

  let planet1Image = loadImage("assets/images/saturn/saturn1.png");
  let planet1ImageFrame2 = loadImage("assets/images/saturn/saturn2.png");
  let planet1ImageFrame3 = loadImage("assets/images/saturn/saturn3.png");
  let planet1ImageFrame4 = loadImage("assets/images/saturn/saturn4.png");
  let planet1ImageFrame5 = loadImage("assets/images/saturn/saturn5.png");
  let planet1ImageFrame6 = loadImage("assets/images/saturn/saturn6.png");
  let planet1ImageFrame7 = loadImage("assets/images/saturn/saturn7.png");
  let planet1ImageFrame8 = loadImage("assets/images/saturn/saturn8.png");
  let planet1ImageFrame9 = loadImage("assets/images/saturn/saturn9.png");
  let planet1ImageFrame10 = loadImage("assets/images/saturn/saturn10.png");
  let planet1ImageFrame11 = loadImage("assets/images/saturn/saturn11.png");
  let planet1ImageFrame12 = loadImage("assets/images/saturn/saturn12.png");
  let planet1ImageFrame13 = loadImage("assets/images/saturn/saturn13.png");
  let planet1ImageFrame14= loadImage("assets/images/saturn/saturn14.png");
  let planet1ImageFrame15= loadImage("assets/images/saturn/saturn15.png");
  let planet1ImageFrame16= loadImage("assets/images/saturn/saturn16.png");
  planet1Array.push(planet1Image);
  planet1Array.push(planet1ImageFrame2);
  planet1Array.push(planet1ImageFrame3);
  planet1Array.push(planet1ImageFrame4);
  planet1Array.push(planet1ImageFrame5);
  planet1Array.push(planet1ImageFrame6);
  planet1Array.push(planet1ImageFrame7);
  planet1Array.push(planet1ImageFrame8);
  planet1Array.push(planet1ImageFrame9);
  planet1Array.push(planet1ImageFrame10);
  planet1Array.push(planet1ImageFrame11);
  planet1Array.push(planet1ImageFrame12);
  planet1Array.push(planet1ImageFrame13);
  planet1Array.push(planet1ImageFrame14);
  planet1Array.push(planet1ImageFrame15);
  planet1Array.push(planet1ImageFrame16);
  let planet2Image1= loadImage("assets/images/eyeball/eyeball.png");
  let planet2Image2= loadImage("assets/images/eyeball/eyeball2.png");
  let planet2Image3= loadImage("assets/images/eyeball/eyeball3.png");
  let planet2Image4= loadImage("assets/images/eyeball/eyeball4.png");
  let planet2Image5= loadImage("assets/images/eyeball/eyeball5.png");
  let planet2Image8= loadImage("assets/images/eyeball/eyeball8.png");
  let planet2Image9= loadImage("assets/images/eyeball/eyeball9.png");
  let planet2Image10= loadImage("assets/images/eyeball/eyeball10.png");
  let planet2Image11= loadImage("assets/images/eyeball/eyeball11.png");
  let planet2Image12= loadImage("assets/images/eyeball/eyeball12.png");
  let planet2Image13= loadImage("assets/images/eyeball/eyeball13.png");
  let planet2Image14= loadImage("assets/images/eyeball/eyeball14.png");
  let planet2Image15= loadImage("assets/images/eyeball/eyeball15.png");
  let planet2Image16= loadImage("assets/images/eyeball/eyeball16.png");
  let planet2Image17= loadImage("assets/images/eyeball/eyeball17.png");
  let planet2Image18= loadImage("assets/images/eyeball/eyeball18.png");
  planet2Array.push(planet2Image1);
  planet2Array.push(planet2Image2);
  planet2Array.push(planet2Image3);
  planet2Array.push(planet2Image4);
  planet2Array.push(planet2Image5);
  planet2Array.push(planet2Image8);
  planet2Array.push(planet2Image9);
  planet2Array.push(planet2Image10);
  planet2Array.push(planet2Image11);
  planet2Array.push(planet2Image12);
  planet2Array.push(planet2Image13);
  planet2Array.push(planet2Image14);
  planet2Array.push(planet2Image15);
  planet2Array.push(planet2Image16);
  planet2Array.push(planet2Image17);
  planet2Array.push(planet2Image18);
  let  planet3Image1 = loadImage("assets/images/many/many1.png");
  let planet3Image2 = loadImage("assets/images/many/many2.png");
  let  planet3Image3 = loadImage("assets/images/many/many3.png");
  let  planet3Image4 = loadImage("assets/images/many/many4.png");
  let  planet3Image5 = loadImage("assets/images/many/many5.png");
  let  planet3Image6 = loadImage("assets/images/many/many6.png");
  let  planet3Image7 = loadImage("assets/images/many/many7.png");
  let  planet3Image8 = loadImage("assets/images/many/many8.png");
  let  planet3Image9 = loadImage("assets/images/many/many9.png");
  let  planet3Image10 = loadImage("assets/images/many/many10.png");
  let  planet3Image11 = loadImage("assets/images/many/many11.png");
  let  planet3Image12 = loadImage("assets/images/many/many12.png");
  let  planet3Image13 = loadImage("assets/images/many/many13.png");
  planet3Array.push(planet3Image1);
  planet3Array.push(planet3Image2);
  planet3Array.push(planet3Image3);
  planet3Array.push(planet3Image4);
  planet3Array.push(planet3Image5);
  planet3Array.push(planet3Image6);
  planet3Array.push(planet3Image7);
  planet3Array.push(planet3Image8);
  planet3Array.push(planet3Image9);
  planet3Array.push(planet3Image10);
  planet3Array.push(planet3Image11);
  planet3Array.push(planet3Image12);
  planet3Array.push(planet3Image13);

  planet2Image = loadImage("assets/images/eyeball/eyeball.png");
  planet3Image = loadImage("assets/images/eyeball/eyeball.png");
  dogImage = loadImage("assets/images/littledog.png");
  menImage = loadImage("assets/images/dudes.png");
  flamingoImage = loadImage("assets/images/flamingo.png");
  backgroundSound = loadSound("assets/sounds/longAmbiance.wav");
  eatSound = loadSound("assets/sounds/applecrunch.wav");
  walkSound = loadSound("assets/sounds/deepbass.wav");
  textSound = loadSound("assets/sounds/electrobass.wav");
}

function draw() {
  if (gameState == 0) {
    currentMenuImage = menuImageArray[menuArrayIndex];
    image(currentMenuImage, 0, 0, 1300, 750);
  }
  if (gameState == 1) {
    background(backgroundImage);
    fill(255);
    textSize(30);
    fill(255);
    textAlign(LEFT, CENTER);
    textFont(pixelFont);
    text(textSpeech, 50, 650);
    displayPlayer();
    handleInput();
    move();
    if (landState === 0) {
      landState1Display();
    }
    if (landState === 1) {
      landState2Display();
    }
    if (landState === 2) {
      landState3Display();
    }
    movePlayerThroughLandscape();
    checkDistancePlanet();
  //  currentP1ArrayImage = planet1Array[planet1ArrayIndex];
  //  image(currentP1ArrayImage, planetX, planetY, planetWidth, planetHeight);
    if (secondDogAppear == true) {
      image(dogImage, random(playerX-60, playerX-80), random(playerY+60, playerY+70));
    }

    for (let i =0; i < planetsArray.length; i++ ){
        //planetsArray[i].checkLandState(landState);
        //planetsArray[i].triggerAnimation();
        planetsArray[i].checkDistance(playerX, playerY, playerWidth);
        planetsArray[i].draw(landState);
      }
    if(keyIsDown(ENTER)){
        console.log("pressed");
          gameState = 2;
        }
    }
  if (gameState == 2){
    image(endscreenImage, 0, 0, 1300, 750);
  }
  function handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      playerVX = -playerSpeed;
      playerImage = playerLeft1;
      walkSound.play();
    } else if (keyIsDown(RIGHT_ARROW)) {
      playerVX = playerSpeed;
      playerImage = playerRight1;
      walkSound.play();
    } else {
      playerVX = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      playerVY = -playerSpeed;
      if (playerImage == playerLeft1) {
        playerImage = playerLeft1;
        walkSound.play();
      } else {
        playerImage = playerRight1;
        walkSound.play();
      }
    } else if (keyIsDown(DOWN_ARROW)) {
      playerVY = playerSpeed;
      walkSound.play();
      if (playerImage == playerLeft1) {
        playerImage = playerLeft1;
      } else {
        playerImage = playerRight1;
        walkSound.play();
      }
    } else {
      playerVY = 0;
    }
  }
  function move() {
    playerX += playerVX;
    playerY += playerVY;
  }
  function movePlayerThroughLandscape() {
    if (landState === 0) {
      if (playerX >= width) {
        landState = 1;
        playerX = 50;
        playerY = 300;
      } else if (playerX < 0) {
        landState = 2;
        playerX = 50;
        playerY = 300;
      }
    }
    if (landState === 1) {
      if (playerX >= width) {
        landState = 2;
        playerX = 50;
        playerY = 300;
      } else if (playerX < 0) {
        landState = 0;
        playerX = 50;
        playerY = 300;
      }
    }
      if (landState === 2) {
        if (playerX >= width) {
          console.log("go to landState 0");
          landState = 0;
          playerX = 50;
          playerY = 300;
        } else if (playerX < 0) {
          landState = 1;
          playerX = 50;
          playerY = 300;
        }
      }
    }
  function landState1Display() {
  //  planetX = 850;
  //  planetY = 50;
  }
  function landState2Display() {

    dogX = 300;
    dogY = 500;

    if (firstDogAppear === true) {
      image(dogImage, dogX, dogY);
    }
    checkDistanceDog();
  }
}
function landState3Display() {
  let growth2 = sin(angle) * (radius / 8);
  image(menImage, 600, 500, menWidth, 86 + growth2);
  image(menImage, 650, 450, menWidth, 86 + growth2);
  image(menImage, 550, 400, menWidth, 86 + growth2);
  angle += 0.05;
  let d = dist(playerX, playerY, 550, 500);
  if( d < playerWidth + menWidth){
    console.log("ok");
    textSpeech = "SMALL CHORUS: nonononononoonononononono";
  }
}
function callPlanets(){
  let planetObject1 = new Planet (850, 50, planet1Array, 0, eatSound);
  let planetObject2 = new Planet (850,50, planet2Array, 1, eatSound);
  let planetObject3 = new Planet (1000,50, planet3Array, 2, eatSound);
  planetsArray.push(planetObject1);
  planetsArray.push(planetObject2);
  planetsArray.push(planetObject3);
}
function displayPlayer() {
  let growth = sin(angle) * (radius / 8);
  image(playerImage, playerX, playerY, playerWidth + growth, playerHeight);
  angle += 0.05;
}
function checkDistanceDog() {
  let d = dist(playerX, playerY, dogX, dogY);
  if (d < playerWidth + planetWidth + 10) {
    //play chime
    textSpeech = "DOG: HEY YOU! I'M SUPER BORED SO I'M GOING TO FOLLOW YOU!\n" + "DOG: I MEAN, BARK BARK, WOOF.";
    if (keyIsDown(SHIFT)) {
      textSpeech = "SHUT UP, DOG";
      firstDogAppear = false;
      secondDogAppear = true;
      return;
    }

    if (keyIsDown(SHIFT)) {
      triggerAnimationPlanet1();
    }
  }
}
function checkDistancePlanet() {
  /*()//check landstate
  let d = dist(playerX, playerY, planetX, planetY);
  if (d < playerWidth + planetWidth + 10) {
    //play chime
    textSpeech = "Eat planet? (shift)";
    if (keyIsDown(SHIFT) && eatSound.isPlaying() == false ) {
      eatSound.play();
      triggerAnimationPlanet1();
    }
  } */
}

function triggerAnimationPlanet1() {
  for (let i =0; i < planetsArray.length; i++ ){
      planetsArray[i].triggerAnimation();
    }
  }

function mousePressed() {
  if (gameState === 0) {
    backgroundSound.loop();
    menuArrayIndex += 1;
    if (menuArrayIndex >= menuImageArray.length) {
      gameState = 1;
    }
  }
  if (gameState === 2) {
    menuImageIndex = 0;
    menuArrayIndex =0;
    planet1ArrayIndex =0;
    gameState = 0;
  }
}
