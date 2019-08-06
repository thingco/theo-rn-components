import React from "react";
import { Text, View } from "react-native";

import s from "../Styles";

export const BaseText = (props) => (
  <Text style={[s.base_font, s.text_base, props.style]}>{props.children}</Text>
);

export const LightText = (props) => (
  <BaseText style={[s.light, props.style]}>{props.children}</BaseText>
);

export const DarkText = (props) => (
  <BaseText style={[s.dark, props.style]}>{props.children}</BaseText>
);

export const BoldText = (props) => (
  <BaseText style={[s.base_font_bold, props.style]}>{props.children}</BaseText>
);

export const Screen = (props) => (
  <View style={[s.flex_1, s.bg_dark, s.p_base, s.pt_lg, props.style]}>
    {props.children}
  </View>
);
