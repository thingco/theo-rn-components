import React from "react";
import renderer from "react-test-renderer";

import { Button } from "./Buttons";

test("Button renders correctly", () => {
  const tree = renderer
    .create(
      <Button buttonType="primary" onPress={() => void 0}>
        I'm a button!
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
