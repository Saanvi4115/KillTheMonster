class Hero{
    constructor(x, y, r) {
        var options = {
            frictionAir:1,
            density:1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("a.png");
        this.body = Bodies.circle(x, y, r, options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}