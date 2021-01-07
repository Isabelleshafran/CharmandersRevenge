
class Instructions {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  animate(ctx) {
    this.drawHowToPlay(ctx);
    this.drawRightArrow(ctx);
    this.drawRightArrowInstructions(ctx);
    this.drawLeftArrow(ctx);
    this.drawAnyKey(ctx);
  }

  drawHowToPlay(ctx) {
    const loc = {
      x: 175,
      y: 50,
    };


      ctx.font = "bold 30pt sigmar one";
      ctx.fillStyle = "white";
      ctx.fillText("HOW TO PLAY", loc.x, loc.y);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeText("HOW TO PLAY", loc.x, loc.y);

  }

  drawRightArrow(ctx) {
    const loc = {
      x: 125,
      y: 120,
    };

    

    ctx.font = "bold 20pt sigmar one";
    ctx.fillStyle = "white";
    ctx.fillText("RIGHT ARROW TO DASH &", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText("RIGHT ARROW TO DASH &", loc.x, loc.y);
  }

  drawRightArrowInstructions(ctx) {
    const loc = {
      x: 150,
      y: 155,
    };

    ctx.font = "bold 20pt sigmar one";
    ctx.fillStyle = "white";
    ctx.fillText("DESTROY POKEBALLS", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText("DESTROY POKEBALLS", loc.x, loc.y);
  }

  drawLeftArrow(ctx) {
    const loc = {
      x: 170,
      y: 220,
    };

    ctx.font = "bold 20pt sigmar one";
    ctx.fillStyle = "white";
    ctx.fillText("UP ARROW TO JUMP", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText("UP ARROW TO JUMP", loc.x, loc.y);
  }

  drawAnyKey(ctx){

      const loc = {
        x: 80,
        y: 385,
      };

      ctx.font = "bold 24pt sigmar one";
      ctx.fillStyle = "white";
      ctx.fillText("PRESS ANY KEY TO START", loc.x, loc.y);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeText("PRESS ANY KEY TO START", loc.x, loc.y);

  }
}



export default Instructions