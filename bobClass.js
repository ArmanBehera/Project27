class Bob{

    constructor(x, y, radius){

        var options= {

            restitution : 1,
            isStatic : false,
            density : 0.03
        }

        this.body = Bodies.circle(x, y, radius, );

        this.radius = radius;

        World.add(world, this.body);
    }

    display(){

        ellipseMode(CENTER);
        fill("red");
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}