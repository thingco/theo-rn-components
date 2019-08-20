import React from "react";
import { storiesOf } from "@storybook/react-native";

import { Screen } from "./Base";
import { FormattedDate, FormattedTime } from "./DateTime";

import s from "./Styles";

storiesOf("Atoms", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_center]}>{getStory()}</Screen>
  ))
  .add("Date", () => {
    const timestampInt = +Date.now();
    return <FormattedDate style={[s.white]} timestamp={timestampInt} />;
  })
  .add("Time", () => {
    const timestampInt = +Date.now();
    return <FormattedTime style={[s.white]} timestamp={timestampInt} />;
  });
