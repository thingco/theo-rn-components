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
      buttonType={select(
        "Type",
        { Primary: "primary", Secondary: "secondary", Danger: "danger" },
        "primary"
      )}
      onPress={() => void 0}
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
      <Button buttonType="primary" onPress={() => void 0} style={[s.mv_base]}>
        Primary Button
      </Button>
      <Button buttonType="secondary" onPress={() => void 0} style={[s.mv_base]}>
        Secondary Button
      </Button>
      <Button buttonType="danger" onPress={() => void 0} style={[s.mv_base]}>
        Warning Button
      </Button>
    </>
  ));
