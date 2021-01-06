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


    this.grass = [
      this.randomGrass(grassDistance),
      this.randomGrass(grassDistance + CONSTANTS.GRASS_SPACING),
      this.randomGrass(grassDistance + (CONSTANTS.GRASS_SPACING * 2)),
    ];
  }

  animate(ctx, score) {
    this.drawBackground(ctx);
    this.moveGrass(score);
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
      right: CONSTANTS.GRASS_WIDTH + x,
      bottom: Math.floor(Math.random() * 60) + 200,
    };


    return grass
  }


  moveGrass(score){


    // console.log(score)
    
      this.eachGrass(function(grass) {

        let speed = 3.5


       if (score >= 2) {
         speed = 4.5;
       }

       if (score >= 5) {
         speed = 5.5;
       }

       if (score > 9) {
         speed = 8;
       }

        if (score > 15) {
          speed = 10;
        }
    
        grass.left -= speed
        grass.right -= speed

        grass.bottom
      })
      
    
      
      // to make game go faster find a way to -= 2 more over time 
      
      if(this.grass[0].right <= 0) {
      
          this.grass.shift();
          const newG = this.grass[1].left + CONSTANTS.GRASS_SPACING;
          this.grass.push(this.randomGrass(newG))
      
      }
  }

  drawGrass(ctx){

        this.eachGrass(function (grass) {
          let ground = new Image();
          ground.src = "../images/grass.png";

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