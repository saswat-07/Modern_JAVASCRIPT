const chai = require('chai');
const expect = chai.expect;
const count = require('../p3-count-students/p3-submission')

describe('calculate the number of students who scored >= 40 ',function(){
   
    it('should have function findCount()',function(){
        expect(typeof count.findCount).to.equal('function');
    });
    
    it('findCount() should return the count of students',function(){
        const marks = [20,25,45];
        expect(count.findCount(marks)).to.deep.equal(1);
    })

    it('findCount() should return the count of students',function(){
        const marks = [80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
        expect(count.findCount(marks)).to.deep.equal(7);
    })
})