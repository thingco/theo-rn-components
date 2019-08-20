import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "./Icons";
const IconButton = ({ buttonType, size, color, ...props }) => (<TouchableOpacity onPress={props.onPress}>
    <Icon selectorString={`icons/${buttonType}`} width={size} height={size} color={color}/>
  </TouchableOpacity>);
export { IconButton };
//# sourceMappingURL=IconButtons.js.map