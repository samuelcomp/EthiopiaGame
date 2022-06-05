export class Player {
    constructor(game){
        this.game= game;
        this.width=100;
        this.height=91.3;
        this.x=0;
        this.y=this.game.height-this.height;
        this.vy=0;
        this.weight =1;
        this.image=document.getElementById("player");
        this.speed=0;
        this.maxspeed=10;
    }


    
    update(input){
        //this.x++;
        //this is for horizontal movement 
            this.x += this.speed;
            if(input.includes('ArrowRight'))
                this.speed=this.maxspeed;
            else if(input.includes('ArrowLeft'))
                this.speed= -this.maxspeed;
                else this.speed=0;
            if(this.x<0) 
                this.x=0;
            if(this.x > this.game.width - this.width)
                this.x=this.game.width-this.width;
        //this is for vertical movement 
           // this.y += this.vy;
            if(input.includes('ArrowUp') && this.onGround())
                this.vy -= 20;
                this.y+=this.vy;
            if(!this.onGround())
                this.vy += this.weight;
            else
                this.vy=0;
                // vertical movement.
            
    }



    onGround(){
        return this.y >= this.game.height -this.height;
    }
    draw(context){
        //context.fillStyle="red";
        //context.fillRect(this.x,this.y,this.width,this.height);
        context.drawImage(this.image,0,0,this.width,this.height,this.x,this.y,this.width,this.height);
    }
}