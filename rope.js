class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
	
	}

	var_options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA,y:this.pointB}
	
	}

	display() {
		
		let pos = this.body.position;
	
		push();
		rectMode(CENTER);
		stroke(255);
		fill(127);
		rect(pos.x, pos.y, this.body1, this.body2);
		pop();
	  }
}