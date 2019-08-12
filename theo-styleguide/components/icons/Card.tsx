import React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

const SvgCard = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Rect
      x={5.68}
      y={12}
      width={52.63}
      height={40}
      rx={2.11}
      fill="none"
      stroke={color}
      strokeWidth={3}
    />
    <Path
      fill="none"
      stroke={color}
      strokeWidth={3}
      d="M5.68 20.42H58.31V26.740000000000002H5.68z"
    />
    <Path
      d="M12 37.26h14.74"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth={3}
    />
    <Path
      d="M13.05 44.63h21.06"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth={3}
    />
    <Circle
      cx={48.84}
      cy={40.42}
      r={4.21}
      fill="none"
      stroke={color}
      strokeWidth={3}
    />
  </Svg>
);

export default SvgCard;
