const chai = require('chai');
const expect = chai.expect;
const pizza = require('../veggie-pizza-solution');

let menu = [
    {
        'category': 'Beverages',
        'name': 'Soft Drink',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Beverages',
        'name': 'Milk Shake',
        'price': 2.0
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Soft Drink',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};
const discount = 0.05;
describe('Filter menu items by category', function () {
    it('should have function listByCategory() to filter menu items by category', function () {
        expect(typeof pizza.listByCategory).to.equal('function');
    });

    it('listByCategory() function should return only starters when starters are passed', function () {
        let starters = [
            { category: 'Starters', name: 'Garlic Bread', price: 2.8 },
            { category: 'Starters', name: 'Greek Wedge Salad', price: 4.5 },
            { category: 'Starters', name: 'Mozzarella Sticks', price: 5.5 }
        ]
        expect(pizza.listByCategory(menu, 'Starters')).to.deep.equal(starters);
    })
    it('listByCategory() function should return only beverages when beverages are passed', function () {
        let beverages =
            [
                { category: 'Beverages', name: 'Iced Tea', price: 1.25 },
                { category: 'Beverages', name: 'Milk Shake', price: 2 },
                { category: 'Beverages', name: 'Soft Drink', price: 1.5 }
            ];
        expect(pizza.listByCategory(menu, 'Beverages')).to.deep.equal(beverages);
    })
    it('listByCategory() function should return only MainMeal when MainMeal are passed', function () {
        let mainMeal =
            [
                {
                    category: 'Main Meal',
                    name: 'Large Size Vegan Pepperoni Pizza',
                    price: 14.5
                },
                {
                    category: 'Main Meal',
                    name: 'Medium Size Margherita Pizza',
                    price: 11
                },
                { category: 'Main Meal', name: 'Veg Family Meal', price: 13.25 }
            ];
        expect(pizza.listByCategory(menu, 'Main Meal')).to.deep.equal(mainMeal);
    })
});


describe('Should calculate the total of each item ordered', function () {
    it('should have function calculateOrderAmountForEachItem() to calculate the total of each item ordered', function () {
        expect(typeof pizza.calculateOrderAmountForEachItem).to.equal('function');
    });
    it('Should return an array of objects that contains total amount for each item', function () {
        let orderAmountForEachItem = [
            {
                name: 'Mozzarella Sticks',
                quantity: 2,
                price: 5.5,
                category: 'Starters',
                amount: 11
            },
            {
                name: 'Garlic Bread',
                quantity: 2,
                price: 2.8,
                category: 'Starters',
                amount: 5.6
            },
            {
                name: 'Soft Drink',
                quantity: 3,
                price: 1.5,
                category: 'Beverages',
                amount: 4.5
            },
            {
                name: 'Medium Size Margherita Pizza',
                quantity: 2,
                price: 11,
                category: 'Main Meal',
                amount: 22
            },
            {
                name: 'Iced Tea',
                quantity: 1,
                price: 1.25,
                category: 'Beverages',
                amount: 1.25
            },
            {
                name: 'Veg Family Meal',
                quantity: 2,
                price: 13.25,
                category: 'Main Meal',
                amount: 26.5
            }
        ];
        expect(pizza.calculateOrderAmountForEachItem(menu, order)).to.deep.equal(orderAmountForEachItem);
    })
})

describe('Should calculate the main meal count', function () {
    it('should have function calculateMainMealCount() to calculate the main meal count', function () {
        expect(typeof pizza.calculateMainMealCount).to.equal('function');
    });
    it('should return the correct count of main meal based on the given order object', function () {
        expect(pizza.calculateMainMealCount(menu, order)).to.deep.equal(4);
    });
});

describe('Should calculate the totla bill amount', function () {
    it('should have function calculateTotalAmount() to calculate the final bill amount', function () {
        expect(typeof pizza.calculateTotalAmount).to.equal('function');
    });
    it('should return the total amount', function () {
        expect(pizza.calculateTotalAmount(menu, order)).to.deep.equal(70.85);
    });
});

describe('Should calculate the final bill amount', function () {
    it('should have function calculateFinalAmount() to calculate the final bill amount', function () {
        expect(typeof pizza.calculateFinalAmount).to.equal('function');
    });
    it('should return the final amount after discount', function () {
        expect(pizza.calculateFinalAmount(menu, order, discount)).to.equal(67.31);
    });
});

describe('Should return a message if the order is eligible for free drink', function () {
    it('should have function isEligibleForFreeDrink() which returns a message if the order is eligible for free drink', function () {
        expect(typeof pizza.isEligibleForFreeDrink).to.equal('function');
    });
    it('should return the final amount after discount', function () {
        expect(pizza.isEligibleForFreeDrink(menu, order)).to.equal('Hurray!!The order is eligible for a free soft drink. Please do collect it!');
    });
});