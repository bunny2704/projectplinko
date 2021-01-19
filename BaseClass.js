class BaseClass{
    constructor(x,y,radius)
    { var options = { isStatic:true,
        restitution:1,
        //friction:0.5,
        density:0.99
        
     
       } 
  
       this.radius=20;
  
  
  
    this.body=Bodies.circle(x,y,radius,options);
   
    
     World.add(world, this.body); }
  
    display(){ var pose =this.body.position;
            
  
  
      push();
  
      translate(pose.x, pose.y) ;
  
 
 
  
  //fill("purple");
  
  
  
  ellipse(0, 0,this.radius,this.radius);
  pop();
    }
}