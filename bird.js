class bird extends parent{

    constructor(x,y,w,h){
           super(x,y,w,h);
           this.image=loadImage("sprites/bird.png")
           this.dot=loadImage("sprites/smoke.png")
           this.path=[]
    }
    display(){
 

       push()
    
       super.display();
       if(this.body.position.x>170&&this.body.speed>20){

       
       var position=[this.body.position.x,this.body.position.y]
       this.path.push(position)
       }

       for(var i=0;i<this.path.length;i=i+1){
              image(this.dot,this.path[i][0],this.path[i][1])
       }
        pop()
}
}