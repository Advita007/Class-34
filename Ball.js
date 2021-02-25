//creating the Ball class
class Ball{
    //passing the parameters to the contructor which are invoked while creating the object
    constructor(x,y,width,height,angle){
        //defining the options
        var options = {
            density: 1,
            frictionAir: 0.005
        }

        //creating the body as a rectangle one
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        //adding the body to the world
        World.add(world,this.body)
    }
    //display function for the body
    display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        ellipse(0,0,this.width,this.height)
        pop();
    }
}