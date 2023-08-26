const chai = require('chai');
const expect = chai.expect;
const premiumProducts = require('../p1-premium-products/p1-submission');


describe('Filter Premium Product Objects', function () {
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

    const premiumProds = [
        { productName: 'Gucci Round Bucklet Belt', price: 400 },
        { productName: 'Gucci Round Bucklet Belt', price: 450 },
        { productName: 'Gucci Round Bucklet Belt', price: 420 },
        { productName: 'Smiley T-Shirt', price: 350 }
    ];

    it('should have function filterProducts() to filter products', function () {
        expect(typeof premiumProducts.filterProducts).to.equal('function');
    });


    it('should have function that returns premium products', function () {
        expect(premiumProducts.filterProducts(products)).to.deep.equal(premiumProds);
    })

});
