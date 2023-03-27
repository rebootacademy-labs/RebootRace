//Prototipo

function Cars(vida,posX,posY,speedX,speedY,size){
    this.vida = vida
    this.posX = posX
    this.posY = posY
    this.speedX = speedX
    this.speedY = speedY
    this.size = size
}

// Coche del Jugador
function Player(score,Vida, posX, posY, speedX, speedY, size){
    Cars.call(this, Vida, posX, posY, speedX, speedY, size)
    this.score = 0
}
Player.prototype = Object.create(Cars.prototype)
Player.prototype.constructor = Player

//New player with Start parameters.
var player = new Player(
    0,      //score
    3,      //vida
    300,    //posX
    0,      //posY
    80,     //speedX
    100,    //sppedY
    100     //size
)
var rivalCar  = new Cars(
    3,      //vida
    300,    //posX
    0,      //posY
    80,     //speedX
    10,    //speedY
    100     //size
    )

//Recive un ObjPlayer con la nueva posX -> Injecta en DOM
Player.prototype.newPos = function (player){
    var playerCar = document.querySelector('.player1');
    playerCar.setAttribute('style', `left:${player.posX}px; top:${player.posY}px`)
    console.log("P1-X: " + player.posX)
}

//Unir Eje X e eje y en 1
Player.prototype.newPosY = function (player){
    var playerCarY = document.querySelector('.player1');
   // playerCarY.setAttribute('style', `top:${player.posY}px`)
    
}


    var rivalIntervalID
    var screen = document.querySelector('.screen_game_mid')
    
Cars.prototype.newRival = function(){
    //Mostrar en HTML
    const createRival = document.createElement('div')
    createRival.setAttribute('class','rival')
    screen.appendChild(createRival)
    //var interval  = Math.floor(Math.random()*10)
    //Moivmiento Vertical del
    rivalIntervalID = setInterval(rivalCar.newPosY,50)
}

//Move rival -> Y lo elimina al final.
Cars.prototype.newPosY = function (){
    var rivalDOM = document.querySelector('.rival');
    //posY > Maximo de la pantalla.
    if(rivalCar.posY < 1000){
    rivalCar.posY += rivalCar.speedY;
    } else {
        clearInterval(rivalIntervalID)
        screen.removeChild(rivalDOM)
    }
    rivalDOM.setAttribute('style', `left:(${rivalCar.posY}px)`)

}

rivalCar.newRival(rivalCar)

// Checkcolision function
Cars.prototype.checkCollision = function () {
    if (player.posY + player.size + (player.size / 2) >= rivalCar.posY){
    //console.log("Pos Check Collision" + rivalCar.posY, player.posY)
    } else {

    }
        
}



export {
    player,
    rivalCar
} 
