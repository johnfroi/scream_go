function bub(){
    this.sound=new Audio();
    this.playx=false;
    this.pause=false;
    this.init=function zxc(){
        this.sound.src="bubble.mp3";
    }
    this.playz=function playx(){
        if(this.playx==false){
            this.sound.play();
            this.playx=true; 
            
        } 
        if(this.sound.currentTime>0.88){  
           bubble.splice(0,1); 
        }
       
    }
    
}