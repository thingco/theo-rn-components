/**
 * `typof` alone doesn't provide guarantees that a number _is_ a number,
 * so include a check for not being NaN. This should be the basis for
 * all subsequent number testing functions.
 * @param v - a value to check, hopefully a number.
 */
export declare function isNumber(v: any): boolean;
/**
 * There is a small chance (observed in-app) that a quantity can have a value
 * of infinity. This is obviously impossible, so guard against the issue.
 * @param v - a value to check, hopefully a number.
 */
export declare function isFiniteNumber(v: any): boolean;
/**
 * Quantities have to be 0 or positive: negative quantities (_eg_ distance)
 * have been observed and are obviously impossible.
 * @param v - a value to check, hopefully a number.
 */
export declare function isPositiveInteger(v: any): boolean;
export declare function round(value: number, precision?: number): number;
//# sourceMappingURL=math-functions.d.ts.map