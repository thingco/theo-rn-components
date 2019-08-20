import { install as quickCheckSetup } from "jasmine-check";
import { isNumber, round } from "./math-functions";
import { kmToMiles } from "./quantity-functions";

quickCheckSetup();

declare var check: import("jasmine-check");
declare var gen: import("jasmine-check");

describe("converting Km to Miles", () => {
  function milesToKm (miles) {
    return miles * 1.609344;
  }

  check.it(
    `converting the result of kmToMiles back to km should produce ~(original input ± 10%).
     NOTE large ± due to two floating point conversions in these tests.`,
    gen.numberWithin(0, Number.MAX_VALUE),
    (km) => {
      const miles = kmToMiles(km, 4);
      const approxKm = milesToKm(miles);
      if (km < 1) {
        expect(km).toBeCloseTo(approxKm, 0);
      } else {
        expect(km * 1.1).toBeGreaterThanOrEqual(approxKm);
        expect(km - (km * 0.1)).toBeLessThanOrEqual(approxKm);
      }
    },
  );

  check.it(
    "any input except a positive number (inclusive of 0 and exclusive of Infinity) should error",
    gen.any,
    (input) => {
      if (!(isNumber(input) && isFinite(input) && input >= 0)) {
        expect(() => kmToMiles(input)).toThrow();
      }
    },
  );
});
