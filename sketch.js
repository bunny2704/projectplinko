const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onsling";
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;




function setup() {

  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 ground = new Ground(width/2,height,width,20);
  for(var k=0;k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
   // divisions.pop
  }
  
  for (var j =75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
      }
      for (var j =50; j <=width-10;j=j+50){
        plinkos.push(new Plinko(j,175));
          }
          var render = Render.create({
            element: document.body,
            engine: engine,
            options: {
              width: 1200,
              height: 700,
              wireframes: false
          }
            });
          
           
           Render.run(render);
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();

  for (var k = 0; k < divisions.length; k++){

     divisions[k].display();
  }
  for (var i = 0; i < plinkos.length; i++){

    plinkos[i].display();
 }
 
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-50, width/2+50), 10,10));
  
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}
 


  drawSprites();
}