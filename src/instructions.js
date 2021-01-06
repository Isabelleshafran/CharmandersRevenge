
class Instructions {
    constructor(dimensions){
        this.dimensions = dimensions
    }

    animate(ctx){
        this.drawHowToPlay(ctx)
    }

    drawHowToPlay(ctx) {
              const loc = {
                x: (this.dimensions.width / 2) - 150,
                y: this.dimensions.height / 4 + 50,
              };
             ctx.font = "bold 30pt sigmar one";
             ctx.fillStyle = "white";
             ctx.fillText("HOW TO PLAY", loc.x, loc.y);
             ctx.strokeStyle = "black";
             ctx.lineWidth = 2;
             ctx.strokeText("HOW TO PLAY", loc.x, loc.y);
    }

}



export default Instructions