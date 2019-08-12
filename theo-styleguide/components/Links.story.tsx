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
  .add("Standard link", () => <Link onPress={() => void 0}>I'm a link</Link>);

storiesOf("Molecules", module)
  .addDecorator((getStory) => (
    <Screen style={[s.justify_center, s.align_stretch]}>{getStory()}</Screen>
  ))
  .add("Link group (horizontal)", () => (
    <View style={[s.flex_row, s.justify_between]}>
      <Link onPress={() => void 0}>Link 1</Link>
      <Link onPress={() => void 0}>Link 2</Link>
      <Link onPress={() => void 0}>Link 3</Link>
    </View>
  ));
