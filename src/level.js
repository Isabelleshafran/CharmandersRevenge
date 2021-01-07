const CONSTANTS = {
    GRASS_SPEED: 3.5,
    GRASS_WIDTH: 450, 
    GRASS_HEIGHT: 100,
    GRASS_SPACING: 700
}

class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    const grassDistance = 0
    this.speed = 3.5;

    this.grass = [
      this.randomGrass(grassDistance),
      this.randomGrass(grassDistance + CONSTANTS.GRASS_SPACING),
      this.randomGrass(grassDistance + (CONSTANTS.GRASS_SPACING * 2)),
    ];
  }

  animate(ctx, score) {
    this.moveGrass(score);
    this.drawGrass(ctx)

  }

  randomGrass(x){
    const grass = {
      left: x,
      right: CONSTANTS.GRASS_WIDTH + x,
      bottom: Math.floor(Math.random() * 60) + 200,
    };
    return grass
  }


  moveGrass(score){
      this.eachGrass(function(grass) {
       if (score >= 2) {
         this.speed = 4.5;
       }
       if (score >= 5) {
         this.speed = 5.5;
       }
       if (score > 9) {
         this.speed = 6.5;
       }

        grass.left -= this.speed
        grass.right -= this.speed

        grass.bottom
      })
      
      if(this.grass[0].right <= 0) {
          this.grass.shift();
          const newG = this.grass[1].left + CONSTANTS.GRASS_SPACING;
          this.grass.push(this.randomGrass(newG))
      }
  }

  drawGrass(ctx){
    this.eachGrass(function (grass) {
      let ground = new Image();
      ground.src = "./assets/images/grass.png";

      ctx.drawImage(ground, grass.left, grass.bottom, CONSTANTS.GRASS_WIDTH, CONSTANTS.GRASS_HEIGHT);

      ground.onload = () => {
        ctx.drawImage(
          ground,
          grass.left,
          grass.bottom,
          CONSTANTS.GRASS_WIDTH,
          CONSTANTS.GRASS_HEIGHT
        );
      };
    });
  }


eachGrass(callback) {
    this.grass.forEach(callback.bind(this));
  }

}

export default Level;