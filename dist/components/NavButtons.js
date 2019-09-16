import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./Base";
import { Icon } from "./Icons";
import s from "./Styles";
export const NavTitle = ({ children, }) => (<Text style={[
    s.base_font_bold,
    s.text_lg,
    s.white,
    s.flex_1,
    s.text_centre,
    s.spacing_half,
]}>
    {children}
  </Text>);
const IconButton = ({ buttonType, size, color, ...props }) => (<TouchableOpacity style={[props.style]} onPress={props.onPress}>
    <Icon selectorString={`icons/${buttonType}`} width={size} height={size} color={color}/>
  </TouchableOpacity>);
const NavIconButton = ({ buttonType, buttonAlignment = "centre", ...props }) => {
    const justification = buttonAlignment === "left"
        ? s.justify_start
        : buttonAlignment === "right"
            ? s.justify_end
            : s.justify_center;
    return (<TouchableOpacity style={[s.nav_button_width, s.align_center, s.p_sm, justification]} onPress={props.onPress}>
      <Icon selectorString={`icons/${buttonType}`} width={24} height={24} color="#ffffff"/>
    </TouchableOpacity>);
};
const NavTextButton = ({ children, buttonAlignment = "centre", ...props }) => {
    const justification = buttonAlignment === "left"
        ? s.text_left
        : buttonAlignment === "right"
            ? s.text_right
            : s.text_centre;
    return (<TouchableOpacity style={[s.nav_button_width, s.align_center]} onPress={props.onPress}>
      <Text style={[s.white, s.p_sm, s.base_font_bold, justification]}>
        {children}
      </Text>
    </TouchableOpacity>);
};
const NavSpacerLeft = () => (<View style={[s.p_sm, s.nav_button_width]}/>);
const NavSpacerRight = () => (<View style={[s.p_sm, s.nav_button_width]}/>);
export { IconButton, NavIconButton, NavSpacerLeft, NavSpacerRight, NavTextButton, };
//# sourceMappingURL=NavButtons.js.map