function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background (this);
    this.player = new Player (this);
    this.ondaVital = [];
    this.enemies = [];
};
Game.prototype.start = function(){
    setInterval(function(){
        this.draw();
        this.move();
        this.collision();
    }.bind(this), 100/60);
    this.createEnemy();
};
Game.prototype.draw = function(){
        this.background.draw();
        this.player.draw();
        this.ondaVital.forEach(function(kamehameha){kamehameha.draw();})
        this.enemies.forEach(function(enemy){enemy.draw();});
};
Game.prototype.move = function(){
    this.player.keyboard();
    this.ondaVital.forEach(function(kamehameha){kamehameha.moverKamehameha();})
    this.enemies.forEach(function(enemy){enemy.moverEnemy();});
};
Game.prototype.createKamehameha = function () {
    this.ondaVital.push(new Kamehameha (this))
};
Game.prototype.createEnemy = function(){
    setInterval(function(){
    this.enemies.push(new Enemy(this,0,(0,this.canvas.height/2 * Math.random())))
    }.bind(this),2000)
}
Game.prototype.eliminateKamehameha = function(){
    this.ondaVital = this.ondaVital.filter(function(kamehameha){
        return kamehameha.x < this.canvas.width
    })
}
Game.prototype.eliminateEnemy = function(){
    this.enemies = this.enemies.filter(function(enemy){
        return enemy.x < this.canvas.width
    })
}
Game.prototype.collision = function() {
    this.enemies.forEach(function(enemy){
        if (this.player.x +10 < enemy.x + enemy.width  && this.player.x -60 + this.player.width  > enemy.x &&
            this.player.y +60 < enemy.y + enemy.height && this.player.y -70 + this.player.height > enemy.y) {
                window.location.href = "gameOver.html";  
        }
    this.ondaVital.forEach(function(genkiDama){
     if (genkiDama.x +60 < enemy.x + enemy.width  && genkiDama.x -60 + genkiDama.width  > enemy.x &&
        genkiDama.y +60 < enemy.y + enemy.height && genkiDama.y -60 + genkiDama.height > enemy.y) {
             this.enemies.splice(this.enemies.indexOf(enemy))
        }
    }.bind(this));
  }.bind(this));   
}