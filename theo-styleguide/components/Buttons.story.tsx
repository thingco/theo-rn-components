import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Screen } from "./Base";
import { Button } from "./Buttons";
import s from "./Styles";

storiesOf("Atoms", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .addDecorator(withKnobs)
  .add("Standard button", () => (
    <Button
      disabled={boolean("Disabled?", false)}
      type={select(
        "Type",
        { Primary: "primary", Secondary: "secondary", Danger: "danger" },
        "primary"
      )}
      t
    >
      Press Me
    </Button>
  ));

storiesOf("Molecules", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .add("Button stack (vertical)", () => (
    <>
      <Button type="primary" style={[s.mv_base]}>
        Primary Button
      </Button>
      <Button type="secondary" style={[s.mv_base]}>
        Secondary Button
      </Button>
      <Button type="danger" style={[s.mv_base]}>
        Warning Button
      </Button>
    </>
  ));
