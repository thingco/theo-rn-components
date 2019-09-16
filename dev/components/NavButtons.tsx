import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle, View } from "react-native";
import { Text } from "./Base";
import { Icon } from "./Icons";
import s from "./Styles";

export const NavTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Text
    style={[
      s.base_font_bold,
      s.text_lg,
      s.white,
      s.flex_1,
      s.text_centre,
      s.spacing_half,
    ]}
  >
    {children}
  </Text>
);

export type ButtonType = "close" | "back" | "forward";

type IconButtonProps = {
  buttonType: ButtonType;
  size: number;
  color: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const IconButton: React.FC<IconButtonProps> = ({
  buttonType,
  size,
  color,
  ...props
}) => (
  <TouchableOpacity style={[props.style]} onPress={props.onPress}>
    <Icon
      selectorString={`icons/${buttonType}`}
      width={size}
      height={size}
      color={color}
    />
  </TouchableOpacity>
);

type NavButtonAlignment = "left" | "right" | "centre";

type NavIconButtonProps = {
  buttonType: ButtonType;
  buttonAlignment: NavButtonAlignment;
  onPress?: () => void;
};

const NavIconButton: React.FC<NavIconButtonProps> = ({
  buttonType,
  buttonAlignment = "centre",
  ...props
}) => {
  const justification =
    buttonAlignment === "left"
      ? s.justify_start
      : buttonAlignment === "right"
      ? s.justify_end
      : s.justify_center;

  return (
    <TouchableOpacity
      style={[s.nav_button_width, s.align_center, s.p_sm, justification]}
      onPress={props.onPress}
    >
      <Icon
        selectorString={`icons/${buttonType}`}
        width={24}
        height={24}
        color="#ffffff"
      />
    </TouchableOpacity>
  );
};

type NavTextButtonProps = {
  children: React.ReactNode;
  buttonAlignment: NavButtonAlignment;
  onPress?: () => void;
};

const NavTextButton: React.FC<NavTextButtonProps> = ({
  children,
  buttonAlignment = "centre",
  ...props
}) => {
  const justification =
    buttonAlignment === "left"
      ? s.text_left
      : buttonAlignment === "right"
      ? s.text_right
      : s.text_centre;
  return (
    <TouchableOpacity
      style={[s.nav_button_width, s.align_center]}
      onPress={props.onPress}
    >
      <Text style={[s.white, s.p_sm, s.base_font_bold, justification]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const NavSpacerLeft: React.FC<{}> = () => (
  <View style={[s.p_sm, s.nav_button_width]} />
);
const NavSpacerRight: React.FC<{}> = () => (
  <View style={[s.p_sm, s.nav_button_width]} />
);

export {
  IconButton,
  NavIconButton,
  NavSpacerLeft,
  NavSpacerRight,
  NavTextButton,
};
