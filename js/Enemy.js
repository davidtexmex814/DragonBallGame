function Enemy(game,x,y) {
    this.game = game;
    this.img = new Image();
    this.img.src = "img/Jiren_(DBDB).png";
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 220;
}
Enemy.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};
Enemy.prototype.moverEnemy = function(){
    this.x += 4;

}