
const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];
//Find the discounted price for non-premium products using arrow functions
//Pass the products as parameter to the function
function calculateDiscountedPrice(products) {
    

        const discountProductPrice = products.filter(products => products.price <= 300).map(products => {
            return {
                ...products,                    //using spread operator
                price: products.price * 0.9
            };
        });
    return discountProductPrice;
}

    
console.log(calculateDiscountedPrice(products));


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateDiscountedPrice
}
