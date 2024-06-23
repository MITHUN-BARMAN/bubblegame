var timer = 60;
var score = 0 ;
var hitrn = 0;

function socreCard(){
     score += 10;
     document.querySelector("#scoreval").textContent = score;
}

function getHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

    for(var i = 1; i<=75; i++){
     var rn = Math.floor(Math.random()*10)
    clutter  +=  `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timeint = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timeval").textContent  = timer;
        }else{
            clearInterval(timeint);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over<h1>`;
        }
       
    },1000);
    
}

document.querySelector("#pbottom").addEventListener("click", function(dets){
   var clickNum =  Number(dets.target.textContent); //console(dets.target) likhle jokhon click korbo tokhon oi number er div dekhabe. textcontent add korle specific number dekhabe. tobe seta string. sei jonno number add korte hobe.
   if(clickNum === hitrn){
    socreCard();
    makeBubble();
    getHit();

   }
})

getHit();
runTimer();
makeBubble();
socreCard();

