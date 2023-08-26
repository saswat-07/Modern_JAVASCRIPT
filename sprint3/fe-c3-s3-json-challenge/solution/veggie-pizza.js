// Task 1 - Create JSON data

const deliveries =  `[
  {
    "deliveredBy": "Charles Garcia",
    "orderNumber": 234324,
    "customerName": "Michael Williams",
    "phoneNumbers": ["+12052349876", "+12052349876"],
    "customerAddress": {
      "streetNo": "501m",
      "streetName": "Hopton Street",
      "city": "Orlando",
      "state": "Florida"
    },
    "tipAmount": 10,
    "customerRating": 4.5,
    "outletRating": 3
  },
  {
    "deliveredBy": "Andrew Clark",
    "orderNumber": 897655,
    "customerName": "George Wilson",
    "phoneNumbers": ["+12652349712", "+12752344376"],
    "customerAddress": {
      "streetNo": "281d",
      "streetName": "Sea View",
      "city": "South Austin",
      "state": "Texas"
    },
    "tipAmount": 5,
    "customerRating": 4,
    "outletRating": 4.5
  },
  {
    "deliveredBy": "Andrew Clark",
    "orderNumber": 1560986,
    "customerName": "Ella Rodriguez",
    "phoneNumbers": ["+12902346589", "+12902300610"],
    "customerAddress": {
      "streetNo": "892g",
      "streetName": "Parkside Park",
      "city": "Louiseville",
      "state": "Kentucky"
    },
    "tipAmount": 0,
    "customerRating": 3,
    "outletRating": 4
  },
  {
      "deliveredBy": "Nicholas Taylor",
      "orderNumber": 2224317,
      "customerName": "Olivia Davis",
      "phoneNumbers": ["+12452342200", "+12452277881"],
      "customerAddress": {
        "streetNo": "108a",
        "streetName": "Buller Hawthorns",
        "city": "Trenton",
        "state": "New Jersey"
      },
      "tipAmount": 5,
      "customerRating": 5,
      "outletRating": 4
  },{
      "deliveredBy": "Charles Garcia",
    "orderNumber": 2887648,
    "customerName": "Lucy Thomas",
    "phoneNumbers": ["+13152119733", "+13175264437"],
    "customerAddress": {
      "streetNo": "557a",
      "streetName": "Cygnet Court",
      "city": "Dover",
      "state": "Delaware"
    },
    "tipAmount": 20,
    "customerRating": 1,
    "outletRating": 2
  },{
    "deliveredBy": "Charles Garcia",
    "orderNumber": 234541,
    "customerName": "Richard Mia",
    "phoneNumbers": ["+12052333876", "+12052343176"],
    "customerAddress": {
      "streetNo": "501m",
      "streetName": "Hopton Street",
      "city": "Orlando",
      "state": "Florida"
    },
    "tipAmount": 10,
    "customerRating": 4.5,
    "outletRating": 3
  },{
      "deliveredBy": "Andrew Clark",
    "orderNumber": 897690,
    "customerName": "Eric Claire",
    "phoneNumbers": ["+12652387712", "+12752322396"],
    "customerAddress": {
      "streetNo": "292f",
      "streetName": "North View",
      "city": "South Austin",
      "state": "Texas"
    },
    "tipAmount": 10,
    "customerRating": 4,
    "outletRating": 4.5
  }
  ]`;

// Task 2 - Convert JSON to JavaScript Object

const deliveryObject = JSON.parse(deliveries);
//console.log(deliveryObject);

// Task 3 - No. of orders delivered by a delivery person in a particular city

function countDeliveries(deliveryObject, deliveryPerson, city) {
  return deliveryObject.filter(data => data.deliveredBy === deliveryPerson && data.customerAddress.city === city)
    .reduce((count, currentDelivery) => count + 1, 0);
}

// Task 4 - Total tip amount earned by a delivery person

function calculateTotalTipAmount(deliveryObject, deliveryPerson) {
  return deliveryObject.filter(data => data.deliveredBy === deliveryPerson)
    .reduce((totalTipAmount, currentDelivery) => totalTipAmount + currentDelivery.tipAmount, 0);  //currentDelivery parameter is same as deliveryObject
}

// Task 5 - Delivery wise customer and outlet ratings for a delivery person

function getDeliveryWiseRatings(deliveryObject, deliveryPerson) {
  return deliveryObject.filter(data => data.deliveredBy === deliveryPerson) //data parameter is same as deliveryObject
    .map(data => ({
      orderNumber: data.orderNumber,
      customerName: data.customerName,   
      customerRating: data.customerRating,
      outletRating: data.outletRating
    }));
}


// Task 6 - Based on Customer and outlet Rating, calculate average rating for each delivery person. 
//          Modify the JSON and include the average rating 

function calculateAverageRating(deliveryObject) {
  const deliveryData= deliveryObject.map(data => ({
    ...data,
    averageRating: (data.customerRating + data.outletRating) / 2   
  }));
  const jsonData=JSON.stringify(deliveryData);
  return jsonData;
}


const numberOfDeliveries = countDeliveries(deliveryObject,"Charles Garcia", "Orlando");
console.log(numberOfDeliveries); // 2

const totalTipAmount = calculateTotalTipAmount(deliveryObject,"Andrew Clark");
console.log(totalTipAmount); // 15

const ratings = getDeliveryWiseRatings(deliveryObject,"Nicholas Taylor");
console.log(ratings);
/*
[
  {
    orderNumber: 2224317,
    customerName: 'Olivia Davis',
    customerRating: 5,
    outletRating: 4
  }
]
*/
const result=calculateAverageRating(deliveryObject);
//console.log(result[0].averageRating); // 3.75
console.log(result);

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    countDeliveries,
    calculateTotalTipAmount,
    getDeliveryWiseRatings,
    calculateAverageRating
}


  
  
