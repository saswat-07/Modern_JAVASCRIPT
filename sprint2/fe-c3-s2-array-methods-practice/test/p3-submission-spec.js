const chai = require('chai');
const expect = chai.expect;
const productInventory = require('../p3-product-stock/p3-submission');

describe('Should calculate the inventory of each product', function () {
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
    const prodInventory = [
        { productName: 'Gucci Round Bucklet Belt', stock: 4 },
        { productName: 'Smiley T-Shirt', stock: 2 },
        { productName: 'Shinie Nail Paint', stock: 2 },
        { productName: 'Esbeda Wallet', stock: 1 }
    ]
    it('should have function findProductInventory() to calculate inventory of each product', function () {
        expect(typeof productInventory.findProductInventory).to.equal('function');
    });

    it('should have function that returns inventory of each product', function () {
        expect(productInventory.findProductInventory(products)).to.deep.equal(prodInventory);
    })

});