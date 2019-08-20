import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "./Icons";

type ButtonType = "close" | "back" | "forward";

type IconButtonProps = {
  buttonType: ButtonType;
  size: number;
  color: string;
  onPress?: () => void;
};

const IconButton = ({ buttonType, size, color, ...props }: IconButtonProps) => (
  <TouchableOpacity onPress={props.onPress}>
    <Icon
      selectorString={`icons/${buttonType}`}
      width={size}
      height={size}
      color={color}
    />
  </TouchableOpacity>
);

export { IconButton };
