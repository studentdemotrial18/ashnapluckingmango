class Tree {
    constructor(x,y,width,height){
      var options = {
        //change = to : in below line
        isStatic:true
              }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tree.png");
      World.add(world, this.body);
      
    }
    display() {
      //added below line
      var angle=this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      //added below line
      rotate (angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }