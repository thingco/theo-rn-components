export declare const MAX_TIMESTAMP = 2147526847000;
export declare const MAX_EPOCH = 2147526847;
export declare class UnparseableTimestampError extends Error {
    name: string;
    constructor(inputVal?: any);
}
export declare function timestampGuardFormatter(timestamp: string | number): number;
/**
 * Given a unix timestamp, renders a date string. Note that the format
 * of this string is locale specific: at the minute it is hardcoded
 * as `en-GB`, so should render as `DD:MM:YYYY`. However, going forward,
 * the locale should be dynamically set based on user preference.
 *
 * @param unixTimestamp - a positive integer
 * @returns a date string; locale dependent, but `en-GB` should be `DD/MM/YYYY`
 */
export declare function unixToDateString(unixTimestamp: string | number, locale?: string): string;
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
export declare function unixToTimeString(unixTimestamp: string | number, locale?: string): string;
//# sourceMappingURL=date-functions.d.ts.map