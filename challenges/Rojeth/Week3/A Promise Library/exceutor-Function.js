class Pact {
    constructor(fn) {
        this.resolve = () => {

        };
        this.reject = () => {

        };
        fn(this.resolve, this.reject);

    }
    catch() {

    };
    then() {

    };
    
    
}

module.exports = Pact;