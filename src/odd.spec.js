const { odd } = require('./odd');
const { even } = require('./even');
const { flat } = require('./flat');


describe('Odd checking...', () => {
	test('Has to return odd numbers', () => {
		expect(odd([23, 2, 4, 6, 8, 78, 65])).toEqual([23, 65])
	})
})

describe('Even checking...', () => {
	test('Has to return only even numbers', () => {
	expect(even([34, 1, 2, 56, 3, 456])).toEqual([34, 2, 56, 456]);
})
})

describe('Flat checking...', () => {
	test('Has to return 1-level Array', () => {
	expect(flat([[[[1, 2], [3, 4]], 5, 6], [7, 8, [9, 10]], [11, [12, 13]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
})
})
