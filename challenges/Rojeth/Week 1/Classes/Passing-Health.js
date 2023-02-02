const Hero = require('./Hero');

class Warrior extends Hero{
    constructor(health) {
        super();
        this.health = health;
    }
    takeDamage(x) {
        super.takeDamage(x);
        this.rage +=1;
    }
}

module.exports = Warrior;