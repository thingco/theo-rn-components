import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "./Icons";

import s from "./Styles";

/** Buttons used exclusively in headers: */
export const Button = ({ navigation }) => (
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

type ButtonType = "close" | "back" | "forward";

export const IconButton = ({ buttonType, size, color, ...props }) => (
  <TouchableOpacity onPress={props.onPress}>
    <Icon
      selectorString={`icons/${buttonType}`}
      width={size}
      height={size}
      color={color}
    />
  </TouchableOpacity>
);
