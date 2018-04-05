function Kamehameha(game){
    this.game = game;
    this.x = this.game.player.x + this.game.player.width -290;
    this.y = this.game.player.y  + this.game.player.height -130;
    this.width = 200;
    this.height = 110;
    this.vx = 4;

    this.img = new Image();
    this.img.src = "img/genkidama_by_gokuxdxdxdz-dbxa1ux.png"
};
Kamehameha.prototype.draw = function(){
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};
Kamehameha.prototype.moverKamehameha = function () {
    this.x -= this.vx;
};