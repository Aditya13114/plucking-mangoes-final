class Tree{
    constructor(x,y) {

        this.image = loadImage("sprites/tree.png");
        
        var options = {isStatic :true}
        this.body = Bodies.rectangle(x,y,100, 200 ,options);
        
        World.add(world, this.body);
    }

  display(){
      push();
       imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,300,500);
      pop();
  }
}