import Level from "./level";
import Charmander from './charmander'
import PokeBall from './pokeballs'

class CharmandersRevenge {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.registerEvents();
    this.restart();
  }

  registerEvents() {
    this.boundClickHandler = this.click.bind(this);

    this.ctx.canvas.addEventListener("keydown", this.boundClickHandler);
  }

  restart() {
    this.running = false;

    this.level = new Level(this.dimensions);
    this.charmander = new Charmander(this.dimensions);
    this.pokeballs = new PokeBall(this.dimensions);
    this.animate();
  }

  animate() {
    this.level.animate(this.ctx);
    this.charmander.animate(this.ctx);
    this.pokeballs.animate(this.ctx);

    if(this.gameOver()) {
      // alert('GAME OVER');
      // this.restart();
    }

    if (this.running) {
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

    if(e.keyCode === 39) {
      this.charmander.dash();
    }
  }

  gameOver() {
    return (
      this.pokeballs.collidesWith(this.charmander.bounds()) 
      // this.charmander.outOfBounds(this.height)
    );
  }
}

export default CharmandersRevenge;