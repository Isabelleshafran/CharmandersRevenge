

class Sprite {
    constructor(dimensions){

        this.dimensions = dimensions;

        this.x = 0; 
        this.y = 0; 

        this.srcX; 
        this.srcY; 

        this.sheetWidth = 2100; 
        this.sheetHeight = 1500; 

        this.cols = 2; 
        this.rows = 2;

        this.width = this.sheetWidth / this.cols; 

        this.height = this.sheetHeight / this.rows; 

    }

    animate(ctx) {
        this.draw(ctx);
    }

    updateFrame() {
        let currentFrame;
        currentFrame = ++currentFrame % this.cols; // 2% 2 = 1
        this.srcX = currentFrame * this.width; 
        this.srcY = 0; 
    }

    draw(ctx) {
        let char = new Image();
        char.src = "../images/spriteimages.png"

        this.updateFrame();
        ctx.drawImage(
            char, 
            this.srcX, 
            this.srcY, 
            this.width, 
            this.height, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        )
    }

    interval() {
        setInterval(function(){
            this.draw()
        }, 100)
    }

}

export default Sprite 