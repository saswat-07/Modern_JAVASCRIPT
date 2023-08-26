const chai = require('chai');
const expect = chai.expect;
const sort = require('../p4-sort-marks/p4-submission');

describe('Sort the given set of marks', function () {
    it('should have function sortMarks()', function () {
        expect(typeof sort.sortMarks).to.equal('function');
    })
    it('sortMarks() should return the sorted marks', function () {
        let marks = [56, 98, 23, 45, 62];
        let sorted = [23, 45, 56, 62, 98];
        expect(sort.sortMarks(marks)).to.deep.equal(sorted);
    })

    it('sortMarks() should return the sorted marks', function () {
        const marks = [80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
        let sorted = [18, 23, 39, 48, 54, 65, 77, 80, 81, 94];
        expect(sort.sortMarks(marks)).to.deep.equal(sorted);
    })

})