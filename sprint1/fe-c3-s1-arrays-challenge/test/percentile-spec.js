const chai = require('chai');
const expect = chai.expect;
const percentile = require('../percentile-solution');

describe('Compute the percentole array', function () {
    it('should have function sortArray()', function () {
        expect(typeof percentile.sortArray).to.equal('function');
    })
    it('should have function calculatePercentileArray()', function () {
        expect(typeof percentile.calculatePercentileArray).to.equal('function');
    })

    it('sortArray() should return the sorted marks', function () {
        let marks = [56, 98, 23, 45, 62];
        let sorted = [23, 45, 56, 62, 98];
        expect(percentile.sortArray(marks)).to.deep.equal(sorted);
    })

    it('sortArray() should return the sorted marks', function () {
        let marks = [66, 83, 13, 75, 42];
        let sorted = [13, 42, 66, 75, 83];
        expect(percentile.sortArray(marks)).to.deep.equal(sorted);
    })

    it('calculatePercentileArray() should return the percentile array', function () {
        const marksArray = [37, 85, 56, 70, 45, 78, 89, 68, 98, 23, 91, 63, 47];
        const percentileArray = [0, 8, 15, 23, 31, 38, 46, 54, 62, 69, 77, 85, 92];
        expect(percentile.calculatePercentileArray(marksArray)).to.deep.equal(percentileArray);
    })
    it('calculatePercentileArray() should return the percentile array', function () {
        const marksArray = [45, 68, 31, 95, 82, 66, 71];
        const percentileArray = [0, 14, 29, 43, 57, 71, 86];
        expect(percentile.calculatePercentileArray(marksArray)).to.deep.equal(percentileArray);
    })
})