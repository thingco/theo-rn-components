import { isFiniteNumber, round } from "./math-functions";
export class NaNError extends Error {
    constructor(inputVal = "") {
        super();
        this.message = `
Values for distance/duration/speed calculations must be valid numbers.
${inputVal} of type ${typeof inputVal} is not valid
      `;
        this.name = "NaNError";
    }
}
export class NegativeNumberError extends Error {
    constructor(inputVal = "") {
        super();
        this.message = `
Values for distance/duration/speed calculations must be positive numbers.
${inputVal} was negative.
      `;
        this.name = "NegativeNumberError";
    }
}
/**
 * Given an integer or float value for km or km/ph, make an approximate conversion.
 * @param km
 */
export function kmToMiles(km, precision = 1) {
    if (!isFiniteNumber(km)) {
        throw new NaNError(km);
    }
    else if (km < 0) {
        throw new NegativeNumberError(km);
    }
    else {
        const miles = km * 0.62137;
        return round(miles, precision);
    }
}
//# sourceMappingURL=quantity-functions.js.map