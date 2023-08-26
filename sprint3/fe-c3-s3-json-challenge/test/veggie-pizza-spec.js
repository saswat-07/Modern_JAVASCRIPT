const expect = require("chai").expect;
const veggiePizza = require("../solution/veggie-pizza");

describe("Veggie Pizza Solution", function () {
    it("should have function `countDeliveries`", function () {
        expect(typeof veggiePizza.countDeliveries).to.be.equal("function");
    });
    it("should have function `calculateTotalTipAmount`", function () {
        expect(typeof veggiePizza.calculateTotalTipAmount).to.be.equal("function");
    });
    it("should have function `getDeliveryWiseRatings`", function () {
        expect(typeof veggiePizza.getDeliveryWiseRatings).to.be.equal("function");
    });
    it("should have function `calculateAverageRating`", function () {
        expect(typeof veggiePizza.calculateAverageRating).to.be.equal("function");
    });
});

const deliveryData = [
    {
        "deliveredBy": "Emma Smith",
        "orderNumber": 434324,
        "customerName": "Camila Garcia",
        "phoneNumbers": "+12052345876",
        "customerAddress": {
            "streetNo": "252a",
            "streetName": "Hale Hall",
            "city": "Huntsville",
            "state": "Alabama"
        },
        "tipAmount": 10,
        "customerRating": 4.5,
        "outletRating": 3
    },
    {
        "deliveredBy": "Emma Smith",
        "orderNumber": 665324,
        "customerName": "Ella Rodriguez",
        "phoneNumbers": "+12052345310",
        "customerAddress": {
            "streetNo": "253a",
            "streetName": "Cooper Hill",
            "city": "Huntsville",
            "state": "Alabama"
        },
        "tipAmount": 15,
        "customerRating": 5,
        "outletRating": 4
    },
    {
        "deliveredBy": "Richard Jones",
        "orderNumber": 458899,
        "customerName": "Gary Thomas",
        "phoneNumbers": "+12652349712",
        "customerAddress": {
            "streetNo": "112c",
            "streetName": "Baxter Parkway",
            "city": "San Jose",
            "state": "California"
        },
        "tipAmount": 5,
        "customerRating": 3,
        "outletRating": 3
    },
    {
        "deliveredBy": "Richard Jones",
        "orderNumber": 620899,
        "customerName": "Violet Clark",
        "phoneNumbers": "+13152119733",
        "customerAddress": {
            "streetNo": "112d",
            "streetName": "Ridgeway Paddock",
            "city": "San Jose",
            "state": "California"
        },
        "tipAmount": 5,
        "customerRating": 3.5,
        "outletRating": 4
    },
    {
        "deliveredBy": "Richard Jones",
        "orderNumber": 886210,
        "customerName": "Gianna Miller",
        "phoneNumbers": "+12752322396",
        "customerAddress": {
            "streetNo": "607a",
            "streetName": "Eastern Passage",
            "city": "Boston",
            "state": "Massachusetts"
        },
        "tipAmount": 15,
        "customerRating": 5,
        "outletRating": 4.5
    }
];
describe("countDeliveries function", function () {

    it("should return count for the deliveries done by Richard Jones in the city of San Jose", function () {
        expect(veggiePizza.countDeliveries(deliveryData, "Richard Jones", "San Jose")).to.be.equal(2);
    });
    it("should return 0 as the count for the deliveries done by Richard Jones in the city of San Jose", function () {
        expect(veggiePizza.countDeliveries(deliveryData, "Andrew Clerk", "San Jose")).to.be.equal(0);
    });
    it("should return 0 as the count for the deliveries done by Richard Jones in the city of Orlando", function () {
        expect(veggiePizza.countDeliveries(deliveryData, "Richard Jones", "Orlando")).to.be.equal(0);
    });
});
describe("calculateTotalTipAmount function", function () {

    it("should return total tip amount earned by Emma Smith", function () {
        expect(veggiePizza.calculateTotalTipAmount(deliveryData, "Emma Smith")).to.be.equal(25);
    });
    it("should return total tip amount as 0 for Anna Smith", function () {
        expect(veggiePizza.calculateTotalTipAmount(deliveryData, "Anna Smith")).to.be.equal(0);
    });
});
describe("getDeliveryWiseRatings function", function () {
    it("should return delivery details for the deliveries done by Emma Smith", function () {
        expect(veggiePizza.getDeliveryWiseRatings(deliveryData, "Emma Smith")).to.deep.equal(
            [
                {
                    orderNumber: 434324,
                    customerName: "Camila Garcia",
                    customerRating: 4.5,
                    outletRating: 3
                },
                {
                    orderNumber: 665324,
                    customerName: "Ella Rodriguez",
                    customerRating: 5,
                    outletRating: 4
                }
            ]);
    });
    it("should return no delivery details for the deliveries done by Ivana Smith", function () {
        expect(veggiePizza.getDeliveryWiseRatings(deliveryData, "Ivana Smith")).to.deep.equal([]);
    });
});
describe("calculateAverageRating function", function () {
    it("should return average ratings details for the deliveries data provided", function () {
        expect(veggiePizza.calculateAverageRating(deliveryData)).to.deep.equal(JSON.stringify([
            {
                "deliveredBy": "Emma Smith",
                "orderNumber": 434324,
                "customerName": "Camila Garcia",
                "phoneNumbers": "+12052345876",
                "customerAddress": {
                    "streetNo": "252a",
                    "streetName": "Hale Hall",
                    "city": "Huntsville",
                    "state": "Alabama"
                },
                "tipAmount": 10,
                "customerRating": 4.5,
                "outletRating": 3,
                "averageRating": 3.75
            },
            {
                "deliveredBy": "Emma Smith",
                "orderNumber": 665324,
                "customerName": "Ella Rodriguez",
                "phoneNumbers": "+12052345310",
                "customerAddress": {
                    "streetNo": "253a",
                    "streetName": "Cooper Hill",
                    "city": "Huntsville",
                    "state": "Alabama"
                },
                "tipAmount": 15,
                "customerRating": 5,
                "outletRating": 4,
                "averageRating": 4.5
            },
            {
                "deliveredBy": "Richard Jones",
                "orderNumber": 458899,
                "customerName": "Gary Thomas",
                "phoneNumbers": "+12652349712",
                "customerAddress": {
                    "streetNo": "112c",
                    "streetName": "Baxter Parkway",
                    "city": "San Jose",
                    "state": "California"
                },
                "tipAmount": 5,
                "customerRating": 3,
                "outletRating": 3,
                "averageRating": 3
            },
            {
                "deliveredBy": "Richard Jones",
                "orderNumber": 620899,
                "customerName": "Violet Clark",
                "phoneNumbers": "+13152119733",
                "customerAddress": {
                    "streetNo": "112d",
                    "streetName": "Ridgeway Paddock",
                    "city": "San Jose",
                    "state": "California"
                },
                "tipAmount": 5,
                "customerRating": 3.5,
                "outletRating": 4,
                "averageRating": 3.75
            },
            {
                "deliveredBy": "Richard Jones",
                "orderNumber": 886210,
                "customerName": "Gianna Miller",
                "phoneNumbers": "+12752322396",
                "customerAddress": {
                    "streetNo": "607a",
                    "streetName": "Eastern Passage",
                    "city": "Boston",
                    "state": "Massachusetts"
                },
                "tipAmount": 15,
                "customerRating": 5,
                "outletRating": 4.5,
                "averageRating": 4.75
            }
        ]));
    });

});