/**
 *  Tiempo │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10 │ 11 │ 12 │ ...
 *  ─────────────────────────────────────────────────────────────────
 *  Valor  │ 3 │ 2 │ 1 │ 6 │ 5 │ 4 │ 3 │ 2 │ 1 │ 12 │ 11 │ 10 │ ...
 */

module.exports = function module(initialValue) {
	if (initialValue === undefined) throw new Error('initialValue is mandatory');

	if (initialValue <= 0) throw new Error('initialValue must be greather than 0');

	return function counter(t) {
		if (t <= 0) throw new Error('Invalid paramater, t must be greather than 0');
		let value = initialValue + 1;
		let multiplier = 2;
		for (let x = 0; x < t; x += 1) {
			value -= 1;
			if (value === 0) {
				value = initialValue * multiplier;
				multiplier *= 2;
			}
		}
		return value;
	};
};
