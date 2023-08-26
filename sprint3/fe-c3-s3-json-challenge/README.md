## Challenge - Analyze Order Deliveries of Veggie-Pizza Outlet​

#### Problem Statement

Veggie-Pizza is a pizza delivery outlet that became popular for its custom-made vegetarian pizzas. ​

A customer can order pizzas and other items over the phone. The outlet delivers the orders at the address specified by the customer.​

To ensure a quality delivery system, one of the key tasks for the Veggie-Pizza outlet owners is to analyze the performance of its delivery people.​

The delivery person is rated by the customers and the outlet owner. The overall rating is the average of ratings provided by customers and the outlet owner.​

The delivery details with average rating should be stored so that it can help in making decisions related to:​

- Identifying star performers on the team​
- Awarding star performers with incentives​
- Conducting training programs for underperformers​

Write JavaScript functions to analyze delivery ​details and maintain the records of average ​ratings obtained by each delivery person.

#### Challenge Data​

Use the details provided below for developing the challenge solution.​ 

These are the delivery details of the orders delivered yesterday.​

| Delivered By | Order Number​ | Customer Name​    | Phone1 | Phone2 | Street No | Street Name | City | State | Tip Amount​ | Customer Rating​ | Outlet Rating |
| ---------------- | ------------- | ----------------- | -------------- | ----------------- | ----------- | ----------------- | ---------------- |---------------- |---------------- |---------------- |---------------- |
| Charles Garcia​  | 234324​       | Michael Williams​ | +12052349876​  | +12052349876​     | 501m​       | Hopton Street​    | Orlando​         | Florida​ | 10​ | 4.5​ | 3​ |
| Andrew Clark​    | 897655​       | George Wilson​    | +12652349712​  | +12752344376​     | 281d​       | Sea View​         | South ​Austin​ | Texas​ | 5​ | 4​ | 4.5​ |
| Andrew Clark​    | 1560986​      | Ella Rodriguez​   | +12902346589​  | +12902300610​     | 892g​       | Parkside Park​    | Louiseville​     | Kentucky​ | 0​ | 3​ | 4​ |
| Nicholas Taylor​ | 2224317​      | Olivia Davis​     | +12452342200​  | +12452277881​     | 108a​       | Buller Hawthorns​ | Trenton​         | New Jersey​ | 5​ | 5​ | 4​ |
| Charles Garcia​  | 2887648​      | Lucy Thomas​      | +13152119733​  | +13175264437​     | 557a​       | Cygnet Court​     | Dover​           | Delaware​ | 20​ | 1​ | 2​ |
| Charles Garcia​  | 234541​       | Richard Mia​      | +12052333876​  | +12052343176​     | 501m​       | Hopton Street​    | Orlando​         | Florida​ | 10​ | 4.5​ | 3​ |
| Andrew Clark​    | 897690​       | Eric Claire     | +12652387712​  | +12752322396​     | 292f​       | North View​       | South ​Austin​ | Texas​ | 10​ | 4​ | 4.5​ |

#### Tasks

- The JSON format makes it easy to transport the data to any external web-server system hence, create JSON data with the details given in the above table.​

    **Note:**

    - A customer can have multiple phone numbers, so they should be stored as array.
    - A customer's address is a complex data consisting of multiple details and thus should be stored as object.

- Convert JSON to JavaScript Object​.
- Define:
    - function `countDeliveries()` to calculate number of orders delivered by a particular delivery person in a particular city.​
        - Sample input to `countDeliveries()`:
            - Delivery Person: Charles Garcia
            - City: Orlando
        - Expected return from `countDeliveries()`:
            2
    - function `calculateTotalTipAmount()` to calculate total tip amount earned by a particular delivery person.​
        - Sample input to `calculateTotalTipAmount()`:
            - Delivery Person: Andrew Clark
            - Expected result from `calculateTotalTipAmount`:
                15
    - function `getDeliveryWiseRatings()` to display delivery details for a particular delivery person.​
        - The details should include:​
            - orderNumber, customerName , customerRating, outletRating​
        - Sample input to `getDeliveryWiseRatings()`:
            - Delivery Person: Nicholas Taylor
        - Expected result from `getDeliveryWiseRatings()`:
            ```javascript
                { 
                    orderNumber :: 2224317
                    customerName :: Olivia Davis
                    customerRating :: 5
                    outletRating :: 4
                }
            ```
    - function `calculateAverageRating()` to calculate average rating of each delivery and store it in the JSON format.​
        - averageRating field value should be calculated using customerRating and outletRating.​
        - averageRating field should be added to the existing JSON data for each delivery.​
        - Validate and reformat the JSON data on https://jsonlint.com/.​
        - Copy and paste the JSON data in `deliveryData.json` file provided with the boilerplate.​
        
**NOTE: The complete solution for this exercise should be provided in the `veggie-pizza.js` file. The file is located inside the `solution` folder.**

### Submission Instructions

1. This is a test enabled challenge, hence, the solution will have to ungdergo automated evaluation process. 
    - For automated evaluation, the solution should be first tested locally and then on hobbes.
2. Steps to test the code locally:
    1. Ensure the solution code is provided in the specified files only.
    2. From the command line terminal, set the path to the folder containing cloned boilerplate code.
    3. Run the command `npm run test` to test the solution locally.
    4. Ensure all the test cases are passing locally and then push the solution to git for automated testing on `hobbes`.
3. Steps to test the code on hobbes:
    1. Open the submission page at `https://codereview.stackroute.niit.com/#/submission`.
    2. Submit the solution.
    3. For the failed test cases, refactor the code locally and submit it for re-evaluation.

