var totaltime=15;
var score = 0;
var hitno ;
var prehit 
var rn;
newhits();

function makebubble(){
    var clutter = "";
    
    if(window.innerWidth < 520 ){
        var bubble_count = 40;
        var bubble_leftmargin = 2;
        var bubble_topmargin = 1.5;
    }

    else{
        var bubble_count = 140;
        var bubble_leftmargin = 1.5;
        var bubble_topmargin = 2;
    }

    for (var i = 0; i < bubble_count; i++) {
        rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble" style=" margin-left:${rn * bubble_leftmargin}px; margin-top: ${rn * bubble_topmargin}px;">${rn}</div>`;
    }

    var a = document.querySelector(".pbtm")
    a.innerHTML=clutter;

}

function timer(){
    var timer=setInterval(function(){
        if(totaltime >= 0){
            document.querySelector("#timerval").textContent=totaltime;
            totaltime--;
        }  
        else{
            clearInterval(timer);
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over</br>Score: ${score} 🎯</h1>`;
        }
    },1000)
}

function newhits(){
    prehit = hitno;
    hitno = Math.floor(Math.random()*10);
    document.querySelector("#newhits").textContent = hitno;
    // while loop for "Same hit_number contiguously not occur twice "
    // mean current hit=5 so next hit won't be 5 (it will be something else instead of 5)
    while(hitno == prehit){
    newhits();
    }
}

function score_increase(){
    score += 10 ;
    document.querySelector("#scoreval").textContent = score;
}

function calculate(){
    document.querySelector(".pbtm")
    .addEventListener("click",function (dets) {
    var clicked_num = Number(dets.target.textContent)
    if(clicked_num === hitno){
        score_increase();
        makebubble();
        newhits();
    }
})
}

calculate();
timer();
makebubble();