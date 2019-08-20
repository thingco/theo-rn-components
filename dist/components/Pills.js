import React from "react";
import { Text } from "./Base";
import s, { FONT_SIZE_SMALL } from "./Styles";
const basePillStyles = [
    s.base_font_bold,
    s.text_sm,
    s.bold,
    s.overflow_hidden,
    s.pv_xs,
    s.ph_base,
    s.spacing_half,
    s.text_centre,
    { borderRadius: FONT_SIZE_SMALL },
];
function pillStyle(pillType) {
    switch (pillType) {
        case "primary":
            return [...basePillStyles, s.white, s.bg_light];
        case "contrast":
            return [...basePillStyles, s.white, s.bg_contrast];
        case "warning":
            return [...basePillStyles, s.dark, s.bg_warning];
    }
}
const Pill = ({ pillType, children, ...props }) => (<Text style={[...pillStyle(pillType), props.style]}>{children}</Text>);
function pillOutlineStyle(pillType) {
    switch (pillType) {
        case "primary":
            return [...basePillStyles, s.border_2, s.light, s.border_light];
        case "contrast":
            return [...basePillStyles, s.border_2, s.contrast, s.border_contrast];
        case "warning":
            return [...basePillStyles, s.border_2, s.warning, s.border_warning];
    }
}
const PillOutlined = ({ pillType, children, ...props }) => (<Text style={[...pillOutlineStyle(pillType), props.style]}>{children}</Text>);
function pillTintedStyle(pillType) {
    switch (pillType) {
        case "primary":
            return [...basePillStyles, s.dark, s.bg_light_tinted];
        case "contrast":
            return [...basePillStyles, s.dark, s.bg_contrast_tinted];
        case "warning":
            return [...basePillStyles, s.dark, s.bg_warning_tinted];
    }
}
const PillTinted = ({ pillType, children, ...props }) => (<Text style={[...pillTintedStyle(pillType), props.style]}>{children}</Text>);
export { Pill, PillOutlined, PillTinted };
//# sourceMappingURL=Pills.js.map