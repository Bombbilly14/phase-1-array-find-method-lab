// code your solution 

function superbowlWin(games) {
    const wonGame=games.find((game)=>{
        return game.result === "W";
    
    });
    if (wonGame) {
    return wonGame.year;
    }

}