function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription || freeTrial) {
        return true;
    } else {
        return false;
    }
}
console.log(canAccess);
