import React from "react";
import Svg, { Path } from "react-native-svg";
const SvgClose = ({ color, ...props }) => (<Svg viewBox="0 0 64 64" {...props}>
    <Path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 52L52 12"/>
    <Path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 12L52 52"/>
  </Svg>);
export default SvgClose;
//# sourceMappingURL=Close.js.map