class parent{

    constructor(x,y,w,h,angle){
        var options={
            restitution:0.5,
            friction:1
         
           }
         
           this.body=Bodies.rectangle(x,y,w,h,options);
           World.add(myworld,this.body)
           this.w=w;
           this.h=h;
           this.image=loadImage("sprites/base.png")

    }

    display(){
 

       push()
       fill("red")
        imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        image(this.image,0,0,this.w,this.h)
        pop()

}
}