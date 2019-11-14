class Planet {
  constructor(x, y, array, landState, eatSound) {
    this.x = x;
    this.y = y;
    this.array = array;
    this.landState = landState;
    this.currentArrayIndex = 0;
    this.currentArrayImage = this.array[this.currentArrayIndex];
    this.width = this.currentArrayImage.width;
    this.eatSound = eatSound;
  }

  triggerAnimation() {
    if (this.currentArrayIndex < this.array.length - 1) {
      this.currentArrayIndex += 1;
    }
  }
  draw(landState) {
    if (landState != this.landState) {
      return;
    }
    this.currentArrayImage = this.array[this.currentArrayIndex];
    image(this.currentArrayImage, this.x, this.y);
  }

  checkDistance(playerX, playerY, playerWidth) {
    if (landState != this.landState) {
      return;
    }
    this.d = dist(playerX, playerY, this.x, this.y);
    if (this.d < playerWidth + this.width) {
      textSpeech = "EAT?";
      if (keyIsDown(SHIFT) && this.eatSound.isPlaying() == false) {
        this.eatSound.play();
        this.triggerAnimation();
      }
    }

  }

}
