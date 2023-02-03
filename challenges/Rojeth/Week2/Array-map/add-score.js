function addScore(players) {
    return players.map((x) => {
        x.score += 10;
        return x;
    });
}

module.exports = addScore;