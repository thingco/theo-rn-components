import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

const SvgDashboard = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <G>
        <Path d="M60 32A28 28 0 1132 4a28 28 0 0128 28z" />
        <Path d="M50.85 41.26a21 21 0 01-16.53 11.61A19.68 19.68 0 0132 53M11 32a21 21 0 0142 0" />
      </G>
      <G>
        <Path d="M35.8 32a3.8 3.8 0 11-3.8-3.8 3.8 3.8 0 013.8 3.8z" />
        <Path d="M32 19.27v8.93" />
        <Circle cx={26.17} cy={51.84} r={0.01} />
      </G>
    </G>
  </Svg>
);

export default SvgDashboard;
