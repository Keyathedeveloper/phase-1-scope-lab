 customerName = 'bob';
console.log(customerName);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    console.log(bestCustomer);
}

function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
    console.log(bestCustomer);
}
overwriteBestCustomer();

function changeLeastFavoriteCustomer(newLeastFavorite) {
    if (!newLeastFavorite) {
        throw new Error('Assignment to constant variable.');
    }
    leastFavoriteCustomer = newLeastFavorite;
    console.log(leastFavoriteCustomer);
}
changeLeastFavoriteCustomer();
