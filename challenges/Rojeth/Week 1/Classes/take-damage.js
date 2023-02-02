class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(x) {
        if (x) {
            this.health = this.health - x;
        }
    }
}

module.exports = Hero;