import React from "react";
import { View } from "react-native";
import { BaseText as Text } from "../../components/Base";
import s from "../../Styles";

export const Welcome = () => (
  <View
    style={[s.flex_1, s.justify_center, s.align_start, s.bg_dark, s.p_base]}
  >
    <Text style={[s.text_xl, s.base_font_bold]}>
      Welcome to React Native Storybook
    </Text>
    <Text>
      This is a UI Component development environment for your React Native app.
      Here you can display and interact with your UI components as stories. A
      story is a single state of one or more UI components. You can have as many
      stories as you want. In other words a story is like a visual test case.
    </Text>
    <Text>
      We have added some stories inside the "storybook/stories" directory for
      examples. Try editing the "storybook/stories/Welcome.tsx" file to edit
      this message.
    </Text>
  </View>
);

const Colour = ({ name, hex, style, textColour = s.white }) => (
  <View style={[s.flex_1, s.p_base, s.justify_end, s.align_end, style]}>
    <View>
      <Text style={[s.text_right, textColour]}>{name}</Text>
      <Text style={[s.text_right, textColour]}>{hex}</Text>
    </View>
  </View>
);

export const Colours = () => (
  <View style={[s.flex_1]}>
    <Colour style={[s.bg_dark]} name="DARK" hex="#003E52" />
    <Colour style={[s.bg_mid]} name="MID" hex="#1A5163" />
    <Colour style={[s.bg_light]} name="LIGHT" hex="#19988B" />
    <Colour style={[s.bg_contrast]} name="CONTRAST" hex="#FF6D37" />
    <Colour
      style={[s.bg_white]}
      name="WHITE"
      hex="#FFFFFF"
      textColour={[s.black]}
    />
    <Colour
      style={[s.bg_grey]}
      name="GREY"
      hex="#FCFCFC"
      textColour={[s.black]}
    />
  </View>
);
