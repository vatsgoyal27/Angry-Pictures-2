class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.imagepart1 = loadImage("sprites/sling1.png");
        this.imagepart2 = loadImage("sprites/sling2.png");
        this.imagepart3 = loadImage("sprites/sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly() {
        this.sling.bodyA = null;
    }
    attach(bodyA) {
        this.sling.bodyA = bodyA;
        
    }
    display(){
        image(this.imagepart1, 200, 20);
        image(this.imagepart2, 170, 15);
        if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(8);
        stroke("brown");
        line(pointA.x, pointA.y, pointB.x+ 23, pointB.y+ 20);
        line(pointA.x, pointA.y, pointB.x-20, pointB.y+20);
        image(this.imagepart3, pointA.x-30, pointA.y-5);
        }
    }
}