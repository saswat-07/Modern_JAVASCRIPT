## Practice

This sprint has 5 practices.

### Problem Statements

#### Practice 1 - Create Simple JSON

##### Tasks

The details of flights from Chicago to New York are provided in a tabular format below:

| from    | to       | departure-days | flight no | airlines          | departure-time | arrival-time | stop overs | isDirect | departure-from | arrival-at |
| -------- | --------- | --------------- | ---------- | ------------------ | --------------- | ------------- | ----------- | --------- | --------------- | ----------- |
| Chicago | New York | M-Tu-W-Th-F    | DL551     | Delta Airlines    | 06:00:00       | 09:13:00     |            | TRUE     | ORD            | LGA        |
| Chicago | New York | M-T-W-Th       | UA2202    | United Airlines   | 19:46:00       | 22:56:00     |            | TRUE     | ORD            | EWR        |
| Chicago | New York | Th             | AA1378    | American Airlines | 11:21:00       | 14:30:00     |            | TRUE     | ORD            | JFK        |

Create separate JSON for each of the rows with the flight details provided above and save them in separate .json files (p1-submission-1.json, p2-submission-2.json, p3-submission-3.json):

The files are located inside the folder `p1-simple-json`.

Note:

- `departure-from` and `arrival-at` are the airport codes.
- For the cells left blank, the value in the JSON should be null.
- In a table, a row represents an object.
- In this case, the row represents a flight. 
- Flight is an example of an object in the real world that provides the details of a particular flight  from Chicago to New York on specified departure days. 


#### Practice 2 - Create JSON to Represent a Collection

The details of multiple flights from Chicago to New York are provided in a tabular format below:

| from    | to       | departure-days | flight no | airlines          | departure-time | arrival-time | stop overs | isDirect | departure-from | arrival-at |
| -------- | --------- | --------------- | ---------- | ------------------ | --------------- | ------------- | ----------- | --------- | --------------- | ----------- |
| Chicago | New York | M-Tu\-W-Th\-F  | DL551     | Delta Airlines    | 06:00:00       | 09:13:00     |            | TRUE     | ORD            | LGA        |
| Chicago | New York | M-T-W-Th       | UA2202    | United Airlines   | 19:46:00       | 22:56:00     |            | TRUE     | ORD            | EWR        |
| Chicago | New York | T-W-T          | UA265     | United Airlines   | 18:00:00       | 21:15:00     |            | TRUE     | ORD            | LGA        |
| Chicago | New York | Th             | AA1378    | American Airlines | 11:21:00       | 14:30:00     |            | TRUE     | ORD            | JFK        |
| Chicago | New York | M-Tu\-W-Th\-F  | DL556     | Delta Airlines    | 08:45:00       | 11:59:00     |            | TRUE     | ORD            | LGA        |
| Chicago | New York | Tu             | AA552     | American Airlines | 18:23:00       | 21:32:00     |            | TRUE     | ORD            | EWR        |

Instead of creating separate JSON for each of these rows, create a single JSON that represents this table.

Note: The table is a collection of rows, with each row providing details of a particular flight option.

The JSON created should be saved in `p2-submission.json` file. 

The file is located inside the folder `p2-json-for-collection`.

#### Practice 3 - Create Complex JSON

The details of flights from Chicago to New York are provided in a tabular format below:

| from    | to          | departure-days | flight no | airlines          | departure-time | arrival-time | stop overs | isDirect | departure-from | arrival-at |
| -------- | ------------ | --------------- | ---------- | ------------------ | --------------- | ------------- | ----------- | --------- | --------------- | ----------- |
| Chicago | New York | M-Tu-W-Th-F    | DL551     | Delta Airlines    | 06:00:00       | 09:13:00     |            | TRUE     | ORD            | LGA        |
|         |             | M-T-W-Th       | UA2202    | United Airlines   | 19:46:00       | 22:56:00     |            | TRUE     | ORD            | EWR        |
|         |             | T-W-T          | UA265     | United Airlines   | 18:00:00       | 21:15:00     |            | TRUE     | ORD            | LGA        |
|         |             | Th             | AA1378    | American Airlines | 11:21:00       | 14:30:00     |            | TRUE     | ORD            | JFK        |
|         |             | M-Tu-W-Th-F    | DL556     | Delta Airlines    | 08:45:00       | 11:59:00     |            | TRUE     | ORD            | LGA        |
|         |             | Tu             | AA552     | American Airlines | 18:23:00       | 21:32:00     |            | TRUE     | ORD            | EWR        |

Create JSON with the details provided and save it in `p3-submission.json` file. 

The file is located inside the folder `p3-json-with-objects`.

**Note:**
- The value for fields `from` and `to` are same for all flight options and need not be repeated.
- The list of flight options should be represented as a collection within the JSON along with these fields.
- Each item in the collection is an object that represents a flight option.
- Create a JSON with the details provided to represent the flight object.

#### Practice 4 - Parse JSON to Perform Aggregations

Write JavaScript program to convert the JSON containing flight details created in `Practice 3` into a JavaScript object.

Also, perform a filter operation on the JavaScript object to retrieve details of United Airlines flights from Chicago to New York. 

Provide the solution in `p4-submission.js` file.

The file is located inside the folder `p4-json-to-js`.

##### Tasks

- Use `JSON.parse()` method to convert `json` to JavaScript object.
    - The JavaScript object should be an array of objects with flight details.
- Define function `searchFlights()` that filters flights that fly from `Chicago` to `New York` by `United Airlines` and returns the result.
    - Use array methods `filter()` and `map()` to generate the required result.


#### Practice 5 - Convert JavaScript Object to JSON

The given JavaScript array consists of list of airports.

```javascript
[
    {
        ORD: {
            airportName: "Chicago O'Hare International Airport",
            state: "Chicago",
            facilities:["taxi parking","family lounge", "on-site hotel", "lost and found"]
        },
        LWA: {
            airportName: "LaGuardia Airport",
            state: "New York",
            facilities: ["terminal transits", "business lounge", "private car parking", "taxi parking"]
        }
    }
]
```

Using the JSON.stringify() method, convert the JavaScript object to JSON.

Provide the solution in `p5-submission.js` file.

Copy the JSON data and save it in `p5-submission.json` file.

The files are located inside the folder `p5-js-to-json`.


### Submission Instructions

1. This is a test enabled practice, hence, the solution will have to ungdergo automated evaluation process. 
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