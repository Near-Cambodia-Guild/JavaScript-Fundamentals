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

    then(_then) {
        if (this.status === STATUS.PENDING) {
            return new Pact((resolve, reject) => {
                this.thenFn.push ((val) => {
                    resolve(_then(val));
                });
            })
        } else if (this.status === STATUS.RESOLVED) {
            _then(this.resolvedValue);
        }
    };

    
    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFn.push (_catch);
        } else if (this.status === STATUS.REJECTED) {
            _catch(this.rejectedValue);
        }
    };

    
}

module.exports = Pact;