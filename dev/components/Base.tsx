import React from "react";
import {
  Text as RNText,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";

import s from "./Styles";

type ScreenProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => (
  <View style={[s.flex_1, s.bg_dark, s.pv_base, s.pt_lg, props.style]}>
    {props.children}
  </View>
);

type TextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<TextProps> = (props: TextProps) => (
  <RNText style={[s.base_font, s.text_base, props.style]}>
    {props.children}
  </RNText>
);

export { Text, Screen };
