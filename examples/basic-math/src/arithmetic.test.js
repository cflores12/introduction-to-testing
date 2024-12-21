import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic.js';

describe('add', () => {
    it('should add two positive numbers', () => {
        expect(add(2,2)).toBe(4);
    })
});

describe('subtract', () => {
    it('should subtract two positive numbers', () => {
        expect(subtract(2,2)).toBe(0);
    })

    it('should accept and subtract all of the numbers', () => {
        expect(subtract([10, 5], 2)).toBe(3);
    })

    it('should default undefined values to 0', () => {
        expect(subtract(3)).toBe(3);
        expect(subtract(undefined, 3)).toBe(-3);
    })
});

describe('multiply', () => {
    it('should multiply two positive numbers', () => {
        expect(multiply(3,3)).toBe(9);
    })
});

describe('divide', () => {
    it('should divide two positive numbers', () => {
        expect(divide(2,2)).toBe(1);
    })

    it('should return null if dividing by zero', () => {
        expect(divide(10, 0)).toBeNull();
    })
});
