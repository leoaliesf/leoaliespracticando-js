const canvas = document.getElementById('game');
const game = canvas.getContext('2d');
let btnup = document.getElementById('up');
let btndown = document.getElementById('down');
let btnleft = document.getElementById('left');
let btnright = document.getElementById('right');
let canvaSize;
let elementSize;
let level = 0;
let live = 3;
let lives = document.getElementById('lives');
let nuevojuego = document.getElementById('nuevo');

let time = document.getElementById('time');
let timeStar;
let timeInterval;

lives.textContent='💗💗💗'

const player = {
    x: undefined,
    y: undefined,
    inicialx: undefined,
    inicialy: undefined,
  };
const giftposition={
    x: undefined,
    y: undefined,
};
let muroNoTocar = [];


// creacion del mapa
window.addEventListener('load', resizegame);
window.addEventListener('resize', resizegame);
function resizegame(){
    if(window.innerHeight > window.innerWidth){
        canvaSize = window.innerWidth*0.8
    }else{
        canvaSize = window.innerHeight*0.8
    }
    canvas.setAttribute('width', canvaSize);
    canvas.setAttribute('height', canvaSize);

    elementSize = canvaSize/10;

    starGame();
}
// inicializar el juego
function starGame(){
    
    // console.log({canvaSize, elementSize})
    game.font = elementSize +'px Verdana'
    game.textAlign = 'end'
    gameWin();
    if (!timeStar) {
        timeStar = Date.now();
        timeInterval= setInterval(mostrarTiempo ,200);
    }
    const map = maps [level];
    const mapsRow = map.trim().split('\n')
    const mapsCol = mapsRow.map(row => row.trim().split(''))
    // console.log(map, mapsRow, mapsCol)
    
    // for (let i = 1; i <= 10; i++) {
    //     for (let j = 1; j <= 10; j++)
    //     game.fillText(emojis[mapsCol[j-1][i-1]], (elementSize *i)+12 , elementSize*j-10);  
    // }
    muroNoTocar = [];
    game.clearRect(0,0,canvaSize,canvaSize)
    mapsCol.forEach((row, rowI) => {
        row. forEach((col, colI) => {
        const emoji = emojis[col]
        const posX = elementSize * (colI + 1) +12;
        const posY = elementSize * (rowI + 1) -10;
        game.fillText(emoji, posX, posY)
        if (col== 'O') {
            player.inicialx = posX
            player.inicialy = posY
            if(!player.x  && !player.y ){
                player.x= posX
                player.y= posY 
               
            } 
        }else if (col == 'I'){
            giftposition.x = posX
            giftposition.y = posY
        }else if(col=='X'){
            muroNoTocar.push({
                x:posX,
                y:posY,
            })
        }
        game.fillText(emoji, posX, posY)
        })       
    });
    movePlayer();     
}

// ganaste el juego
function gameWin(){
    if(level >= maps.length ){
        let demo =document.getElementById('demo');
        demo.style.visibility='visible';
        demo.textContent='GANASTE!!!!';
        nuevojuego.style.visibility='visible';
        clearInterval(timeInterval);
        return
    }
}

//movimiento del jugador
function movePlayer(){  
         
    const giftcolisionx = Math.floor(player.x) == Math.floor(giftposition.x);
    const giftcolisiony = Math.floor(player.y) == Math.floor(giftposition.y);
    const treecolision = giftcolisiony && giftcolisionx;

    const enemyCollision = muroNoTocar.find(enemy => {
        const enemyCollisionX = Math.floor(enemy.x) == Math.floor(player.x);
        const enemyCollisionY = Math.floor(enemy.y) == Math.floor(player.y);
        return enemyCollisionX && enemyCollisionY;
      });
      
      if (enemyCollision && live !=0) {
        live -= 1 ;
        lives.textContent='';
        for (let i = 0; i < live; i++) {
            lives.textContent +='💗'
            };
        player.x = player.inicialx;
        player.y = player.inicialy;
      }
      if(live == 0){
        let demo =document.getElementById('demo');
        demo.style.visibility='visible';
        demo.textContent='intentalo nuevamente';
        nuevojuego.style.visibility='visible';
        clearInterval(timeInterval);
        return
      }
    if(treecolision){
        level += 1
        console.log('pasaste')
        starGame();
        
    }
    game.fillText(emojis['PLAYER'],player.x, player.y)
}



// movimiento de la consola
window.addEventListener('keydown', moveKey);
btnup.addEventListener('click', moveUp);
btnleft.addEventListener('click', moveLeft);
btndown.addEventListener('click', moveDown);
btnright.addEventListener('click', moveRight);
function moveKey(event){
    if(event.key == 'ArrowUp'){
        moveUp();
    }else if(event.key == 'ArrowLeft'){
        moveLeft();
    }else if(event.key == 'ArrowRight'){
        moveRight();
    }else if(event.key == 'ArrowDown'){
        moveDown();
    }
}
function moveUp() {
    if((player.y - elementSize)< 0){
        console.log('OUT')
    }else{
        player.y -= elementSize;
        starGame();
        
    }  
}
function moveLeft() {
    if((player.x - elementSize) < (elementSize )){
        console.log('OUT')
    }else{
        player.x -= elementSize;
        starGame();
        
    }  
}
function moveRight() {
    if(player.x  > canvaSize ){
        console.log('OUT')
    }else{
        player.x += elementSize;
        starGame();
        
    }  
}
function moveDown() {
    if((player.y ) > canvaSize-elementSize){
        console.log('OUT')
    }else{
        player.y += elementSize;
        starGame();
        
    }  
}

// temporizador
function mostrarTiempo() {
    time.textContent = Date.now()- timeStar;
}

//nuevo juego
nuevojuego.addEventListener('click', ()=>{
    location.reload()
})
