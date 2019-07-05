import React from "react";
import { TouchableOpacity, View } from "react-native";
import { BaseText } from "./Base";
import { Icon } from "./Icon";

import s from "../Styles";

export const Link = (props) => (
  <TouchableOpacity style={props.style} onPress={props.onPress}>
    <BaseText style={[s.text_sm, s.underline]}>{props.children}</BaseText>
  </TouchableOpacity>
);

export const LinkGroup = ({ links, ...props }) => (
  <View style={[s.flex_row, s.justify_between, props.style]}>
    {links.map(({ onPress, linkText }, i) => (
      <Link key={i} onPress={onPress}>
        {linkText}
      </Link>
    ))}
  </View>
);

export const CloseButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack(null);
    }}
  >
    <Icon selectorString="icons/nav/close" />
  </TouchableOpacity>
);

export const BackButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack(null);
    }}
  >
    <Icon selectorString="icons/nav/back" />
  </TouchableOpacity>
);

export const ButtonPrimary = (props) => (
  <TouchableOpacity
    style={[
      s.bg_light,
      s.align_center,
      s.justify_center,
      s.min_button_height,
      s.rounded,
      props.style,
    ]}
    onPress={props.onPress}
  >
    <BaseText style={[s.white, s.text_centre, s.text_lg, s.base_font_bold]}>
      {props.children}
    </BaseText>
  </TouchableOpacity>
);

export const ButtonSecondary = (props) => (
  <TouchableOpacity
    style={[
      s.align_center,
      s.justify_center,
      s.min_button_height,
      s.rounded,
      s.border_2,
      s.border_light,
      props.style,
    ]}
    onPress={props.onPress}
  >
    <BaseText style={[s.light, s.text_centre, s.text_lg, s.base_font_bold]}>
      {props.children}
    </BaseText>
  </TouchableOpacity>
);
