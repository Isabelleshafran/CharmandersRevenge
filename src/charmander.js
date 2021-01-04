const CONSTANTS = {
  GRAVITY: 1,
  JUMP_SPEED: 1,
//   TERMINAL_VEL: 12,
  CHAR_WIDTH: 100,
  CHAR_HEIGHT: 100,
};



class Charmander {
  constructor(dimensions) {
    this.dimensions = dimensions;

    this.x = 50;
    this.y = this.dimensions.height - 200;
    this.vel = 0;
  }

  drawChar(ctx) {
    let char = new Image();
    char.src = '../images/charmander.png'
    ctx.drawImage(
      char,
      this.x,
      this.y,
      CONSTANTS.CHAR_WIDTH,
      CONSTANTS.CHAR_HEIGHT
    );

  }

  animate(ctx) {
    this.moveChar()
    this.drawChar(ctx);
  }

  moveChar(){

  
    // this.y_v += CONSTANTS.GRAVITY
    this.y = this.vel
    this.vel += 1;

  }

  jump(){
    //   this.y_vel = -10


    this.vel = -1 * CONSTANTS.JUMP_SPEED;
  }
}

export default Charmander