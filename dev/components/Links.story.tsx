import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { Screen } from "./Base";
import { Link } from "./Links";
import s from "./Styles";

storiesOf("Atoms", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_center]}>{getStory()}</Screen>
  ))
  .add("Standard link", () => <Link url={null}>I'm a link</Link>);

storiesOf("Molecules", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .add("Link group (horizontal)", () => (
    <View style={[s.flex_row, s.justify_between]}>
      <Link url={null}>Link 1</Link>
      <Link url={null}>Link 2</Link>
      <Link url={null}>Link 3</Link>
    </View>
  ));
