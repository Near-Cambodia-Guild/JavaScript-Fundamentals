function playerHandScore(hand) {
    let totalScore = 0;
    const card = {'K': 4, 'Q': 3, 'J':2};
    for (let i = 0; i < hand.length; i++) {
        totalScore += card[hand[i]];
    }
    return totalScore;
}

