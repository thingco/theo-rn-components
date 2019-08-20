import { isFiniteNumber, round } from "./math-functions";

export class NaNError extends Error {
  constructor (inputVal: any = "")  {
    super();

    this.message = `
Values for distance/duration/speed calculations must be valid numbers.
${inputVal} of type ${typeof inputVal} is not valid
      `;
    this.name = "NaNError";
  }
}

export class NegativeNumberError extends Error {
  constructor (inputVal: any = "")  {
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
export function kmToMiles (km: number, precision: number = 1): number {
  if (!isFiniteNumber(km)) {
    throw new NaNError(km);
  } else if (km < 0) {
    throw new NegativeNumberError(km);
  } else {
    const miles = km * 0.62137;

    return round(miles, precision);
  }
}
