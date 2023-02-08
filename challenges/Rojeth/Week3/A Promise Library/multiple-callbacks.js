class Pact {
    constructor(fn) {
        this.thenFn = [];
        this.catchFn = [];
        this.resolve = (value) => {
            this.thenFn.forEach((fn) => fn(value));
        };
        this.reject = (value) => {
            this.catchFn.forEach((fn) => fn(value));
        };
        fn(this.resolve, this.reject);

    }
    catch(_catch) {
        this.catchFn.push (_catch);
    };
    then(_then) {
        this.thenFn.push (_then);
    };
    
    
}


module.exports = Pact;