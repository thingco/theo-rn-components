import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBack = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M36 12L16 32 36 52"
    />
  </Svg>
);

export default SvgBack;
