import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRefer = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M7.92 55.94a18.38 18.38 0 0134.25.06c.06.14-34.3.08-34.25-.06z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
    <Path
      d="M33.46 30.31A8.26 8.26 0 1125.2 22a8.29 8.29 0 018.26 8.31z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
    <Path
      d="M47.52 7.92v17.29"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
    <Path
      d="M39 16.57h17.08"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
  </Svg>
);

export default SvgRefer;
