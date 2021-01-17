class Mango {
    constructor(x, y){
      var options = {
        restitution:0,
        //added isStatic
        isStatic:true
              }
      this.body = Bodies.rectangle(x, y,10,10, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display() {
      //added below line and rotate(angle)
     var angle=this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate (angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 10,10);
      pop();
    }
  }