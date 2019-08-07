import React from "react";
import { TouchableOpacity, View } from "react-native";
import { BaseText } from "./Base";
import { Icon } from "./Icons";

import s from "../Styles";

/** Buttons used exclusively in headers: */
export const CloseButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack(null);
    }}
  >
    <Icon selectorString="icons/close" width={24} height={24} color="#ffffff" />
  </TouchableOpacity>
);

export const BackButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack(null);
    }}
  >
    <Icon selectorString="icons/back" width={24} height={24} color="#ffffff" />
  </TouchableOpacity>
);

/** Core styles for buttons/button text that are shared between all variants: */
const buttonStyles = [
  s.align_center,
  s.justify_center,
  s.min_button_height,
  s.rounded,
];

const buttonTextStyles = [s.text_centre, s.text_lg, s.base_font_bold];

/** The three different varieties of button styling: */
export const ButtonPrimary = (props) => (
  <TouchableOpacity
    style={[s.bg_light, ...buttonStyles, props.style]}
    onPress={props.onPress}
  >
    <BaseText style={[s.white, ...buttonTextStyles]}>{props.children}</BaseText>
  </TouchableOpacity>
);

export const ButtonSecondary = (props) => (
  <TouchableOpacity
    style={[...buttonStyles, s.border_2, s.border_light, props.style]}
    onPress={props.onPress}
  >
    <BaseText style={[s.white, ...buttonTextStyles]}>{props.children}</BaseText>
  </TouchableOpacity>
);

export const ButtonWarning = (props) => (
  <TouchableOpacity
    style={[s.bg_contrast, ...buttonStyles, props.style]}
    onPress={props.onPress}
  >
    <BaseText style={[s.white, ...buttonTextStyles]}>{props.children}</BaseText>
  </TouchableOpacity>
);
