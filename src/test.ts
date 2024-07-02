import { memoize } from "./memoize";


describe('memoize function', () => {
    it('should return the same result for the same arguments', () => {
        const mockFunction = jest.fn((num: number) => num * 2);
        const memoizedFunction = memoize(mockFunction);

        expect(memoizedFunction(2)).toBe(4);
        expect(memoizedFunction(2)).toBe(4);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple arguments correctly', () => {
        const mockFunction = jest.fn((a: number, b: number) => a + b);
        const memoizedFunction = memoize(mockFunction);

        expect(memoizedFunction(1, 2)).toBe(3);
        expect(memoizedFunction(1, 2)).toBe(3);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});