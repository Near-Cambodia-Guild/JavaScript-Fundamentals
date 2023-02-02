const Hero = require('./Hero');

class Warrior extends Hero{
    constructor() {
        super();
        this.rage = 0;
    }
    takeDamage(x) {
        super.takeDamage(x);
        this.rage +=1;
    }
}

module.exports = Warrior;