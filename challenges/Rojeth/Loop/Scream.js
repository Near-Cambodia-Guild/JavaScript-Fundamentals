function scream(n) {
    let scream = "";
    for(let i = 1; i <= n; i++) {
        scream += "a";
    }
    return scream;
}

module.exports = scream;