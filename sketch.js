var player1,galien
var player2,yalien
function preload(){
  player1run = loadAnimation("Images/sprite_110.png", "Images/sprite_111.png")
  player1stand = loadAnimation("Images/sprite_110.png")
  player1jump = loadAnimation("Images/sprite_113.png")
  player2run = loadAnimation("Images/sprite_p20.png", "Images/sprite_p21.png")
  player2stand = loadAnimation("Images/sprite_p20.png")
  player2jump = loadAnimation("Images/sprite_p23.png")
  bg = loadImage("Images/bg.jpg")
  spikes = loadImage("Images/spike0.png")
  minion = loadAnimation("Images/sprite_enemy0.png","Images/sprite_enemy1.png","Images/sprite_enemy2.png","Images/sprite_enemy3.png","Images/sprite_enemy4.png","Images/sprite_enemy5.png","Images/sprite_enemy6.png",)

}
function setup() {
createCanvas(windowWidth,windowHeight)
player1 = createSprite(100, 590)
player1.addAnimation("p1", player1stand)
player1.addAnimation("p1a", player1run)
player1.addAnimation("p1b", player1jump)
player2 = createSprite(120, 590)
player2.addAnimation("p2", player2stand)
player2.addAnimation("p2a", player2run)
player2.addAnimation("p2b", player2jump)

invisG = createSprite(600,windowHeight-120, windowWidth+5000,6)

minion1 = createSprite(400, 550)
minion1.addAnimation("m1", minion)
minion1.scale = 0.5

spike = createSprite(600, 600)
spike.scale = 0.2
spike.addImage("spikes",spikes)

}

function draw() {
background(0)
image(bg,0,0,windowWidth*2,windowHeight)
playerMovement();
drawSprites();
invisG.visible = false
player1.collide(invisG)
player2.collide(invisG)
if(player1.x > windowWidth/2 && player1.x< windowWidth*2-1000){
camera.x = player1.x
}



}

function playerMovement(){
  if(keyDown("RIGHT")){
    player1.velocityX = 3
    player1.changeAnimation("p1a", player1run)
  }
  if(keyWentUp("RIGHT")){
    player1.velocityX = 0
    player1.changeAnimation("p1", player1stand)
  }

  if(keyDown("LEFT")){
    player1.velocityX = -3
    player1.changeAnimation("p1a", player1run)
  }
  if(keyWentUp("LEFT")){
    player1.velocityX = 0
    player1.changeAnimation("p1", player1stand)
  }


  if(keyDown("D")){
    player2.velocityX = 5
    player2.changeAnimation("p2a", player2run)
  }
  if(keyWentUp("D")){
    player2.velocityX = 0
    player2.changeAnimation("p2", player2stand)
  }

  if(keyDown("A")){
    player2.velocityX = -4
    player2.changeAnimation("p2a", player2run)
  }
  if(keyWentUp("A")){
    player2.velocityX = 0
    player2.changeAnimation("p2", player2stand)
  }

  if(keyDown("UP")){
    player1.velocityY = -10
    player1.changeAnimation("p1b", player1jump)
  }

  if(keyDown("W")){
    player2.velocityY = -5
    player2.changeAnimation("p2b", player2jump)
  }

  player1.velocityY = player1.velocityY+0.67
  player2.velocityY = player2.velocityY+0.67
 /* if(keyWentUp("UP")){
    player1.velocityY = 2
  }*/

}