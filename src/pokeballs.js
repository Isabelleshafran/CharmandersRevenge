
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
    this.speed = 3.5;
    this.pokeballPic = new Image();
    this.pokeballPic.src = "../assets/images/pokeball.png";

    this.balls = [
      this.randomBall(firstBallDistance),
      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING),
      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING * 2),
    ];
  }

  animate(ctx, charmander, score) {
    this.moveBalls(score);
    this.drawBalls(ctx, charmander);
  }

  randomBall(x) {
    const ball = {
      left: x,
      right: CONSTANTS.BALL_WIDTH + x,
      bottom: 150,
      passed: false,
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
         this.speed = 6.5
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
      if(ball.left > (charmander.x)) {  
          ctx.drawImage(
            this.pokeballPic,
            ball.left,
            ball.bottom,
            CONSTANTS.BALL_WIDTH,
            CONSTANTS.BALL_HEIGHT
          );
    
          this.pokeballPic.onload = () => {
            ctx.drawImage(
              this.pokeballPic,
              ball.left,
              ball.bottom,
              CONSTANTS.BALL_WIDTH,
              CONSTANTS.BALL_HEIGHT
            );
          };
      }
    });
  }

  eachBall(callback) {
    this.balls.forEach(callback.bind(this));
  }

  collidesWith(char) {
    let collision = false;
    this.eachBall((ball) => {
      if (ball.left >= 125 && ball.left <= 135 && char.bounds().bottom >= 55) {
        collision = true;
      }
    });

    return collision;
  }
}

export default PokeBall;

