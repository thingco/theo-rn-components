import React from "react";
import { Text, View } from "react-native";

import s from "./Styles";

export const Screen = (props) => (
  <View style={[s.flex_1, s.bg_dark, s.p_base, s.pt_lg, props.style]}>
    {props.children}
  </View>
);

export const BaseText = (props) => (
  <Text style={[s.base_font, s.text_base, props.style]}>{props.children}</Text>
);
