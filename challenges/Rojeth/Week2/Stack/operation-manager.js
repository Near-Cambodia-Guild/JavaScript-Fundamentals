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
        let op = this.operation.pop();
        this.undos.push;
    }

    redo() {
    }

    redoAll() {
        }
    }


module.exports = OperationManager;