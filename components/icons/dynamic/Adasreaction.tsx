import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAdasreaction = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M28.57 4a1.21 1.21 0 00-1.07.64L12.15 32.76a1.2 1.2 0 00-.15.59 1.22 1.22 0 001.22 1.22h18.14l-7.44 23.84a1.25 1.25 0 00.35 1.28 1.22 1.22 0 001.73-.1l27.46-30.7a1.2 1.2 0 00.31-.81 1.22 1.22 0 00-1.23-1.22H37.69L51.85 5.91a1.27 1.27 0 00.21-.69A1.23 1.23 0 0050.83 4z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);

export default SvgAdasreaction;
