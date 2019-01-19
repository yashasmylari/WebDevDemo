var p1button=document.querySelector("#p1");
var p2button=document.getElementById("p2");
var p2score=0;
var p1score=0;
var gameover=false;
var resetButton=document.querySelector("reset");
var numInput= document.querySelector("input");
var winnerscore=5;
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var winningScoreDisplay=document.querySelector("p span");

p1button.addEventListener("click",function(){
    if (!gameover){
        p1score++;
        if(p1score===winnerscore){
            gameover=true;
            p1display.classList.add("winner");
        }
        p1display.textContent=p1score;
    }
});
p2button.addEventListener("click",function(){
    if (!gameover){
        p2score++;
        if(p2score===winnerscore){
            gameover=true;
            p2display.classList.add("winner");
        }
        
        p2display.textContent=p2score;
    }
});

function reset(){
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover=false;
}
resetButton.addEventListener("click",function(){
    reset();
});
numInput.addEventListener("change",function(){
    winningScoreDisplay.textContent= this.value;
    winnerscore=Number(this.value);
    reset();
})