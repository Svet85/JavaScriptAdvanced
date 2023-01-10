const {expect} = require('chai');
const {createCalculator} = require('../index.js');

describe('createCalculator', () => {
    it('Should have funcs as props', () => {
        let result = createCalculator();
        
        expect(result).to.be.a('object');
        expect(result.add).to.be.a('function');
        expect(result.subtract).to.be.a('function');
        expect(result.get).to.be.a('function');
    });

    it('Add and Sub work with vallue that can be parsed as a number', () => {
        let result = createCalculator();
        
        result.add(1);
        expect(result.get()).to.equal(1);
        result.add('1');
        expect(result.get()).to.equal(2);
        result.subtract('1');
        expect(result.get()).to.equal(1);
        result.subtract(1);
        expect(result.get()).to.equal(0);
    });

    it('Get should return internal sum', () => {
        let result = createCalculator();
        
        expect(result.get()).to.equal(0);
        result.add(1);
        expect(result.get()).to.equal(1);
    });
    
});