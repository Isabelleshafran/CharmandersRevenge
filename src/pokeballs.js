
const CONSTANTS = {
  BALL_SPEED: 3.5,
  BALL_WIDTH: 95,
  BALL_HEIGHT: 95,
  EDGE_BUFFER: 50,
  BALL_SPACING: 1000,
  WARM_UP_SECONDS: 1,
};

class PokeBall {
  constructor(dimensions) {
    this.dimensions = dimensions;

    const firstBallDistance = 800;

    this.speed = 3.5

    this.balls = [
      this.randomBall(firstBallDistance),
      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING),
      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING * 2),
    ];
  }

  animate(ctx, charmander, score) {
    // console.log(charmander)
    this.moveBalls(score);
    this.drawBalls(ctx, charmander);
  }

  randomBall(x) {
    const ball = {
      left: x,
      right: CONSTANTS.BALL_WIDTH + x,
      bottom: 150,
      passed: false,
      // bottom: Math.floor(Math.random() * 10) + 140,
    };

    return ball;
  }

  passedBall(char, callback) {
    this.eachBall((ball) => {
      if (ball.right < char.left) {
        if (!ball.passed) {
          ball.passed = true;
          callback();
        }
      }
    });
  }

  moveBalls(score) {

    this.eachBall(function (ball) {



       if (score >= 2) {
         this.speed = 4.5;
       } 
       
       if(score >= 5) {
         this.speed = 5.5 
       }

       if(score > 9) {
         this.speed = 8
       }

       if (score > 15) {
         this.speed = 10
       }
      
      ball.left -= this.speed;
      ball.right -= this.speed;


    });

    if (this.balls[0].right <= 0) {
      this.balls.shift();
      const newB = this.balls[1].left + CONSTANTS.BALL_SPACING;
      this.balls.push(this.randomBall(newB));
    }
  }

  drawBalls(ctx, charmander) {
    this.eachBall(function (ball) {

      // console.log(charmander)

      // console.log(ball.left, charmander.x);

      if(ball.left > (charmander.x)) {
   
            let pokeball = new Image();
            pokeball.src = "../images/pokeball.png";
            
            ctx.drawImage(
              pokeball,
              ball.left,
              ball.bottom,
              CONSTANTS.BALL_WIDTH,
              CONSTANTS.BALL_HEIGHT
            );
      
            pokeball.onload = () => {
              ctx.drawImage(
                pokeball,
                ball.left,
                ball.bottom,
                CONSTANTS.BALL_WIDTH,
                CONSTANTS.BALL_HEIGHT
              );
            };

      }


      // console.log(ball)
      // image, x, y, width, height)
    });
  }

  eachBall(callback) {
    this.balls.forEach(callback.bind(this));
  }

  collidesWith(char) {
    let collision = false;

    // console.log(char2.flash);
    this.eachBall((ball) => {
      if (ball.left >= 150 && ball.left <= 160 && char.bottom >= 55) {
        collision = true;
      }
    });

    return collision;
  }
}

export default PokeBall;


// {left: 50, right: 125, top: 186, bottom: 196}
// char bounds 