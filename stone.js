class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("sprites/stone.png");
		this.body=Bodies.rectangle(this.x, this.y, this.r,this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r, this.r);
			pop()
			
	}

}