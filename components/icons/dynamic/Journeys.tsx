import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

const SvgJourneys = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <G>
        <Path d="M10.46 27.69L14.77 14.77 49.23 14.77 53.54 27.69 10.46 27.69z" />
        <Path d="M56.47 18.07l3.08 10.26a10.86 10.86 0 01.45 3.1v22.11a2.15 2.15 0 01-2.15 2.15h-4.31a2.16 2.16 0 01-2.16-2.15v-4.31H12.62v4.31a2.16 2.16 0 01-2.16 2.15H6.15A2.15 2.15 0 014 53.54V31.43a10.86 10.86 0 01.45-3.1l5.09-16.95a4.31 4.31 0 014.13-3.07h24.79" />
      </G>
      <G>
        <Path d="M44.92 38.46a4.31 4.31 0 114.31 4.31 4.31 4.31 0 01-4.31-4.31z" />
        <Path d="M10.46 38.46a4.31 4.31 0 114.31 4.31 4.31 4.31 0 01-4.31-4.31z" />
        <Circle cx={54.61} cy={13.69} r={0.01} />
      </G>
    </G>
  </Svg>
);

export default SvgJourneys;
