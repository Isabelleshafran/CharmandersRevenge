const CONSTANTS = {
  GRAVITY: 3,
  JUMP_SPEED: 70,
  DASH_SPEED: 300,
  NO_SPEED: 50,
  CHAR_WIDTH: 100,
  CHAR_HEIGHT: 100,
};



class Charmander {
  constructor(dimensions) {
    this.dimensions = dimensions;

    this.dashing = false 

    this.gameover = false 

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
      this.x = i; 
      i += 1
    }
  }

  flash() {
    this.gameover = true;
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
      this.x -= 5
    } else {
      this.dashing = false;
    }
    
  }

  drawFlash(ctx){
    let flash = new Image();
    flash.src = "../images/flash.png"

    // ctx.globalCompositeOperation='destination-over'

        ctx.drawImage(
          flash,
          this.x,
          (this.y - 20),
          (CONSTANTS.CHAR_WIDTH * 2),
          (CONSTANTS.CHAR_HEIGHT * 2)
        );

        flash.onload = () => {
          ctx.drawImage(
            flash,
            this.x,
            (this.y - 20),
            (CONSTANTS.CHAR_WIDTH * 2),
            (CONSTANTS.CHAR_HEIGHT * 2)
          );

          // ctx.clearRect();
        };

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
      (this.x - 100),
      this.y,
      (CONSTANTS.CHAR_WIDTH * 2),
      CONSTANTS.CHAR_HEIGHT
    );

  }

  animate(ctx, level) {
    this.moveChar(level);
    this.drawChar(ctx);
    if(this.dashing === true) {
      this.drawFlames(ctx)
    }
    
    if(this.gameover === true){
      this.drawFlash(ctx)
    }
  }

  bounds() {

    if(this.dashing === true ){
      return {
        left: 0, 
        right: 0, 
        top: 0, 
        bottom: 0
      }   
    } else {
      return {
        left: this.x,
        right: this.x + CONSTANTS.CHAR_WIDTH,
        top: this.y,
        bottom: this.y,
      };
    }
  }

  outOfBounds() {
    // const aboveTheTop = this.y < -50
    const belowTheBottom = this.y > 350
    return belowTheBottom
  }
}

export default Charmander