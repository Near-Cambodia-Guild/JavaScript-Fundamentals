function isEnough(cost, money) {
    if (cost === money) {
        return true;
    } else if (cost < money) {
        return false;
    } else {
        return true
    }
}