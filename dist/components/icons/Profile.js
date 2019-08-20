import React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgProfile = ({ color, ...props }) => (<Svg viewBox="0 0 64 64" {...props}>
    <G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
      <Path d="M60 32A28 28 0 1132 4a28 28 0 0128 28z"/>
      <Path d="M12.2 51.8c2.93-7.29 11.46-11.63 19.8-11.63s16.81 4.24 19.73 11.56"/>
      <Path d="M40.17 25A8.17 8.17 0 1132 16.83 8.16 8.16 0 0140.17 25z"/>
    </G>
  </Svg>);
export default SvgProfile;
//# sourceMappingURL=Profile.js.map