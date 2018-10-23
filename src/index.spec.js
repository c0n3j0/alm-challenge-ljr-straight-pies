const { expect } = require('chai');
const counterFactory = require('./index.js');

const counter = counterFactory(3);

describe('allmundo counter', () => {
	it('should return the correct value :S', () => {
		expect(counter(1)).to.equal(3);
		expect(counter(2)).to.equal(2);
		expect(counter(4)).to.equal(6);
		expect(counter(5)).to.equal(5);
		expect(counter(6)).to.equal(4);
		expect(counter(7)).to.equal(3);
		expect(counter(8)).to.equal(2);
		expect(counter(9)).to.equal(1);
		expect(counter(10)).to.equal(12);
		expect(counter(11)).to.equal(11);
		expect(counter(12)).to.equal(10);
	});

	it('should throw when create counter with 0 or less', () => {
		expect(counterFactory.bind(counterFactory, 0)).to.throw('initialValue must be greather than 0');
	});

	it('should throw when create counter without initial value', () => {
		expect(counterFactory.bind(counterFactory)).to.throw('initialValue is mandatory');
	});

	it('should throw when time is 0 or less', () => {
		expect(counter.bind(counter, 0)).to.throw('Invalid paramater, t must be greather than 0');
	});
});
