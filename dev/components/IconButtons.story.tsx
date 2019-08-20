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
      size={
        +number("Size", 64, {
          max: 64,
          min: 14,
          range: true,
          step: 2,
        })
      }
      color={select(
        "Colour",
        {
          Green: COLOUR_LIGHT,
          Grey: COLOUR_GREY,
          Orange: COLOUR_ORANGE,
          White: COLOUR_WHITE,
        },
        COLOUR_WHITE
      )}
      buttonType={select(
        "Type",
        { Close: "close", Back: "back", Forward: "forward" },
        "close"
      )}
    />
  ));
