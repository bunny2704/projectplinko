class Particle
{ constructor(x,y,radius)
    { var options = { isStatic:false,
        restitution:0.5,
        //friction:0.5,
        density:0.99
        
     
       } 
  
  
  
  
  
    this.body=Bodies.circle(x,y,radius,options);
    this.color=color(random(0,255),random(0,255),random(0,255))
    this.radius=20;
    
     World.add(world, this.body); }
  
    display(){ var pose =this.body.position;
            
  
  
      push();
  
      translate(pose.x, pose.y) ;
  
 
 
  
  fill(this.color,);
  
  
  
  ellipse(0, 0,this.radius,this.radius);
  pop();
    }
}