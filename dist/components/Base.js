import React from "react";
import { Text as RNText, View, } from "react-native";
import s from "./Styles";
const Screen = (props) => (<View style={[s.flex_1, s.bg_dark, s.p_base, s.pt_lg, props.style]}>
    {props.children}
  </View>);
const Text = (props) => (<RNText style={[s.base_font, s.text_base, props.style]}>
    {props.children}
  </RNText>);
export { Text, Screen };
//# sourceMappingURL=Base.js.map