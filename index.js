window.addEventListener("load",Events,false);

var y=6;
var positionY=100;
var bajando=true;
var positionX=200;
var x=6;
var DentroX=true;
AxisX=500;
Contador=0;
GameOver=false;

function Events(){
    const canvas=document.getElementById("lienzo");
    lienzo=canvas.getContext("2d");

    lienzo.fillStyle="white";
    lienzo.font="72px Arial Narrow Bold";

    window.addEventListener("keypress", (event)=>{

        if(event.key=="a" && AxisX>=0){
            AxisX-=80;
        }
        if(event.key=="d" && AxisX<=1000){
            AxisX+=80;
        }
    },false);

    if(GameOver==false){
        setInterval(animate,12);
    }
}
function animate(){

    lienzo.clearRect(0,0,1200,800);
    if(GameOver==false){
        if(positionY<=(790) && bajando==true && positionX>=20 && DentroX==true){

            lienzo.beginPath();
            lienzo.arc(positionX+x,positionY + y,20,0,Math.PI*2,false);
    
            lienzo.fill();
            positionY=positionY+y;
            positionX=positionX+x;
        }
        else if(bajando==false && DentroX==true){
    
            lienzo.beginPath();
            lienzo.arc(positionX+x,positionY - y,20,0,Math.PI*2,false);
    
            lienzo.fill();
            positionY=positionY-y;
            positionX=positionX+x;
        }   
        else if(bajando==false && DentroX==false){
    
            lienzo.beginPath();
            lienzo.arc(positionX-x,positionY - y,20,0,Math.PI*2,false);
    
            lienzo.fill();
            positionY=positionY-y;
            positionX=positionX-x;
        }
        else if(bajando==true && DentroX==false){
    
            lienzo.beginPath();
            lienzo.arc(positionX-x,positionY + y,20,0,Math.PI*2,false);
    
            lienzo.fill();
            positionY=positionY+y;
            positionX=positionX-x;
        }
        if(positionY<=15){
            bajando=true;
        }
        else if(positionY>=790){
            bajando=false;
            GameOver=true;
        }
        if(positionX<=20){
            DentroX=true;
        }
        else if(positionX>=1200){
            DentroX=false;
        }
        if(positionY<=650 && positionY>=630 && bajando==true && positionX>=AxisX && positionX<=(AxisX+200)){
            bajando=false;
            Contador++;

            if(Contador<10){
                document.getElementById("puntaje").innerText = "Puntuación: " + Contador;
            }
            else if(Contador>=10 && Contador<20){

                document.getElementById("puntaje").style.color="red";

                document.getElementById("puntaje").innerText = "Puntuación: " + Contador;
            }
            else if(Contador>=20 && Contador<50){

                document.getElementById("puntaje").style.color="green";

                document.getElementById("puntaje").innerText = "Puntuación: " + Contador;
            }
            else if(Contador>=50){

                document.getElementById("puntaje").style.color="yellow";

                document.getElementById("puntaje").innerText = "Puntuación: " + Contador;
            }
        }
        lienzo.fillRect(AxisX,640,200,20);
    }
    else if(GameOver==true){
        lienzo.fillText("Game Over",420,370);
    }
}


