import React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgDuration = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M60 32A28 28 0 1132 4a28 28 0 0128 28z" />
      <Path d="M32 12L32 32 41.94 41.86" />
    </G>
  </Svg>
);

export default SvgDuration;
