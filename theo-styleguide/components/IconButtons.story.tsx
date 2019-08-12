import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, select, number } from "@storybook/addon-knobs";

import { Screen } from "./Base";
import { IconButton } from "./IconButtons";
import s, {
  COLOUR_LIGHT,
  COLOUR_WHITE,
  COLOUR_ORANGE,
  COLOUR_GREY,
} from "./Styles";

storiesOf("Atoms", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_center]}>{getStory()}</Screen>
  ))
  .addDecorator(withKnobs)
  .add("Basic icon button (single-colour)", () => (
    <IconButton
      size={number("Size", 64, {
        range: true,
        min: 14,
        max: 64,
        step: 2,
      })}
      color={select(
        "Colour",
        {
          White: COLOUR_WHITE,
          Green: COLOUR_LIGHT,
          Grey: COLOUR_GREY,
          Orange: COLOUR_ORANGE,
        },
        COLOUR_WHITE
      )}
      buttonType={select(
        "Type",
        { Close: "close", Back: "back", Forward: "forward" },
        "close"
      )}
      t
    >
      Press Me
    </IconButton>
  ));
