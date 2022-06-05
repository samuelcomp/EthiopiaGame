import {Player} from './player.js';
window.addEventListener('load',function(){
    const canvas=this.document.getElementById('canvas1');
    const ctx=canvas.getContext('2d');
    canvas.width=500;
    canvas.height=500;

    class Game{
        constructer(width,height){
            this.width=width;
            this.height=height;
            this.player=new Player();
        }
        update(){

        }
        draw(context){
            this.player.draw(context);
        }
    }
    const game=new Game(canvas.width,canvas.height);
    console.log(game);
    function animate()
    {
        console.log("love");
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});