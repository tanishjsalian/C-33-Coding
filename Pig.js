class Pig extends parent{

    constructor(x,y,w,h){
        super(x,y,w,h)
        this.image=loadImage("sprites/enemy.png")
        this.visible=255;

    }


display(){
   // console.log(this.body.speed)
    if(this.body.speed<3){
    super.display()
    }
    else{
     push()   
     this.visible=this.visible-5 
     World.remove(myworld,this.body)
     tint(255,this.visible)
     image(this.image,this.body.position.x,this.body.position.y,50,50) 
     pop()
    }
}
score(){
    if(this.visible<=0&&this.visible>-500){
        score=score+1
    }
    if(this.visible<=0&&this.visible>-20){
        pigs.play()
    }
}

}