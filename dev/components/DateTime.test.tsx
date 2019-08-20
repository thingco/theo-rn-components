import React from "react";
import renderer from "react-test-renderer";
import { FormattedDate, FormattedTime } from "./DateTime";

const aug_13_2019__15_29 = 1565706270562;

test("Date renders correctly", () => {
  const tree = renderer
    .create(<FormattedDate timestamp={aug_13_2019__15_29} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Time renders correctly", () => {
  const tree = renderer
    .create(<FormattedTime timestamp={aug_13_2019__15_29} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
