import { install as quickCheckSetup } from "jasmine-check";
import { isPositiveInteger } from "./math-functions";
import { MAX_EPOCH, MAX_TIMESTAMP, unixToDateString, unixToTimeString } from "./date-functions";

quickCheckSetup();

declare var check: import("jasmine-check");
declare var gen: import("jasmine-check");

describe("unix time to localised date string", () => {
  check.it(
    "converts unix timestamps to valid dates",
    gen.oneOf([gen.intWithin(1000000000000, MAX_TIMESTAMP), gen.intWithin(1000000000, MAX_EPOCH)]),
    (timestamp) => {
      expect(unixToDateString(timestamp)).toMatch(/\d\d\/\d\d\/\d\d\d\d/);
    },
  );

  check.it("only parses unix timestamps", gen.any, (value) => {
    if (!isPositiveInteger(value)) {
      expect(() => unixToDateString(value)).toThrow();
    }
  });
});

describe("unix timestamp to localised time string", () => {
  check.it(
    "converts unix timestamp to valid time",
    gen.oneOf([gen.intWithin(1000000000000, MAX_TIMESTAMP), gen.intWithin(1000000000, MAX_EPOCH)]),
    (timestamp) => {
      expect(unixToTimeString(timestamp)).toMatch(/\d\d:\d\d/);
      expect(unixToTimeString(timestamp.toString())).toMatch(/\d\d:\d\d/);
    },
  );

  check.it("only parses unix timestamps", gen.any, (value) => {
    if (!isPositiveInteger(value)) {
      expect(() => unixToTimeString(value)).toThrow();
    }
  });
});
