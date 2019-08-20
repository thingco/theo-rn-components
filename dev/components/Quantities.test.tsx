import React from "react";
import renderer from "react-test-renderer";
import { FormattedDistance, FormattedSpeed } from "./Quantities";

test("Distance renders correctly for metric", () => {
  const tree = renderer
    .create(<FormattedDistance km={42} precision={1} units="M" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Speed renders correctly for metric", () => {
  const tree = renderer
    .create(<FormattedSpeed kmph={84} precision={2} units="M" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Distance renders correctly for imperial", () => {
  const tree = renderer
    .create(<FormattedDistance km={42} precision={0} units="I" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Speed renders correctly for imperial", () => {
  const tree = renderer
    .create(<FormattedSpeed kmph={84} precision={1} units="I" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
