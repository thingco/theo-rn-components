export declare class NaNError extends Error {
    constructor(inputVal?: any);
}
export declare class NegativeNumberError extends Error {
    constructor(inputVal?: any);
}
/**
 * Given an integer or float value for km or km/ph, make an approximate conversion.
 * @param km
 */
export declare function kmToMiles(km: number, precision?: number): number;
//# sourceMappingURL=quantity-functions.d.ts.map