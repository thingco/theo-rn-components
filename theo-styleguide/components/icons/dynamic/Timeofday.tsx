import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgTimeofday = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <G>
        <Circle cx={23.09} cy={23.35} r={8.65} />
        <G>
          <Path d="M23.09 3.88v4.33" />
          <Path d="M23.09 38.49v4.32" />
        </G>
        <Path d="M9.32 9.59l3.06 3.05" />
        <G>
          <Path d="M36.85 9.59l-3.06 3.05" />
          <Path d="M12.38 34.05l-3.06 3.06" />
        </G>
        <G>
          <Path d="M42.55 23.35h-4.32" />
          <Path d="M8 23.35H3.62" />
        </G>
      </G>
      <Path d="M45.8 60.12a14.06 14.06 0 01-2.41-27.91A13.76 13.76 0 0145.8 32h4l-3.47 2a8.85 8.85 0 00-1.47 13.64c4 4 10.89 1.53 13-2.13l2-3.58v4.11A14 14 0 0145.8 60.12z" />
    </G>
  </Svg>
);

export default SvgTimeofday;
