enchant();

window.onload = function() {
  "use strict";

  let core = new Core(320, 320);

  core.fps = 16;
  core.preload("../images/betty.png");

  core.onload = function() {
    let player = new Sprite(48, 48);
    player.image = core.assets["../images/betty.png"];
    player.frame = 3;
    player.x = 120;
    player.y = 50;

    core.rootScene.addChild(player);

    player.addEventListener("enterframe", function(e) {
      if (core.input.left) {
        this.x -= 4;
        this.frame = this.tick % 4 * 4 + 1;
        this.tick++;
      }
      if (core.input.right) {
        this.x += 4;
        this.frame = this.tick % 4 * 4 + 3;
        this.tick++;
      }
      if (core.input.up) {
        this.y -= 4;
        this.frame = this.tick % 4 * 4 + 2;
        this.tick++;
      }
      if (core.input.down) {
        this.y += 4;
        this.frame = this.tick % 4 * 4 + 4;
        this.tick++;
      }
    });
    player.addEventListener("touchmove", function(e) {
      this.x = e.x - this.width / 2;
      this.y = e.y - this.height / 2;
    });
  };
  core.start();
};