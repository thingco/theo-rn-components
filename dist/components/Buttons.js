import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "./Base";
import s from "./Styles";
/** Core styles for buttons/button text that are shared between all variants: */
const baseButtonStyles = [
    s.align_center,
    s.justify_center,
    s.min_button_height,
    s.ph_lg,
    s.rounded,
];
const buttonStyles = (type) => {
    switch (type) {
        case "primary":
            return [...baseButtonStyles, s.bg_light];
        case "secondary":
            return [...baseButtonStyles, s.border_2, s.border_light];
        case "danger":
            return [...baseButtonStyles, s.bg_contrast];
        default:
            throw new Error(`Incorrect button type specified (${type}) - type must be one of "primary", "secondary" or "danger".`);
    }
};
const buttonTextStyles = [s.text_centre, s.text_lg, s.base_font_bold];
const Button = ({ buttonType, ...props }) => (<TouchableOpacity style={[
    ...buttonStyles(buttonType),
    { opacity: props.disabled ? 0.5 : 1 },
    props.style,
]} onPress={props.onPress}>
    <Text style={[s.white, ...buttonTextStyles]}>{props.children}</Text>
  </TouchableOpacity>);
export { Button };
//# sourceMappingURL=Buttons.js.map