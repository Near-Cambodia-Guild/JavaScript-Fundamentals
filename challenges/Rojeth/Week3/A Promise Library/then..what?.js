class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.then(value);
        };
        this.reject = () => {

        };
        fn(this.resolve, this.reject);

    }
    catch() {

    };
    then(_then) {
        this.then = _then;
    };
    
    
}


module.exports = Pact;