import Level from "./level";
import Charmander from './charmander'
import PokeBall from './pokeballs'
import Instructions from './instructions'

class CharmandersRevenge {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.registerEvents();
    this.restart();
  }

  registerEvents() {
    this.boundClickHandler = this.click.bind(this);
    document.addEventListener("keydown", this.boundClickHandler);
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.level = new Level(this.dimensions);
    this.pokeballs = new PokeBall(this.dimensions);
    this.charmander = new Charmander(this.dimensions);
    this.instructions = new Instructions(this.dimensions)
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    
    this.level.animate(this.ctx, this.score);
    this.pokeballs.animate(this.ctx, this.charmander, this.score);
    this.charmander.animate(this.ctx, this.level);
    
    if (!this.running) {
      this.instructions.animate(this.ctx)
    }


    if (this.gameOver()) {

      this.charmander.drawFlash(this.ctx)

      this.drawGameOver()
      this.drawRestarting()
      this.running = false

      setTimeout(() => {
        this.restart();
      }, 3000)
      
    }


    this.pokeballs.passedBall(this.charmander.bounds(), () => {
      this.score += 1;
      // console.log(this.score);
    });

    
    if (this.running) {
      this.drawScore()
      requestAnimationFrame(this.animate.bind(this));
    }

  }

  play() {
    this.running = true;
    this.animate();
  }

  click(e) {
    if (!this.running) {
      this.play();
    }

    if (e.keyCode === 38) {
      this.charmander.jump();
    }

    if (e.keyCode === 39) {
      this.charmander.dash();
    }
  }

  gameOver() {
    return (
      this.pokeballs.collidesWith(this.charmander) ||
      this.charmander.outOfBounds(this.height)
    );
  }

  drawScore() {
    const loc = {
      x: this.dimensions.width / 2,
      y: this.dimensions.height / 4,
    };
    this.ctx.font = "bold 50pt sigmar one";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.score, loc.x, loc.y);
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(this.score, loc.x, loc.y);
  }

  drawGameOver() {
    const loc = {
      x: this.dimensions.width - 550,
      y: (this.dimensions.height / 4) + 150,
    };
    this.ctx.font = "bold 50pt sigmar one";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("GAME OVER", loc.x, loc.y);
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText("GAME OVER", loc.x, loc.y);
  }

  drawRestarting(){
       const loc = {
         x: this.dimensions.width - 550,
         y: 385,
       };
       this.ctx.font = "bold 30pt sigmar one";
       this.ctx.fillStyle = "white";
       this.ctx.fillText("RESTARTING NOW", loc.x, loc.y);
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 2;
       this.ctx.strokeText("RESTARTING NOW", loc.x, loc.y);

  }
}

export default CharmandersRevenge;