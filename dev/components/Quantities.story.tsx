import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, select, number } from "@storybook/addon-knobs";

import { Screen, Text } from "./Base";
import { FormattedDistance, FormattedSpeed } from "./Quantities";

import s from "./Styles";

storiesOf("Atoms", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_center]}>{getStory()}</Screen>
  ))
  .addDecorator(withKnobs)
  .add("Distance", () => {
    return (
      <Text style={[s.white]}>
        <Text>You have travelled </Text>
        <FormattedDistance
          km={number("Kilometres", 42, { range: true, min: 0, max: 500 })}
          precision={number("Precision", 1, {
            max: 4,
            min: 0,
            range: true,
            step: 1,
          })}
          style={[s.base_font_bold]}
          units={select("Units", { Imperial: "I", Metric: "M" }, "I")}
        />
      </Text>
    );
  })
  .add("Speed", () => {
    return (
      <Text style={[s.white]}>
        <Text>Your average speed was </Text>
        <FormattedSpeed
          kmph={number("Kilometres/ph", 42, { range: true, min: 0, max: 120 })}
          precision={number("Precision", 1, {
            max: 4,
            min: 0,
            range: true,
            step: 1,
          })}
          style={[s.base_font_bold]}
          units={select("Units", { Imperial: "I", Metric: "M" }, "I")}
        />
      </Text>
    );
  });
