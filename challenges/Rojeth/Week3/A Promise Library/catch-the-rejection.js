class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.then(value);
        };
        this.reject = (value) => {
            this.catch(value);
        };
        fn(this.resolve, this.reject);

    }
    catch(_catch) {
        this.catch = _catch;
    };
    then(_then) {
        this.then = _then;
    };
    
    
}


module.exports = Pact;