/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
 function runCallback(callbackFunction) {
    setTimeout(function Callback() {
        callbackFunction();
    }, 1000);
}

module.exports = runCallback;