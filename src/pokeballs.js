
const CONSTANTS = {
  BALL_SPEED: 2,
  BALL_WIDTH: 50,
  EDGE_BUFFER: 50,
  PIPE_SPACING: 220,
  WARM_UP_SECONDS: 1,
};

class PokeBall {
  constructor(dimensions) {
    this.dimensions = dimensions;

    const firstBallDistance = this.dimensions.width;

    this.balls = [
      this.randomBall(firstBallDistance),
      this.randomBall(firstBallDistance + 220),
    ];
  }

  animate(ctx) {
    this.moveBalls();
    this.drawBalls(ctx);
  }

  randomBall(x) {
    const ball = {
      left: x,
      right: 35 + x,
    };

    return ball;
  }

  moveBalls() {
      this.eachBall(function(ball) {
          ball.left -= 2;
          ball.right -= 2;
      })
      if(this.balls[0].left <= 0) {
          this.balls.shift();
          const newX = this.balls[1].left + 220;
          this.balls.push(this.randomBall(newX))
      }
  }

  drawBalls(ctx) {
    this.eachBall(function (ball) {
      let pokeball = new Image();
      pokeball.src = "../images/pokeball.png";

      ctx.drawImage(pokeball, ball.left, ball.right, 35, 35);

      pokeball.onload = () => {
        ctx.drawImage(pokeball, ball.left, ball.right, 35, 35);
      };
    });
  }

  eachBall(callback) {
    this.balls.forEach(callback.bind(this));
  }
}

export default PokeBall;