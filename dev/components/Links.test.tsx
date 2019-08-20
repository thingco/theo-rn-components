import React from "react";
import renderer from "react-test-renderer";

import { Link } from "./Links";

test("Link renders correctly", () => {
  const tree = renderer
    .create(<Link onPress={() => void 0}>I'm a link!</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
