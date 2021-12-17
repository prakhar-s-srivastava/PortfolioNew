import Paper from "paper";


const colors = ["#FF5733", "#A675A1", "#FF9505", "#004F2D", "#23C9FF", "#4F5D75"];
class Boid {
  constructor() {

    this.color = colors[Math.floor(Math.random() *colors.length)];

     this.boidTrail = new Paper.Path({
       strokeColor: /* "#341195"*/ this.color,
       opacity: 0,
       strokeWidth: 10,
       dashArray: [4, 10],
        strokeCap: "round",
     });
    // this.triangle = new Paper.Path.RegularPolygon(new Paper.Point(80, 70), 3, 15);
    this.triangle = new Paper.Path();
    this.triangle.add(new Paper.Point(-0.3, 0));
    this.triangle.add(new Paper.Point(-1, 1));
    this.triangle.add(new Paper.Point(2,0 ));
    this.triangle.add(new Paper.Point(-1, -1));
    this.triangle.scale(8);
    this.triangle.closed =true;
    this.triangle.fillColor = this.color;
    this.triangle.selected = false;
    this.triangle.opacity = 0.8;
    this.triangle.position = new Paper.Point(
       500,
      500
    );
    let a =this.forward(new Paper.Point(1, 0));
    this.triangle.rotate(a)
    this.triangle.applyMatrix = false;
    this.velocity = new Paper.Point(Math.random() * 2 - 1, Math.random() * 2 - 1)
   
    this.maxPoints = 50;
    this.points = [];
  }

  forward(dir) {

    
   
    return (dir.angle);
  }

  move=(dis)=>
  {
 
    this.triangle.position = this.triangle.position.add(dis);
    this.triangle.rotation = (this.forward(dis)) ;
    let rem =false;
    if (this.triangle.position.x > Paper.view.size.width)
    {
      rem=true;
      this.triangle.position = new Paper.Point(0, Math.random()*this.triangle.position.y);
    }
     if (this.triangle.position.y > Paper.view.size.height) {
       rem = true;
       this.triangle.position = new Paper.Point(Math.random()*this.triangle.position.x, 0);
    }
    
     if (this.triangle.position.x <0) {
       rem = true;
       this.triangle.position = new Paper.Point(
         Paper.view.size.width,
         Math.random()*this.triangle.position.y
       );
    }
    
    if (this.triangle.position.y <0) {
      rem = true;
      this.triangle.position = new Paper.Point(
        Math.random()*this.triangle.position.x,
        Paper.view.size.height
      );
    }

    // if (rem)
    // {
    //   this.boidTrail.removeSegments(0, this.boidTrail.segments.length, true);
   
    //   this.points = [];
    //   }

    // if (this.points.length < this.maxPoints) {
    //   this.points.push(this.triangle.position);
    // } else {
    //   this.points.shift();
    //   this.points.push(this.triangle.position);
    // }

    // this.boidTrail.removeSegments(0, this.boidTrail.segments.length, true);
    //  for (var i = 0; i < this.points.length; i++) {
    //    this.boidTrail.add(this.points[i]);
    //  }

  }
}

class Flocker {
  constructor(paper) {
    this.members = [];
    this.clicked = false;
    for (let i = 0; i < 50; i++) this.members.push(new Boid());

    Paper.view.onFrame = this.simulate;
    Paper.view.onMouseMove = this.mouseMove;
    this.mousePosition = new Paper.Point();
    Paper.view.onMouseEnter = this.mouseClick;
    Paper.view.onMouseLeave = (event) =>{this.clicked = false;}
      
  }

  mouseMove = (event) => {
    
    this.mousePosition = event.point;
  }
  mouseClick = (event) => {
    this.clicked = true;
    // console.log(event.point);
  }

  simulate=()=>
  {

    
    let seprationThreshold = 30;
    let alignmentThreshold = 80;
    let conhensionThreshold = 100;

    this.members.forEach((e,i) => {

      //sepration
      //align 
      let sum = new Paper.Point(0,0);
      let count = 1;

      //cohension
        let sumC = new Paper.Point(0,0);
        let countC = 1;
      this.members.forEach((ae, j) => {
        if (i == j) { return; }
        var sep = e.triangle.position.getDistance(ae.triangle.position);
        if (sep < seprationThreshold) {
          var force = e.triangle.position
            .subtract(ae.triangle.position)
            .multiply(0.2 *1 / (1 +sep));;
          
          e.velocity = e.velocity.add(force );
        }

         if (sep < alignmentThreshold) {
          sum = sum.add(ae.velocity);
       
          count++;
        }

         if (sep < conhensionThreshold)
        {
           sumC = sumC.add(ae.velocity);;
           countC++;
          }
        
      });

      let md = e.triangle.position.getDistance(this.mousePosition);
      let mouseSeparation = new Paper.Point(); 
      if(md<Paper.view.size.width/2.2)
        mouseSeparation = e.triangle.position.subtract(this.mousePosition).multiply(1 / (1 + md));
      
      if(!this.clicked)
      { e.velocity = e.velocity.add(mouseSeparation); }
      else
      {
        e.velocity = e.velocity.subtract(mouseSeparation);
        
      }
        e.velocity = e.velocity.add(sum.multiply(0.02 / count));//algin
      e.velocity.add((sumC.multiply(1/countC).subtract(e.triangle.position)).multiply(0.02));//cohension
      e.velocity.length =5 ;
      e.move(e.velocity.multiply(0.3));
    });
  }
}

export default Flocker;
