import Level from "./level";
import Charmander from './charmander'

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

    this.charmander = new Charmander(this.dimensions);
    this.level = new Level(this.dimensions);
    this.animate();
  }

  animate() {
    this.level.animate(this.ctx);
    this.charmander.animate(this.ctx);

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
    
    if(e.keyCode === 38) {
        this.charmander.jump();
    }
  }
}

export default CharmandersRevenge;