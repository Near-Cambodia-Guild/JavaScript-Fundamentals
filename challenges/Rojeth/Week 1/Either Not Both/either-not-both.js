function eitherNotBoth(num) {
    if (num % 3 == 0 && num % 5 == 0){
        return false;
    } else {
        return true;
    }
}

module.exports = eitherNotBoth;