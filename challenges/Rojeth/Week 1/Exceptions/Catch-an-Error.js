function catchError(fn) {
    try {
        fn();
    }
    catch (err) {

    }
}

module.exports = catchError;