import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

const SvgNotifications = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M13.22 34.34v10.53L9.82 50a2.34 2.34 0 00.67 3.24 2.28 2.28 0 001.29.39h40.44a2.34 2.34 0 002.34-2.34 2.37 2.37 0 00-.38-1.29l-3.4-5.14V28.78A19 19 0 0036.34 10.3v-2a4.34 4.34 0 10-8.67 0v2a18.73 18.73 0 00-9.53 5.7" />
      <G>
        <Path d="M27.32 54.22v1.17a4.68 4.68 0 009.36 0v-1.17" />
        <Circle cx={14.45} cy={21.47} r={0.01} />
      </G>
    </G>
  </Svg>
);

export default SvgNotifications;
