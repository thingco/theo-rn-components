import React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgErraticdriving = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <G>
        <Path d="M14.01 14.54L19.54 8.16 39.28 16.34 38.68 24.76 14.01 14.54z" />
        <Path d="M36.25 41.09a1.33 1.33 0 01-1.75.72l-2.46-1a1.34 1.34 0 01-.73-1.74l1-2.47-22.2-9.19-1 2.46a1.35 1.35 0 01-1.75.73l-2.46-1a1.33 1.33 0 01-.73-1.74l5.26-12.71a6.88 6.88 0 011-1.67L17.35 5a2.69 2.69 0 013.1-.78l21 8.7a2.66 2.66 0 011.63 2.74L42 26.55a6.75 6.75 0 01-.48 1.88z" />
        <Path d="M31.19 28.88a2.67 2.67 0 111.45 3.49 2.67 2.67 0 01-1.45-3.49z" />
        <Path d="M11.46 20.71a2.67 2.67 0 111.44 3.49 2.68 2.68 0 01-1.44-3.49z" />
      </G>
      <Path d="M4.18 32.57c-.5 16.89 21.2 14.5 32.15 27.43" />
      <Path d="M32.28 44.54C33.06 51.26 54 50 60.09 60" />
    </G>
  </Svg>
);

export default SvgErraticdriving;
