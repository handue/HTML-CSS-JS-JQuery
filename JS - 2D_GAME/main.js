var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,100,100);
// ? 이것보단 아래 방법 사용

var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

// var img1 = new Image();
// img1.src = '';

dino.draw();

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // ctx.drawImage(img1, this.x, this.y);
    }
}

// var cactus = new Cactus();
// cactus.draw();

var timer =0;
var cactusList = [];
var jumpTimer =0;
var animate;
function animateFrame(){
    animate = requestAnimationFrame(animateFrame);
    timer++;
    // 프레임 한 번 실행당 timer 1증가 
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // * 이렇게 canvas ctx를 전부 다 지워주고 재생성해야 기존 박스가 사라지고 움직이는거로 보임. 사실 대상자는 그대로 있고 장애물들이 오도록 하는게 더 쉬울듯?
    // dino.x += 1;
    if (timer % 120 ===0){
        //120 프레임당 한 번씩 실행하겠지?
        var cactus = new Cactus();   
        cactusList.push(cactus);
    }
    cactusList.forEach(function(obstacle, i , o){
        if(obstacle.x <=0){
            o.splice(i,1);
            // 위가 지우는 코드
        }
        obstacle.x -= 3;

        crash(dino,obstacle)

        obstacle.draw();
    })

    if(spaceTrigger==true){
        dino.y -= 5;
        jumpTimer++;
        // 이것도 프레임으로 계산. 100프레임이면 멈추도록 하는거
    }else{
        if(dino.y<200){
            dino.y += 5;
            //while 해봤거든? 근데 while은 오류가 너무 쉽게 나는거 같아서 어지간하면 안하고 싶음.
        }
    }
    if(jumpTimer>23){
        spaceTrigger = false;
        jumpTimer =0;
    }
    
    dino.draw();
    // cactus.draw();
    
}

// ! 위 함수 쓰면 animateFrame에 있는거 1초에 60번씩 실행해주는거임(근데 모니터 FPS 성능에 따라 다름). 애니메이션화 해준다고 생각하면 될듯

animateFrame();

//충돌 이벤트

function crash(dino,cactus){
    var xaxis = cactus.x -(dino.x + dino.width);
    var yaxis = cactus.y -(dino.y + dino.height);
    if(xaxis<0 && yaxis<0){
        // ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animate);
    }
}

var spaceTrigger = false; 
document.addEventListener('keydown',function(e){
    if(e.code ==='Space'){
        spaceTrigger = true;
    }
})