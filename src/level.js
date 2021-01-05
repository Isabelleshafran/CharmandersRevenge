
class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;

    const grassDistance = 0

    // const firstBallDistance = this.dimensions.width 

    this.grass = [
        this.randomGrass(grassDistance), 
        this.randomGrass(grassDistance + 100), 
        this.randomGrass(grassDistance + 200)
    ]

  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.moveGrass();
    this.drawGrass(ctx)

  }

  drawBackground(ctx) {
    let sky = new Image();
    sky.src = "../images/sky.png";
    ctx.drawImage(sky, 0, 0, this.dimensions.width, this.dimensions.height);
    sky.onload = () => {
      ctx.drawImage(sky, 0, 0, this.dimensions.width, this.dimensions.height);
    };
  }

  randomGrass(x){

    const grass = {
        left: x, 
        right: 200 + x
    }

    return grass
  }

  moveGrass(){
      this.eachGrass(function(grass) {
          grass.left -= 2, 
          grass.right -= 2
      })

      if(this.grass[0].left <= 0) {
          this.grass.shift();
          const newG = this.grass[1].left + 220;
          this.grass.push(this.randomGrass(newG))
      }
  }

  drawGrass(ctx){

        this.eachGrass(function (grass) {
          let ground = new Image();
          ground.src = "../images/grass.png";

          ctx.drawImage(ground, grass.left, grass.right, 500, 100);

          ground.onload = () => {
            ctx.drawImage(ground, 0, this.dimensions.height - 100, 400, 200);
          };
        });
  }


eachGrass(callback) {
    this.grass.forEach(callback.bind(this));
  }

}

export default Level;