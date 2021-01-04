class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  drawBackground(ctx) {
       let sky = new Image();
       sky.src = "../images/sky.png";
       ctx.drawImage(
         sky,
         0,
         0,
         this.dimensions.width, this.dimensions.height
       );
  }

  animate(ctx) {
    this.drawBackground(ctx);

  }
}

export default Level;