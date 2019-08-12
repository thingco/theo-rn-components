import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

const SvgAccidents = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <G>
        <Path d="M56.72 39.56L56.72 7.28 13.84 7.28 13.84 56.72 48.14 56.72" />
        <G>
          <Path d="M7.28 27.96L13.84 27.96" />
          <Path d="M7.28 19.89L13.84 19.89" />
          <Path d="M7.28 11.82L13.84 11.82" />
          <Path d="M7.28 36.03L13.84 36.03" />
          <Path d="M7.28 44.1L13.84 44.1" />
          <Path d="M7.28 52.18L13.84 52.18" />
        </G>
      </G>
      <G>
        <Path d="M30.23 27v-6.1a2 2 0 012-2h6a2 2 0 012 2V27h6a2 2 0 012 2v6a2 2 0 01-2 2h-6v6.1a2 2 0 01-2 2h-6a2 2 0 01-2-2V37h-6.05a2 2 0 01-2-2v-6a2 2 0 012-2z" />
        <Circle cx={56.71} cy={56.71} r={0.01} />
      </G>
    </G>
  </Svg>
);

export default SvgAccidents;
