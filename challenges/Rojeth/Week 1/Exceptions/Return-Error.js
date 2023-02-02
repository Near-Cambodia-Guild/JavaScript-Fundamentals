function catchError(fn) {
    try {
        fn();
    }
    catch (err) {
        return err;
    }
    return false;
}

module.exports = catchError;    