import React from "react";
import { Text } from "react-native";

import s from "../Styles";

export const BaseText = (props) => (
  <Text style={[s.base_font, s.white, s.text_base, props.style]}>
    {props.children}
  </Text>
);
