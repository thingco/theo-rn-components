/**
 * `typof` alone doesn't provide guarantees that a number _is_ a number,
 * so include a check for not being NaN. This should be the basis for
 * all subsequent number testing functions.
 * @param v - a value to check, hopefully a number.
 */
export function isNumber(v: any): boolean {
  return !isNaN(v) && typeof v === "number";
}

/**
 * There is a small chance (observed in-app) that a quantity can have a value
 * of infinity. This is obviously impossible, so guard against the issue.
 * @param v - a value to check, hopefully a number.
 */
export function isFiniteNumber(v: any): boolean {
  return isNumber(v) && isFinite(v);
}

/**
 * Quantities have to be 0 or positive: negative quantities (_eg_ distance)
 * have been observed and are obviously impossible.
 * @param v - a value to check, hopefully a number.
 */
export function isPositiveInteger(v: any): boolean {
  return Number.isInteger(v) && v >= 0;
}


export function round (value: number, precision: number = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}
