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

//filter premium products from the products passed as parameter using arrow functions
function filterProducts(products) {
    
    const premiumProducts=products.filter((products) => {
        if(products.price>300){
            return products;
        } 
    });

    return premiumProducts;

}

console.log(filterProducts(products));
 
  


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    filterProducts
}