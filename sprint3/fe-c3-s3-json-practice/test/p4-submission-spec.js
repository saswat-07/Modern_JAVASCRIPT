const chai = require("chai");
const expect = chai.expect;
const parseJSON = require("../p4-json-to-js/p4-submission");

describe("Parse JSON to Perform Aggregations", function () {

    const flights = {
        flights: [
            {
                from: "Chicago",
                to: "New York",
                flightOptions: [
                    {
                        departureDays: "M-Tu-W",
                        flightNo: "DL155",
                        airlines: "Delta Airlines",
                        departureTime: "16:00:00",
                        arrivalTime: "19:13:00",
                        stopOvers: "1",
                        isDirect: "FALSE",
                        departureFrom: "ORD",
                        arrivalAt: "JFK"
                    },
                    {
                        departureDays: "Tu-Th",
                        flightNo: "AA1248",
                        airlines: "American Airlines",
                        departureTime: "01:21:00",
                        arrivalTime: "04:30:00",
                        stopOvers: "",
                        isDirect: "TRUE",
                        departureFrom: "ORD",
                        arrivalAt: "LGA"
                    },
                    {
                        departureDays: "Th-F",
                        flightNo: "DL655",
                        airlines: "Delta Airlines",
                        departureTime: "18:45:00",
                        arrivalTime: "21:59:00",
                        stopOvers: "1",
                        isDirect: "FALSE",
                        departureFrom: "ORD",
                        arrivalAt: "LGA"
                    },
                    {
                        departureDays: "M-F",
                        flightNo: "AA525",
                        airlines: "American Airlines",
                        departureTime: "08:23:00",
                        arrivalTime: "11:32:00",
                        stopOvers: "1",
                        isDirect: "FALSE",
                        departureFrom: "ORD",
                        arrivalAt: "EWR"
                    }
                ]
            }
        ]
    };

    it("should have function searchFlights() to search flights", function () {
        expect(typeof parseJSON.searchFlights).to.equal("function");
    });

    it("should be able to search flights flying from Chicago to NewYork by American Airlines", function () {
        expect(parseJSON.searchFlights(flights, "Chicago", "New York", "American Airlines")).to.deep.equal([
            {
                from: "Chicago",
                to: "New York",
                flightOptions: [
                    {
                        departureDays: "Tu-Th",
                        flightNo: "AA1248",
                        airlines: "American Airlines",
                        departureTime: "01:21:00",
                        arrivalTime: "04:30:00",
                        stopOvers: "",
                        isDirect: "TRUE",
                        departureFrom: "ORD",
                        arrivalAt: "LGA"
                    },
                    {
                        departureDays: "M-F",
                        flightNo: "AA525",
                        airlines: "American Airlines",
                        departureTime: "08:23:00",
                        arrivalTime: "11:32:00",
                        stopOvers: "1",
                        isDirect: "FALSE",
                        departureFrom: "ORD",
                        arrivalAt: "EWR"
                    }
                ]
            }
        ]);
    });

    it("should return empty array for flights from Chicago to LA", function () {
        expect(parseJSON.searchFlights(flights, "Chicago", "LA", "United Airlines")).to.deep.equal([]);
    });

    it("should return flights from Chicago to New York with empty flightOptions for United Airlines", function () {
        expect(parseJSON.searchFlights(flights, "Chicago", "New York", "United Airlines")).to.deep.equal([
            {
                from: "Chicago",
                to: "New York",
                flightOptions: [
                ]
            }
        ]);
    });
});