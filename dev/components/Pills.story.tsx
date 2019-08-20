import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Screen } from "./Base";
import { Pill, PillOutlined, PillTinted } from "./Pills";
import s from "./Styles";

storiesOf("Atoms", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_center]}>{getStory()}</Screen>
  ))
  .addDecorator(withKnobs)
  .add("Standard pill", () => (
    <Pill
      pillType={select(
        "Type",
        { Primary: "primary", Contrast: "contrast", Warning: "warning" },
        "primary"
      )}
    >
      Standard Pill
    </Pill>
  ))
  .add("Oulined pill", () => (
    <PillOutlined
      pillType={select(
        "Type",
        { Primary: "primary", Contrast: "contrast", Warning: "warning" },
        "primary"
      )}
    >
      Outlined Pill
    </PillOutlined>
  ))
  .add("Tinted pill", () => (
    <PillTinted
      pillType={select(
        "Type",
        { Primary: "primary", Contrast: "contrast", Warning: "warning" },
        "primary"
      )}
    >
      Tinted Pill
    </PillTinted>
  ));
