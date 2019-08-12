import React from "react";

import { storiesOf } from "@storybook/react-native";

import { Welcome, Colours } from "./Welcome";

storiesOf("Overview", module)
  .add("Overview", () => <Welcome />)
  .add("Brand Colours", () => <Colours />);
