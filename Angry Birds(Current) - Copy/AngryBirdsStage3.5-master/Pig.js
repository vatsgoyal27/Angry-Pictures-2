class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;

  }
display() {
  console.log(this.body.speed);
  if(this.body.speed < 3) {
    super.display();
  } else {
    World.remove(world,this.body)
    push();
    this.visibility = this.visibility-10;
    tint(255, this.visibility);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
    this.death = 3;
  }
}
scoreAdd() {
  if(this.visibility < 0) {
    this.body.speed = 0;
    Matter.Body.setPosition(this.body, {x: 100, y: 1000});
  }
  if(this.death > 2){
    text("YAY YOU BEAT IM UP!!!", 600, 200);

  }

}
};