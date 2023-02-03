function addScore(players) {

    return players.map((x, i) => {
        if (i < 3) 
        x.score += 10;
        return x;
        
    });
}
module.exports = addScore;