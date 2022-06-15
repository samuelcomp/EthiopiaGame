import { Sitting,Running,Jumping,Falling } from "./playerstate.js";
export class Player {
    constructor(game){
        this.game= game;
        this.width=100;
        this.height=91.3;
        this.x=0;
        this.y=this.game.height-this.height-this.game.groundMargin;
        this.vy=0;
        this.weight=1;
        this.frameX=0;
        this.frameY=0;
        this.maxFrame;
        this.fps=20;
        this.frameInterval=1000/this.fps;
        this.frameTimer=0;
        this.image=document.getElementById("player");
        this.speed=0;
        this.maxspeed=10;
        this.states=[new Sitting(this),new Running(this),new Jumping(this),new Falling(this)];
        this.currentState=this.states[0];
        this.currentState.enter();
    }    
    update(input,deltaTime){
        this.currentState.handleInput(input);
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
          //  if(input.includes('ArrowUp') && this.onGround())
          //      this.vy -= 25;
                this.y+=this.vy;
            if(!this.onGround())
                this.vy += this.weight;
            else
                this.vy=0;
                // Sprint animation
                if(this.frameTimer > this.frameInterval)
                {
                    this.frameTimer=0;
                    if(this.frameX < this.maxFrame) this.frameX++
                    else this.frameX=0;
                }
               else{
                   this.frameTimer+=deltaTime;
               }
            
    }
    draw(context){
        //context.fillStyle="red";
        //context.fillRect(this.x,this.y,this.width,this.height);
       context.drawImage(this.image,this.frameX*this.width,this.frameY*this.height,this.width,this.height,this.x,this.y,this.width,this.height);
        //context.drawImage(this.image,0,0,this.width,this.height,this.x,this.y,this.width,this.height);
    }

    onGround(){
        return this.y >= this.game.height -this.height-this.game.groundMargin;
    }
    setState(state){
        this.currentState=this.states[state];
        this.currentState.enter();
    }
}