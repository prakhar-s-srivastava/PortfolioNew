import Paper from "paper";

class Boid {
  constructor() {

    this.triangle = new Paper.Path.RegularPolygon(new Paper.Point(80, 70), 3, 15);
    this.triangle.fillColor = "#000000";
    this.triangle.selected = false;
    this.triangle.position = new Paper.Point(
       500,
      500
    );
    let a =this.forward(new Paper.Point(1, 0));
    this.triangle.rotate(a)
    this.triangle.applyMatrix = false;
    this.velocity = new Paper.Point(Math.random()*2-1,Math.random()*2-1)
  }

  forward(dir) {

    
    // console.log(dir.angle);
    return (dir.angle);
  }

  move=(dis)=>
  {
    // console.log(dis)
    this.triangle.position = this.triangle.position.add(dis);
    this.triangle.rotation = (this.forward(dis)) - 30;
    if (this.triangle.position.x > Paper.view.size.width)
    {
      this.triangle.position = new Paper.Point(0,this.triangle.position.y);
    }
     if (this.triangle.position.y > Paper.view.size.height) {
       this.triangle.position = new Paper.Point( this.triangle.position.x,0);
    }
    
     if (this.triangle.position.x <0) {
       this.triangle.position = new Paper.Point(
         Paper.view.size.width,
         this.triangle.position.y
       );
    }
    
    if (this.triangle.position.y <0) {
      this.triangle.position = new Paper.Point(
        this.triangle.position.x,
        Paper.view.size.height
      );
    }
  }
}

class Flocker {
  constructor(paper) {
    this.members = [];
    for (let i = 0; i < 20; i++) this.members.push(new Boid());
    console.log("created a flock of  " + Paper.view.size);
    Paper.view.onFrame = this.simulate;
    
      
  }

  simulate=()=>
  {

    let seprationThreshold = 30;
    let alignmentThreshold = 80;
    let conhensionThreshold = 100;
    // console.log(this.members.length)
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

      
      e.velocity =e.velocity.add(sum.multiply(0.02/count));//algin
    
      e.velocity.add((sumC.multiply(1/countC).subtract(e.triangle.position)).multiply(0.02));//cohension
      e.velocity.length =5 ;
      e.move(e.velocity.multiply(0.3));
    });
  }
}

export default Flocker;
