class Rope{

    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x : this.offsetX, y : this.offsetY},
            stiffness : 1
        }

        this.rope = Constraint.create(options);

        World.add(world, this.rope);
  
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        // Displaying a chain
        strokeWeight(4);
        stroke("green");
        //line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y);
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
    }
}