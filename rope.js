class rope{
	constructor(bodyA,pointB){
		var options={
			bodyA: bodyA,
			pointB: pointB,
			stiffness: 0.04,
			length: 240
		}
		this.pointB=pointB
		this.rope = Constraint.create(options)
        World.add(world, this.rope)
	}

	display(){
		if(this.rope.bodyA){
			var pointA = this.rope.bodyA.position;
			var pointB = this.pointB;
			line(pointA.x, pointA.y , pointB.x, pointB.y);
		}
	}



	
}