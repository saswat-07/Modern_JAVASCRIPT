const chai = require('chai');
const expect = chai.expect;
const average = require('../p2-average-marks/p2-submission');

describe('Calculate the average marks',function(){
    it('should have function calculateAverage()',function(){
        expect(typeof average.calculateAverage).to.equal('function');
    });
    
    it('calculateAverage() should return the average of given set of marks',function(){
        const marks = [20,25,45];
        expect(average.calculateAverage(marks)).to.deep.equal(30);
    })

    it('calculateAverage() should return the average of given set of marks',function(){
        const marks = [80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
        expect(average.calculateAverage(marks)).to.deep.equal(57.9);
    })

})