import React from "react";
import { View } from "react-native";
import s from "../../Styles";

export const CenterView = ({ children }) => (
  <View style={[s.flex_1, s.justify_center, s.align_center, s.bg_dark]}>
    {children}
  </View>
);
