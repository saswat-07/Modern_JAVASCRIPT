
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
//Find the inventory of each product type using arrow functions
//Pass the products as parameter to the function

function findProductInventory(products){
        const productInventory = products.reduce((productCount, products) => {
            const existingProduct = productCount.find(item => item.productName === products.productName);
            //console.log(existingProduct);
            if (existingProduct) {
                existingProduct.stock +=1;
            } else {
                productCount.push({
                    productName: products.productName,
                    stock: 1
                });
            }
            return productCount;
        }, []);

    return productInventory;
}
console.log(findProductInventory(products));


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findProductInventory
}