function startGame(){
    gameplay=confirm("Do you want to play game?");
    user_game=user_input(gameplay);
    }

function user_input(gameplay){
if(gameplay){
    user=prompt("Enter rock paper scissor?");
    let user_choice=user.toLowerCase();
    RPS(user_choice);
}
else{
    alert("OK, May be next time...");
}
}

function RPS(user_choice){
   
  
    if(user_choice==="rock"){
        userNum=1;
        comGame();
    }
    else if(user_choice==="paper"){
        userNum=2;
        comGame();
    }
    else if(user_choice==="scissor"){
        userNum=3;
        comGame();
    }
    else{
        another=confirm("You have entered wrong!!!");
        another?startGame():alert("Thanks for playing!!!");
    }
}

function comGame(){
    computer=Math.floor(Math.random()*3);
    switch(computer){
        case 0:{
            comNum=1;
            realGame(userNum,comNum);
            break;
        }
        case 1:{
            comNum=2;
            realGame(userNum,comNum);
            break;
        }
        case 2:{
            comNum=3;
            realGame(userNum,comNum);
            break;
        }
        default:
            break;
    }
}
function realGame(userNum,comNum){
        gameWin=userNum===comNum?"Tie":
                userNum===1 && comNum === 2?"Computer Wins\nUSER:ROCK\nCOMPUTER:PAPER":
                userNum===1 && comNum === 3?"Player Wins\nUSER:ROCK\nCOMPUTER:SCISSOR":
                userNum===2 && comNum === 1?"Player Wins\nUSER:PAPER\nCOMPUTER:ROCK":
                userNum===2 && comNum === 3?"Computer Wins\nUSER:PAPER\nCOMPUTER:SCISSOR":
                userNum===3 && comNum === 1?"Computer Wins\nUSER:SCISSOR\nCOMPUTER:ROCK":
                                            "Player Wins\nUSER:SCISSOR\nCOMPUTER:PAPER";
display(gameWin);
}

function display(gameWin){
    alert(gameWin);
    startGame();
}
let gameplay;  
let user_game;
let user;
let userNum;
let another;
let computer;
let comNum;
let gameWin;
startGame();



