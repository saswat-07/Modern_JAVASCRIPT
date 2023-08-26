/*
Practice 4 - Parse JSON to Perform Aggregations
*/


// Declare and initialize variable to store the `flights` data.
// Copy flights data from `p3-submission.json` file created in Practice 3.

const flight =`{
    "flights":
    [{
    "from":"Chicago",
    "to":"New York",
    "flightOptions" : [
        {
        "departureDays" : "M-Tu-W-Th-F",
        "flightNo": "DL551",
        "airlines": "Delta Airlines",
        "departureTime": "06:00:00",
        "arrivalTime": "09:13:00",
        "stopOvers": "",
        "isDirect": true,
        "departureFrom": "ORD",
        "arrivalAt": "LGA"
    }, {
        "departureDays": "M-T-W-Th",
        "flightNo": "UA2202",
        "airlines": "Unite Airlines",
        "departureTime": "19:46:00",
        "arrivalTime": "22:56:00",
        "stopOvers": "",
        "isDirect": true,
        "departureFrom": "ORD",
        "arrivalAt": "EWR"
    }, {
        "departureDays": "T-W-T",
        "flightNo": "UA265",
        "airlines": "Unite Airlines",
        "departureTime": "18:00:00",
        "arrivalTime": "21:15:00",
        "stopOvers": "",
        "isDirect": true,
        "departureFrom": "ORD",
        "arrivalAt": "LGA"
    }, {
        "departureDays": "Th",
        "flightNo": "AA1378",
        "airlines": "American Airlines",
        "departureTime": "11:21:00",
        "arrival-time": "14:30:00",
        "stopOvers": "",
        "isDirect": true,
        "departureFrom": "ORD",
        "arrivalAt": "JFK"
    }, {
        "departureDays": "M-Tu-W-Th-F",
        "flightNo": "DL556",
        "airlines": "Delta Airlines",
        "departureTime": "08:45:00",
        "arrivalTime": "11:59:00",
        "stopOvers": "",
        "isDirect": true,
        "departureFrom": "ORD",
        "arrivalAt": "LGA"
    }, {
        "departureDays": "Tu",
        "flightNo": "AA552",
        "airlines": "American Airlines",
        "departureTime": "18:23:00",
        "arrivalTime": "21:32:00",
        "stopOvers": "",
        "isDirect": true,
        "departureFrom": "ORD",
        "arrivalAt": "EWR"
    }]
}]
}`;


// Convert JSON to JavaScript object

const flightObject = JSON.parse(flight);//JSON.stringify() to convert javascript to JSON 
//console.log( flightObject.flights[0].flightOptions);

// Define function `searchFlights()` to filter and fetch flight details of flights flying from Chicago to New York by United Airlines.
// parameters will have to be added by the learner


function searchFlights(flightObject, from, to, airlines) {
 
//   const filterFlights=flightObject.flights.filter(loc=>loc.from===from && loc.to===to);
//   const flightOption=filterFlights[0].flightOptions.filter(options=>options.airlines===airlines)
//   filterFlights[0].flightOptions=flightOption;
//   return filterFlights;
 //console.log(filterFlights)
  return flightObject.flights.filter(flights => flights.from === from && flights.to === to )
    .map(flights => ({
      from: flights.from,
      to: flights.to,
      flightOptions: flights.flightOptions.filter(option => option.airlines === airlines)

        }));
    
}

const results1 = searchFlights(flightObject, "Chicago", "New York", "American Airlines");
console.log(results1);
console.log(results1[0].flightOptions); // should match the expected output of the first test case

// const results2 = searchFlights(flightObject, "Chicago", "LA", "United Airlines");
// console.log(results2);
//console.log(results2[0].flightOptions) // should match the expected output of the second test case

// const results3 = searchFlights(flightObject, "Chicago", "New York", "United Airlines");
// console.log(results3); // should match the expected output of the third test case
// console.log( results3[0].flightOptions);



// do not delete below code, it is written to make searchFlights() function exportable for testing purpose
module.exports = {
    searchFlights
};





    