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
//Find the inventory of each non-premium products using function chaining
//Pass the products as parameter to the function
function findInventoryUsingFunctionChaining(products){

 const functionChain = products.filter(product => product.price <= 300).reduce((productCount, product) => {
        let productIndex = productCount.map( product=> product.productName).indexOf(product.productName);   //productcount is initially empty so -1
        //console.log(productIndex);
        if (productIndex >= 0) {
            productCount[productIndex].stock += 1;
        } else {
            productCount.push({
                productName: product.productName,
                stock: 1
            });
        }
        return productCount;
    }, []);   //stock=[]

  return functionChain;

}

console.log(findInventoryUsingFunctionChaining(products)); //console.log(functionchain.length)

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findInventoryUsingFunctionChaining
}





