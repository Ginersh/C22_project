const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Create multiple bobs, mulitple ropes variable here

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var bob1_options = {
		restitution: 0.8
	  }

	var bob2_options = {
		restitution: 0.8
	  }

	var bob3_options = {
		restitution: 0.8
	  }

	var bob4_options = {
		restitution: 0.8
	  }
	
	var bob5_options = {
		restitution: 0.8
	  }

    bob1 = Bodies.circle(400,400,50,bob1_options);
	World.add(world,bob1);
	
	bob2 = Bodies.circle(450,404,50,bob2_options);
	World.add(world,bob2);
	
	bob3 = Bodies.circle(500,410,50,bob3_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(550,415,50,bob4_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(600,420,50,bob5_options);
	World.add(world,bob5);
	
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	rope1 = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,rope1);

	rope2 = Matter.Constraint.create({
		pointA:{x:220,y:20},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,rope2);

	rope3 = Matter.Constraint.create({
		pointA:{x:240,y:20},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,rope3);

	rope4 = Matter.Constraint.create({
		pointA:{x:260,y:20},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,rope4);

	rope5 = Matter.Constraint.create({
		pointA:{x:280,y:20},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,rope5);
	


rectMode(CENTER);
ellipseMode(RADIUS);
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y);
  line(rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y);
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y);
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y);

  pop();
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,10);
  ellipse(bob2.position.x,bob2.position.y,10);
  ellipse(bob3.position.x,bob3.position.y,10);
  ellipse(bob4.position.x,bob4.position.y,10);
  ellipse(bob5.position.x,bob5.position.y,10);
  

}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.05,y:0});
    }
}