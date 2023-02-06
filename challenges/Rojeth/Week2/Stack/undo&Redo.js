const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();

    }

    addOperation(operation) {
        this.operations.push(operation)
    }

    undo() {
        let op = this.operations.pop();
        this.undos.push(op);
    }

    redo() {
        let op = this.undos.pop();
        this.addOperation(op)
    }

    redoAll() {
    }
}

module.exports = OperationManager;