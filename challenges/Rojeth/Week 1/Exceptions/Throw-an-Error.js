function throwError() {
    if (10 > 0) {
        throw new Error("One Is bigger than Zero");
    }
}

module.exports = throwError;