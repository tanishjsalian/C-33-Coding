class chain{
constructor(obj1,point2){
    var options={
        bodyA: obj1,
        pointB: point2,
        length:10,
        stiffness:0.08
        }
        
         this.chain=Constraint.create(options)
        World.add(myworld,this.chain);
 this.s1=loadImage("sprites/sling1.png")    
 this.s2=loadImage("sprites/sling2.png")
 this.s3=loadImage("sprites/sling3.png")   

}
attach(body){
    this.chain.bodyA=body
}

display(){
image(this.s1,170,200)
image(this.s2,140,199)


    if (this.chain.bodyA!=null){

    push()
    strokeWeight(10)
    stroke(48,22,8)
    if(this.chain.bodyA.position.x<180){
   line(this.chain.bodyA.position.x-15,this.chain.bodyA.position.y,this.chain.pointB.x-15,this.chain.pointB.y-10)
   line(this.chain.bodyA.position.x-15,this.chain.bodyA.position.y,this.chain.pointB.x+20,this.chain.pointB.y-15)
   image(this.s3,this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,10)
    }

    else{
        line(this.chain.bodyA.position.x+15,this.chain.bodyA.position.y,this.chain.pointB.x-15,this.chain.pointB.y-10)
        line(this.chain.bodyA.position.x+15,this.chain.bodyA.position.y,this.chain.pointB.x+20,this.chain.pointB.y-15)
        image(this.s3,this.chain.bodyA.position.x+20,this.chain.bodyA.position.y,10)   
    }
   
   
   pop()
}


    

}
fly(){
    this.chain.bodyA=null
}






}