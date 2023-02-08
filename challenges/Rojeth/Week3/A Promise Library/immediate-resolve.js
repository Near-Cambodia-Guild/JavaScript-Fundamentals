const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2,
}


class Pact {
    constructor(fn) {
        this.thenFn = [];
        this.catchFn = [];
        this.status = STATUS.PENDING;
        this.resolve = (value) => {
            this.resolvedValue = value;
            this.status = STATUS.RESOLVED;
            this.thenFn.forEach((fn) => fn(value));
        };
        this.reject = (value) => {
            this.rejectedValue = value;
            this.status = STATUS.REJECTED;
            this.catchFn.forEach((fn) => fn(value));
        };
        fn(this.resolve, this.reject);

    }
    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFn.push (_catch);
        } else if (this.status === STATUS.REJECTED) {
            _catch(this.rejectedValue);
        }
    };


    then(_then) {
        if (this.status === STATUS.PENDING) {
            this.thenFn.push (_then);
        } else if (this.status === STATUS.RESOLVED) {
            _then(this.resolvedValue);
        }
    };
    
    
}


module.exports = Pact;