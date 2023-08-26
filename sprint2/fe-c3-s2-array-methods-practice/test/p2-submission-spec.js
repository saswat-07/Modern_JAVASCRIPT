const chai = require('chai');
const expect = chai.expect;
const discountProductPrice = require('../p2-discounted-price/p2-submission');

describe('Should calculate the discounted product price', function () {
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

    const discountedProducts = [
        { productName: 'Gucci Round Bucklet Belt', price: 270 },
        { productName: 'Smiley T-Shirt', price: 135 },
        { productName: 'Shinie Nail Paint', price: 90 },
        { productName: 'Shinie Nail Paint', price: 225 },
        { productName: 'Esbeda Wallet', price: 225 }
    ]

    it('should have function calculateDiscountedPrice() to calculate discount', function () {
        expect(typeof discountProductPrice.calculateDiscountedPrice).to.equal('function');
    });

    it('should have function that returns premium products', function () {
        expect(discountProductPrice.calculateDiscountedPrice(products)).to.deep.equal(discountedProducts);
    })

})