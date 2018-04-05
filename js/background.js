function Background(game) {
    this.x = 0;
    this.y = 0;
    this.game = game;
    this.img = new Image();
    this.img.src = "img/2357b7cd4c3f310.jpg";
};
Background.prototype.draw = function() {
    if(this.x++ > this.game.canvas.width){
      this.x = 0;
    }
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x - this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
};