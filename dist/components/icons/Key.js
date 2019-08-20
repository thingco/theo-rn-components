import React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKey = ({ color, ...props }) => (<Svg viewBox="0 0 64 64" {...props}>
    <Path d="M25.83 34.66a13.49 13.49 0 118.83-8.83L54.9 46.08l.89 9.71-9.71-.89-2.42-2.41-.93-5.88-6.42-1v-6.1h-5.65zm-.95-13.95a4.18 4.18 0 10-4.17 4.17 4.18 4.18 0 004.17-4.17z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}/>
  </Svg>);
export default SvgKey;
//# sourceMappingURL=Key.js.map