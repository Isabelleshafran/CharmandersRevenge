const CONSTANTS = {
  GRAVITY: 2,
  JUMP_SPEED: 50,
  DASH_SPEED: 200,
  NO_SPEED: 50,
//   TERMINAL_VEL: 12,
  CHAR_WIDTH: 100,
  CHAR_HEIGHT: 100,
};



class Charmander {
  constructor(dimensions) {
    this.dimensions = dimensions;

    this.dashing = false 

    this.x = 50;
    this.y = 200
    this.vel = 0;
  }

  jump() {
    this.vel = -1 * CONSTANTS.JUMP_SPEED;

  }

  dash() {
    // alert('dash')
    this.dashing = true;
    this.x = CONSTANTS.DASH_SPEED

    setTimeout(() => this.dashing = false, 1000);

  }

  moveChar() {
    this.y += this.vel;
    this.vel = CONSTANTS.GRAVITY;
    if (this.y === 200) {
      this.vel = 0;
    }

    if(this.x > 50){
      this.x -= 10
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

  drawFlames(ctx) {
    let flames = new Image();
    flames.src = "../images/flames.png";

    ctx.drawImage(
      flames,
      this.x,
      this.y,
      CONSTANTS.CHAR_WIDTH,
      CONSTANTS.CHAR_HEIGHT
    );

  }

  animate(ctx) {
    this.moveChar();
    this.drawChar(ctx);
    if(this.dashing === true) {
      this.drawFlames(ctx)
    }
    // this.drawFlames(ctx)
  }

  bounds() {
    return {
      left: this.x,
      right: this.x + CONSTANTS.CHAR_WIDTH,
      top: this.y,
      bottom: this.y + CONSTANTS.CHAR_HEIGHT,
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