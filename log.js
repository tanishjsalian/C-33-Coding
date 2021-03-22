class Log extends parent{

    constructor(x,y,w,h,a){
        super(x,y,w,h,a)
    
         
        this.image=loadImage("sprites/wood2.png")
           
           Matter.Body.setAngle(this.body,a)
           



    }


}