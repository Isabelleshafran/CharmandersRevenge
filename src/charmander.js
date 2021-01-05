const CONSTANTS = {
  GRAVITY: 2,
  JUMP_SPEED: 50,
//   TERMINAL_VEL: 12,
  CHAR_WIDTH: 100,
  CHAR_HEIGHT: 100,
};



class Charmander {
  constructor(dimensions) {
    this.dimensions = dimensions;

    this.x = 50;
    this.y = 200
    this.vel = 0;
  }

  jump() {
    this.vel = -1 * CONSTANTS.JUMP_SPEED;
    // console.log(this.vel)
    // this.vel *= 0.9
  }

  moveChar() {
    this.y += this.vel;
    this.vel = CONSTANTS.GRAVITY;

    // need to check if this.y ==== the ground obj height

    if (this.y === 200) {
      this.vel = 0;
    }
  }

  drawChar(ctx) {
    let char = new Image();
    char.src = "../images/charmander.png";

    ctx.drawImage(
      char,
      this.x,
      this.y,
      CONSTANTS.CHAR_WIDTH,
      CONSTANTS.CHAR_HEIGHT
    );

    char.onload = () => {
      ctx.drawImage(
        char,
        this.x,
        this.y,
        CONSTANTS.CHAR_WIDTH,
        CONSTANTS.CHAR_HEIGHT
      );
    };
  }

  animate(ctx) {
    this.moveChar();
    this.drawChar(ctx);

  }

  bounds() {
    // console.log(this.x, this.x + CONSTANTS.CHAR_WIDTH)
    // console.log(this.y)
    return {
      left: this.x,
      // right: this.x + 75,
      right: this.x + CONSTANTS.CHAR_WIDTH,
      
      top: this.y,
      // bottom: this.y + 10
      bottom: this.y + CONSTANTS.CHAR_HEIGHT,
      // bottom: this.y + CONSTANTS.CHAR_HEIGHT,
    
    };
    
  }

  outOfBounds() {
    const aboveTheTop = this.y < 0;
    const belowTheBottom =
      this.y + CONSTANTS.CHAR_HEIGHT > this.dimensions.height;
    return aboveTheTop || belowTheBottom;
  }
}

export default Charmander