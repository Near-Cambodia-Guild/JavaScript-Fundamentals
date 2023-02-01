function isPalindrome(string) {
    let rev = [];

    for (let i = string.length - 1; i >= 0; i--) {
        rev = rev + string[i];
    }
    if (rev === string) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPalindrome;