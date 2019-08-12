import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgForward = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M28 12L48 32 28 52"
    />
  </Svg>
);

export default SvgForward;
