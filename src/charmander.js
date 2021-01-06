const CONSTANTS = {
  GRAVITY: 3,
  JUMP_SPEED: 70,
  DASH_SPEED: 200,
  NO_SPEED: 50,
  CHAR_WIDTH: 100,
  CHAR_HEIGHT: 100,
};



class Charmander {
  constructor(dimensions) {
    this.dimensions = dimensions;

    this.dashing = false 

    this.x = 50;
    this.y = 185;
    this.vel = 0;
  }

  jump() {

    let i = 0; 

    while(i < CONSTANTS.JUMP_SPEED){
      this.vel = -1 * i
      i +=1
    }
  }

  dash() {
    this.dashing = true;

    let i = 50; 

    while(i < CONSTANTS.DASH_SPEED){
      console.log(i)
      this.x = i; 
      i += 1
    }
  }

  moveChar(level) {


    // y axis 
    this.y += this.vel;
    this.vel = CONSTANTS.GRAVITY;

    level.grass.forEach(grass => {
      if(this.x > grass.left && this.x < grass.right) {
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
    return {
      left: this.x,
      right: this.x + CONSTANTS.CHAR_WIDTH,
      top: this.y,
      bottom: this.y,
    };
  }

  outOfBounds() {
    const belowTheBottom = this.y > 350
    return belowTheBottom 
  }
}

export default Charmander