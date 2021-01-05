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

    // this.level = level;


    // console.log(this.level)

    this.dashing = false 

    this.x = 10;
    this.y = 70;
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

    // y axis 
    this.y += this.vel;
    this.vel = CONSTANTS.GRAVITY;

    // if (this.y === 200) {
    //   this.vel = 0;
    // }

    // console.log(level)

    level.grass.forEach(grass => {
      if(this.x > grass.left && this.x < grass.right) {
             if (this.y > (grass.bottom - 50)) {
               this.vel = 0
             }
        }
    })

    // console.log(this.level)


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
    return {
      left: this.x,
      right: this.x + CONSTANTS.CHAR_WIDTH,
      top: this.y,
      bottom: this.y + CONSTANTS.CHAR_HEIGHT,
    };
  }

  outOfBounds() {
    // const aboveTheTop = this.y < 0;
    // const belowTheBottom =
    //   this.y + CONSTANTS.CHAR_HEIGHT > this.dimensions.height;
    // return aboveTheTop || belowTheBottom;

    // change to be at the floor 
  }
}

export default Charmander