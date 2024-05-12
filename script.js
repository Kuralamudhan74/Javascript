

let gameplay = confirm("Can we play a game?");
console.log(gameplay);

if(gameplay===true){
    let user = prompt("Enter rock(R) or paper(P) or sicissor(S)");
    if(user==='R'||user==='P'||user==='S')
    {
        
    }
    // switch(user){
    //     case "R":
    //         user=1;
    //         break;
    //     case "P":
    //         user=2;
    //         break;
    //     case "S":
    //         user=3;
    //         break;
    //     default:
    //         alert("You have entered wrong input");
    //         break;
    // }
    let com = Math.floor(Math.random()*3);
    switch(com){
        case 0:
            com=1;
            break;
        case 1:
            com=2;
            break;
        case 2:
            com=3;
            break;
        default:
            alert("Some technical error");
            break;
    }
    if(user===com){
        alert("Tie!!!");
        
    }
    else if(user===1 && com===2){
        alert("Computer Wins");
    }
    else if(user===1 && com===3){
        alert("User Wins");
    }
    else if(user === 2 && com === 1 ){
        alert("User Wins");
    }
    else if(user === 2 && com === 3){
        alert("Computer Wins");
    }
    else if(user === 3 && com === 1){
        alert("Computer Wins");
    }
    else{
        alert("User Wins");
    }
    console.log(user);
    console.log(com);
    let playagain=confirm("Play again?");
    playagain?location.reload():alert("OK, thanks for playing");

}
else{
    alert("May be later");
}