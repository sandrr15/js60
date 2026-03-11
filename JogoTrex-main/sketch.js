var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound

var gameOver, restart;


// inicio
function preload(){
    trex_running = loadAnimation('trex1.png', 'trex3.png', 'trex4.png');
    trex_collided = loadAnimation('trex_collided.png');
    
    groundImage = loadImage("ground2.png");
    cloudImage = loadImage('cloud.png');
    
    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle2.png");
    obstacle3 = loadImage("obstacle3.png");
    obstacle4 = loadImage("obstacle4.png");
    obstacle5 = loadImage("obstacle5.png");
    obstacle6 = loadImage("obstacle6.png");
    
    restartImg = loadImage('restart.png');
    gameOverImg = loadImage('gameOver.png');
    
    jumpSound = loadSound('jump.mp3');
    dieSound = loadSound('die.mp3');
    checkPointSound = loadSound('checkpoint.mp3');
    
    
    }
    
    
    function setup(){
    createCanvas(600,210);
    
    // let message = 'Teste'
    // console.log(message)
    
    trex = createSprite(200,150,400,20);
    trex.addAnimation("running", trex_running);
    trex.addAnimation("collided", trex_collided);
    
    trex.scale = 0.5
    
    ground = createSprite(200,180,400,20);
    ground.addImage("ground", groundImage);
    ground.x = ground.width/2;
    
    gameOver = createSprite(300,90)
    gameOver.addImage(gameOverImg)
    
    restart = createSprite(300,150)
    restart.addImage(restartImg)
    
    gameOver.scale = 0.5
    restart.scale = 0.5
    
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false
    
    //  criar grupos -  sprites tenham o mesmo comportamento
    obstaclesGroup = createGroup()
    cloudsGroup  = createGroup()
    score =  0
    
    }
    
    // loop
    function draw(){
    
    background('yellow')
    
    text('Pontuação: '+ score, 500,50)
    
    // estado do jogo
    if (gameState === PLAY){
       
        gameOver.visible = false
        restart.visible = false
    
        // chão infinito
    
        ground.velocityX = -(4+3*score/100)
        score = score  +  Math.random(getFrameRate()/60)
    
        if(score > 0 && score % 100 === 0){
    
         checkPointSound.play()
    
        }
       
        if (ground.x < 0){
    
          ground.x  = ground.width/2;
    
        }
         
        // trex pulando
       
         if(keyDown('space')){
          trex.velocityY = -12;
          jumpSound.play();
          
         }
    
         trex.velocityY = trex.velocityY + 8;
         
        // função para criar o grupo de nuvéns
         clouds()
    
        //  função para criar os obstaculos
        obstacles()

        if (obstaclesGroup.isTouching(trex)){
         
         jumpSound.play()   
         gameState = END
         dieSound.play()

        }
    
    }else if(gameState === END){

    gameOver.visible = true
    restart.visible = true
    trex.changeAnimation("collided", trex_collided)
    ground.velocityX = 0
    trex.velocityY = 0


    obstaclesGroup.setLifetimeEach(-1)
    cloudsGroup.setLifetimeEach(-1)

    obstaclesGroup.setVelocityXEach(0)
    cloudsGroup.setVelocityXEach(0)
    
    }

    trex.collide(invisibleGround);

    if(mousePressedOver(restart)){

      reset()

    }



    
    drawSprites()
           
    }    

    function reset(){

    gameState =  PLAY;
    restartImg.visible = false;
    gameOverImg.visible = false;
    trex.changeAnimation("running", trex_running);
    obstaclesGroup.destroyEach();
    cloudsGroup.destroyEach();
    score = 0

    }
    
    
    
    function obstacles(){
    
        if (frameCount % 60 === 0){
    
           let obstacle = createSprite(600,165,10,40)
           obstacle.velocityX = -(6 +  score / 100);
           
           let rand = Math.round(random(1,6))
           
           switch (rand){
    
           case 1: obstacle.addImage(obstacle1)
                 break
           case 2: obstacle.addImage(obstacle2)
                break
           case 3: obstacle.addImage(obstacle3)
                break
           case 4: obstacle.addImage(obstacle4)
                break
           case 5: obstacle.addImage(obstacle5)
                break
           case 6: obstacle.addImage(obstacle6)
                break
    
           default:
                break    
    
           }
           obstacle.scale = 0.5;
           obstacle.lifetime = 200;

           obstaclesGroup.add(obstacle);
    
    
    
           
           }   
    }
    
    
    
    
    
    function clouds(){
    
         if (frameCount % 60 === 0){
    
          let cloud = createSprite(600,200,40,10)
          cloud.y = Math.round(random(60,80 ))
          cloud.addImage(cloudImage)
          cloud.scale = 0.7
          cloud.velocityX = -4
    
          cloud.lifetime = 200
    
          cloud.depth = trex.depth
          trex.depth = trex.depth + 2
    
          cloudsGroup.add(cloud)
    
    
    
         }
    
    
    
    }
