import React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgLanedeparture = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <G>
        <Path d="M36.66 4.1L60 60.19" />
        <Path d="M4 60.19L27.34 4.1" />
      </G>
      <G>
        <Path d="M32 39.16L32 42.66 32 46.17 32 49.67 32 53.18 32 56.68" />
        <Path d="M32 21.63L32 25.14 32 28.64 32 32.15" />
        <Path d="M32 7.61L32 11.11 32 14.62" />
      </G>
    </G>
  </Svg>
);

export default SvgLanedeparture;
