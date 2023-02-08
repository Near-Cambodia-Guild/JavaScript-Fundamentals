function timer() {
    return new Promise(function timer(resolve) {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
 }
 
 module.exports = timer;