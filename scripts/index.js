//player.start
//Keyboard EventListener -> Call -> whatWant(Event)

import { player, rivalCar } from "./car.js";
//import Player from "./car.js"
// import Game from "./game.js";

window.addEventListener("keydown", function (e) { whatWant(e)});

function startGame(){

}
function gameOver(){

}
function restartGame(){

}
function randomRivals(){

}
function gameProgres(){
    
}
function whatWant(e){
    //Player posX Movement
    switch(e.key){
    case "ArrowLeft":
            if ((player.posX + player.size) > 100) { //Left Border Map
            player.posX -= player.speedX;
            //LLama funcion que actualiza la imagen en el ejeX del player.
            player.newPos(player)
        }
        break;  
    case "ArrowRight":
            if ((player.posX + player.size) < 950) { //Right Border Map
            player.posX += player.speedX;
            //LLama funcion que actualiza la imagen en el ejeX del player.
            player.newPos(player)
        }
        break; 
    case "ArrowUp":
            if ((player.posY + player.size)) { //Right Border Map
            player.posY -= player.speedY;
            //LLama funcion que actualiza la imagen en el ejeX del player.
            player.newPos(player)
        }
        break;
        case "ArrowDown":
            if ((player.posY + player.size)) { //Right Border Map
            player.posY += player.speedY;
            //console.log(player.posY)
            //LLama funcion que actualiza la imagen en el ejeX del player.
            player.newPos(player)
        }
        break;
    }
    
    console.log(`Rival-PosY: ${rivalCar.posY}/ Rival-PosX: ${rivalCar.posX}`)
    console.log(`Rival-PosY: ${player.posY}/ Rival-PosX: ${player.posX}`)
}
player.newPosX