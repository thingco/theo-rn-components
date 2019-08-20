/**
 * A pair of functions to convert from the datetime representation used
 * on the backend to a human-friendly version for use client-side.
 *
 * There are several points to consider here:
 *
 * 1. The dates are, _as a rule_, millisecond UTC timestamps stored as **strings**.
 * 2. JS' `Date` constructor accepts timestamps, but they need to be numbers.
 * 3. I cannot guarantee that they will be either strings or numbers, just that
 *    they will be one of the two.
 * 4. I can guarantee that, if millisecond timestamps, then they will contain
 *    13 digits & not begin with 0 (therefore allowing for numeric range checking).
 * 4. However, Videos use _seconds_, not milliseconds, so these will be
 *    guaranteed to contain 10-digits, again not beginning with 0.
 */
import { isPositiveInteger } from "./math-functions";

export const MAX_TIMESTAMP = 2147526847000;
export const MAX_EPOCH = 2147526847;

export class UnparseableTimestampError extends Error {
  public name = "UnparseableTimestampError";

  constructor (inputVal: any = "") {
    super();

    this.message = `Input of ${inputVal} (type ${typeof inputVal}) is not a valid unix timestamp`;
  }
}

export function timestampGuardFormatter (timestamp: string|number): number {
  if (typeof timestamp === "string") {
    switch (timestamp.length) {
      case 13:
      case 10:
        const coercedStringValue = Number(timestamp);
        if (Number.isNaN(coercedStringValue)) {
          throw new UnparseableTimestampError(timestamp);
        } else {
          return timestampGuardFormatter(coercedStringValue);
        }
      default:
        throw new UnparseableTimestampError(timestamp);
    }
  } else if (isPositiveInteger(timestamp)) {
    switch (true) {
      case timestamp >= 1000000000000 && timestamp <= MAX_TIMESTAMP:
        return timestamp;
      case timestamp >= 1000000000 && timestamp <= MAX_EPOCH:
        return timestamp * 1000;
      default:
        throw new UnparseableTimestampError(timestamp.toString());
    }
  } else {
    throw new UnparseableTimestampError(JSON.stringify(timestamp));
  }
}

/**
 * Given a unix timestamp, renders a date string. Note that the format
 * of this string is locale specific: at the minute it is hardcoded
 * as `en-GB`, so should render as `DD:MM:YYYY`. However, going forward,
 * the locale should be dynamically set based on user preference.
 *
 * @param unixTimestamp - a positive integer
 * @returns a date string; locale dependent, but `en-GB` should be `DD/MM/YYYY`
 */
export function unixToDateString(unixTimestamp: string|number, locale = "en-GB"): string {
  unixTimestamp = timestampGuardFormatter(unixTimestamp);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return new Date(unixTimestamp).toLocaleDateString(locale, options);
}

/**
 * Given a unix timestamp, renders a time in the form of `HH:mm`.
 * Note the `hour12` setting in `options`: the function should
 * always render 24hr time, otherwise the formatter will append AM/PM
 *
 * TODO(@DanCouper) the locale should be dynamically set, though
 * this should not make much difference to the output: further testing will
 * be needed.
 * 
 * TODO(@DanCouper) possibly allow stripping of seconds. In that case,
 * EITHER `hour12` needs to be `true` (at which point, as only hrs & mins are
 * defined, seconds will be undefined) OR a custom function based on Date methods
 * needs to be written.
 *
 * @param unixTimestamp - a positive integer
 * @returns a time string in the form of `HH:mm`
 */
export function unixToTimeString(unixTimestamp: string|number, locale = "en-GB"): string {
  unixTimestamp = timestampGuardFormatter(unixTimestamp);

  const options = {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  };

  return new Date(unixTimestamp).toLocaleTimeString(locale, options);
}
