const chai = require("chai");
const expect = chai.expect;
const jsToJSON = require("../p5-js-to-json/p5-submission");
const fs = require("fs");

describe("JS to JSON", function () {
    it("should contain string to store JSON data", function () {
        expect(typeof jsToJSON.airportJSON).to.be.equal("string");
    });
    it("should convert JavaScript object to JSON", function () {
        fs.readFile('./p5-js-to-json/p5-submission.json', (err, inputD) => {
            if (err) throw err;
            expect(jsToJSON.airportJSON)
                .to.be.equal(inputD.toString()
                    .replace(/\r/g, "")
                    .replace(/\t/g, "")
                    .replace(/\n/g, "")
                    .replace(/:\s/g, ":")
                    .replace(/,\s/g, ",")
                );
        });
    });
});
