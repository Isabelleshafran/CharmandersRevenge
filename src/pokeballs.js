
const CONSTANTS = {
  BALL_SPEED: 3,
  BALL_WIDTH: 95,
  BALL_HEIGHT: 95,
  EDGE_BUFFER: 50,
  BALL_SPACING: 1000,
  WARM_UP_SECONDS: 1,
};

class PokeBall {
  constructor(dimensions) {
    this.dimensions = dimensions;

    const firstBallDistance = 400;

    this.balls = [
      this.randomBall(firstBallDistance),
      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING),
      this.randomBall(firstBallDistance + CONSTANTS.BALL_SPACING * 2),
    ];
  }

  animate(ctx) {
    this.moveBalls();
    this.drawBalls(ctx);
  }

  randomBall(x) {
    const ball = {
      left: x,
      right: 95 + x,
      top: CONSTANTS.BALL_HEIGHT,
      bottom: CONSTANTS.BALL_HEIGHT,
    };

    return ball;
  }

  moveBalls() {
    this.eachBall(function (ball) {
      ball.left -= CONSTANTS.BALL_SPEED;
      ball.right -= CONSTANTS.BALL_SPEED;
    });

    if (this.balls[0].right <= 0) {
      this.balls.shift();
      const newB = this.balls[1].left + CONSTANTS.BALL_SPACING;
      this.balls.push(this.randomBall(newB));
    }
  }

  drawBalls(ctx) {
    this.eachBall(function (ball) {
      let pokeball = new Image();
      pokeball.src = "../images/pokeball.png";

      ctx.drawImage(pokeball, ball.left, 175, 95, 95);


      pokeball.onload = () => {
        ctx.drawImage(pokeball, ball.left, 175, 95, 95);
      };
    });
  }

  eachBall(callback) {
    this.balls.forEach(callback.bind(this));
  }


  collidesWith(char) {
    //this function returns true if the the rectangles overlap
    const _overlap = (rect1, rect2) => {
      //check that they don't overlap in the x axis
      if (rect1.left > rect2.right || rect1.right < rect2.left) {
        return false;
      }
      //check that they don't overlap in the y axis
      if (rect1.top > rect2.bottom || rect1.bottom < rect2.top) {
        return false;
      }
      return true;
    };

    let collision = false;
    this.eachBall((ball) => {
      if (
   
        _overlap(ball, char)
      ) {
        collision = true;
      }
    });
    return collision;
  }
}

export default PokeBall;


// {left: 50, right: 125, top: 186, bottom: 196}
// char bounds 