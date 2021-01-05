const CONSTANTS = {
  GRAVITY: 3,
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
    this.y = 185;
    // this.y = 320
    this.vel = 0;
  }

  jump() {
    this.vel = -1 * CONSTANTS.JUMP_SPEED;
  }

  dash() {
    this.dashing = true;
    this.x = CONSTANTS.DASH_SPEED
  }

  moveChar(level) {

    // console.log(this.y)

    // y axis 
    this.y += this.vel;
    this.vel = CONSTANTS.GRAVITY;

    level.grass.forEach(grass => {
      if(this.x > grass.left && this.x < grass.right) {
        // console.log(grass.bottom)
             if (this.y > (grass.bottom - 50)) {
               this.vel = 0
             }
        }
    })


    // x axis 
    if(this.x > 50){
      this.x -= 8
    } else {
      this.dashing = false;
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

      // ctx.clearRect();
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

  animate(ctx, level) {
    this.moveChar(level);
    this.drawChar(ctx);
    if(this.dashing === true) {
      this.drawFlames(ctx)
    }
  }

  bounds() {
    // console.log(this.x )
    // x is 50 // right is 150

    // y starts at 185
    // console.log(this.y)
    return {
      left: this.x,
      right: this.x + CONSTANTS.CHAR_WIDTH,
      top: this.y,
      bottom: this.y,

      // bottom: this.y + CONSTANTS.CHAR_HEIGHT,
    };
  }

  outOfBounds() {
    const belowTheBottom = this.y > 350
    return belowTheBottom 
  }
}

export default Charmander