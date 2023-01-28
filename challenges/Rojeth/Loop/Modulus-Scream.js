function scream(n) {
    let scream = "";
    for (let i = 1; i <= n; i++) {
        const remainder = i % 2;
        const isEven = remainder === 0;
        if (isEven) {
            scream += "A";
        } else {
            scream +="a";
        }
    }
    return scream;
}

module.exports = scream;