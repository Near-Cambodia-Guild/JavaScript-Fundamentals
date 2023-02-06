class Dialog {
    constructor() {
        this.callbackFunction = [];
    }
    onClose(callbackFunction) {
        this.callbackFunction.push(callbackFunction); // store the callback
    }

    close() {
        this.callbackFunction.forEach((callBackFn) => {
            callBackFn();
        }) // invoke the callback
    }
}

module.exports = Dialog;