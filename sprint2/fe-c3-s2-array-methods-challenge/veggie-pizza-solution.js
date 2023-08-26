const menu = [
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
//function to list menu items by category
function listByCategory(menu, categoryName) {
        return menu
            .filter(menu => menu.category === categoryName)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(menu => ({category: menu.category, name: menu.name, price: menu.price}));
    }
    
    //console.log(listByCategory(menu, 'Beverages'));
    console.log(listByCategory(menu, 'Starters'));
    //console.log(listByCategory(menu, 'Main Meal'));
    console.log("============================================================================")

//funtion to calculate the total of each item ordered
function calculateOrderAmountForEachItem(menu,order) {
        return order.items.map((items) => ({
            name: items.name,
            price: items.price,
            quantity: items.quantity,
            //type-1
            category:menu.filter((menu) => menu.name === items.name)[0].category,
            //type-2
            //category: menu.find((menu) => menu.name === items.name).category,
            amount: items.price * items.quantity
        }));
    }
    const orderAmount=calculateOrderAmountForEachItem(menu,order);
    console.log(orderAmount)
    //console.log(calculateOrderAmountForEachItem(menu,order));
    console.log("=============================================================================")
    

//function to calculate the main meal count to avail freebie
function calculateMainMealCount(menu,order) {

        const mainMealCount = order.items
            .filter(items => {
                //const menuItem = menu.find(menuItem => menuItem.name === items.name);       
            
                //return menuItem && menuItem.category === 'Main Meal';  
                const menuItem = menu.filter(menuItem => menuItem.name === items.name); 
                 return menuItem[0].category === 'Main Meal';
                
            })
            .reduce((count, items) => count + items.quantity, 0);

        return mainMealCount; // return mainMealCount >= 2 ? 1 : 0;  //1:0 this is no. of free drinks
    }
    
    console.log(calculateMainMealCount(menu,order));
    console.log("==============================================================================")

//function to calculate the total bill amount 
function calculateTotalAmount(menu,order) {

        return order.items.reduce((count, items) => {
            const menuItem = menu.find(menuItem => menuItem.name === items.name);
            return count + (menuItem ? menuItem.price * items.quantity : 0);
        }, 0);

}
    
    console.log(calculateTotalAmount(menu,order));
    console.log("================================================================================")


//funtion to calculate the final bill amount after applying discount
function calculateFinalAmount(menu,order,discount) {
        
        const totalBillAmount = order.items.reduce((sum, items) => {
          const menuItem = menu.find(menuItem => menuItem.name === items.name);
          return sum + (menuItem ? menuItem.price * items.quantity : 0);
      }, 0);
      const discountAmount = totalBillAmount >= 50 ? totalBillAmount * discount : 0;
        const finalBillAmount = totalBillAmount - discountAmount;
        return Math.round(finalBillAmount * 100) / 100;
       
}
    
    console.log(calculateFinalAmount(menu,order,discount));
    console.log("===================================================================================")

//function to return a message if the order is eligible for free drink or null otherwise
function isEligibleForFreeDrink(menu,order) {   
        const mainMealCount = order.items
            .filter(items => {
                const menuItem = menu.find(menuItem => menuItem.name === items.name);
                return menuItem && menuItem.category === 'Main Meal';
            })
            .reduce((count, items) => count + items.quantity, 0);
        if (mainMealCount >= 2) {
            return 'Hurray!!The order is eligible for a free soft drink. Please do collect it!';
        } else {
            return null;
        }
    }

    console.log(isEligibleForFreeDrink(menu,order));
    


module.exports = {
    listByCategory,
    calculateOrderAmountForEachItem,
    calculateMainMealCount,
    calculateTotalAmount,
    calculateFinalAmount,
    isEligibleForFreeDrink
}




