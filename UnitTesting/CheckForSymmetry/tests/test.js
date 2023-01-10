const {expect} = require('chai');
const {isSymmetric} = require('../index.js');

describe('sum', () => {
    it('Should return false if the argument is not an array', () => {
        let array = 1;

        expect(isSymmetric(array)).to.be.false;
    });
    it('Should return true if the input array is symmetric', () => {
        let a = [1,2,3,2,1];

        expect(isSymmetric(a)).to.be.true;
    });
    it('Should return false if the input array is asymmetric', () => {
        let a = [1,2,3,2,];

        expect(isSymmetric(a)).to.be.false;
    });
    it('Should return false if the input is a string', () => {
        let a = 'aba';

        expect(isSymmetric(a)).to.be.false;
    });
    it('Should return false with an array of different types of elements', () => {
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });
});