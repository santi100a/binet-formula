import {
	assertMin,
	assertInteger,
	assertTypeOf,
} from '@santi100/assertion-lib';
const PHI = (1 + Math.pow(5, 0.5)) / 2;
/**
 * Calculates the Fibonacci number at the given position using Binet's Formula.
 *
 * Binet's Formula is an efficient way to calculate Fibonacci numbers using the golden ratio.
 *
 * **Keep in mind this function may be prone to floating-point JavaScript imprecision.**
 *
 * @param n The positive integer position in the Fibonacci sequence to look for.
 * @throws A `TypeError` if `n` is not a number, negative, or not an integer.
 * @returns The Fibonacci number at position `n`.
 */
export = function (n: number) {
	assertTypeOf(n, 'number', 'n');
	assertInteger(n, 'n');
	assertMin(n, 'n', 0);
	return (Math.pow(PHI, n) - 1 / Math.pow(-PHI, n)) / Math.sqrt(5);
};
