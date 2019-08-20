import React from "react";
import renderer from "react-test-renderer";

import { Pill, PillOutlined, PillTinted } from "./Pills";

test("Normal pill renders correctly", () => {
  const tree = renderer
    .create(<Pill pillType="primary">I'm a pill!</Pill>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Outline pill renders correctly", () => {
  const tree = renderer
    .create(<PillOutlined pillType="contrast">I'm a pill!</PillOutlined>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Tinted pill renders correctly", () => {
  const tree = renderer
    .create(<PillTinted pillType="warning">I'm a pill!</PillTinted>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
