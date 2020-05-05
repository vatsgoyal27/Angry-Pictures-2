class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trail = loadImage("sprites/smoke.png");
    this.smokeArray = [];
  }

  display() {
    super.display();
    if(this.body.position.x > 240 && this.body.speed > 10) {
    var position = [this.body.position.x, this.body.position.y];
    this.smokeArray.push(position);
    for(var i = 0; i < this.smokeArray.length-1; i++) {
      image(this.trail, this.smokeArray[i][0], this.smokeArray[i][1]);
    }
  } else{
    this.smokeArray = [];
    }

  }
}
